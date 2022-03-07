import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'
import './registerServiceWorker'
import store from './store/store.js'
import firestoreConfig from './configs/firestore.js'
import firebaseConfig from './configs/firebase.js'

import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { initializeApp } from "firebase/app"
import { doc, getDoc, getFirestore, collection } from 'firebase/firestore'
import firestoreOrm from 'firestore-orm'
import Cookies from 'js-cookie'
import axioss from 'axios'
import _ from 'lodash'
import 'aframe'
import { uuidv4 } from './utils/utils.js'
import EventBus from './utils/eventBus.js'
import Swal from 'sweetalert2'
import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";

Vue.use(Flicking);
// import dotenv from 'dotenv'

// const env = dotenv.config().parsed
// const firebaseConfig = {
//   apiKey: process.env.VUE_APP_API_KEY,
//   authDomain: process.env.VUE_APP_AUTH_DOMAIN,
//   projectId: process.env.VUE_APP_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_APP_ID,
//   measurementId: process.env.VUE_APP_MEASUREMENT_ID
// };
const testing = Cookies.get('testing') || (Math.random() + 1).toString(36).substring(2)
Cookies.set('testing', testing)
console.log(testing)
Vue.prototype.$firestoreOrm = new firestoreOrm.FirestoreOrm(firebaseConfig, firestoreConfig)
Vue.prototype.$cookies = Cookies
window.axios = axioss
Vue.prototype.$isOculus = /OculusBrowser/.test(navigator.userAgent) //!!navigator.userAgent.match(/OculusBrowser/)
Vue.prototype.$isMobile = /Android|iPhone/.test(navigator.userAgent);

EventBus.$once('connectionStarted', function(idObj){
    if(process.env.VUE_APP_ENVIRONMENT !== 'production'){
        Swal.fire(JSON.stringify(idObj))
    }
})

const connectionUuid = window.localStorage.getItem('uuid')
const connectionId = window.localStorage.getItem('id')
// eslint-disable-next-line no-constant-condition
if(Vue.prototype.$isOculus || Vue.prototype.$isMobile){
    if(_.isNull(connectionId) || _.isNull(connectionUuid)){
        const uuid = uuidv4()
        Vue.prototype.$firestoreOrm.collections.connections.functions.create({
            identifier: uuid,
            open: 0
        }).then((newConnectionId) => {
            window.localStorage.setItem('uuid', uuid)
            window.localStorage.setItem('id', newConnectionId)
            Vue.prototype.$connection = {identifier: uuid, id: newConnectionId}
            EventBus.$emit('connectionStarted', { identifier: uuid, id: newConnectionId })
        })
    }else{
        Vue.prototype.$connection = { identifier: connectionUuid, id: connectionId }
        EventBus.$emit('connectionStarted', { identifier: connectionUuid, id: connectionId })
        Vue.prototype.$firestoreOrm.collections.connections.functions.checkById(connectionId).then((exist) => {
            if(!exist){
                const uuid = uuidv4()
                Vue.prototype.$firestoreOrm.collections.connections.functions.create({
                    identifier: uuid,
                    open: 0
                }).then((newConnectionId) => {
                    window.localStorage.setItem('uuid', uuid)
                    window.localStorage.setItem('id', newConnectionId)
                    Vue.prototype.$connection = {identifier: uuid, id: newConnectionId}
                    EventBus.$emit('connectionStarted', { identifier: uuid, id: newConnectionId })
                })
            }
        })
    }
}else{
    if(_.isNull(connectionId) || _.isNull(connectionUuid)){
        Swal.fire({
            title: 'Enter pair connection id',
            html:
                '<input id="uuid" class="swal2-input" placeholder="Enter UUID">' +
                '<input id="connection-id" class="swal2-input" placeholder="Enter Connection ID">',
            inputAttributes: {
                autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            // eslint-disable-next-line no-unused-vars
            preConfirm: (login) => {
                const uuid = document.getElementById("uuid").value
                const id = document.getElementById("connection-id").value
                Vue.prototype.$connection = {
                    identifier: uuid, 
                    id: id
                }
                window.localStorage.setItem('uuid', uuid)
                window.localStorage.setItem('id', id)
                EventBus.$emit('connectionStarted', { identifier: uuid, id: id })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(result)
            }
        })
    }else{
        Vue.prototype.$connection = {identifier: connectionUuid, id: connectionId}
        EventBus.$emit('connectionStarted', { identifier: connectionUuid, id: connectionId })
    }
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const recipes = collection(db, 'recipes')
const spices = collection(db, 'spices')
// window.fuck = Vue.prototype.$firestoreOrm

Vue.prototype.$firebase = {
    app,
    db,
    recipes,
    spices,
    storage,
    recipeById: async function(id){
        const docRef = doc(this.db, "recipes", id)
        const docSnap = await getDoc(docRef)
        const data = docSnap.data()
        data.image = await getDownloadURL(ref(this.storage, data.image))
        return data
    }
}
Vue.config.productionTip = false
Vue.config.ignoredElements = [
    'a-scene',
    'a-camera',
    'a-box',
    'a-sky',
    'a-sphere',
    'a-cylinder',
    'a-plane',
    'a-image',
    'a-assets',
    'a-entity',
    'a-videosphere',
]

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
