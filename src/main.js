import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'
import './registerServiceWorker'
import store from './store/store.js'

import { getStorage, ref, getDownloadURL } from "firebase/storage"
import { initializeApp } from "firebase/app"
import { doc, getDoc, getFirestore, collection } from 'firebase/firestore'

// import dotenv from 'dotenv'

// const env = dotenv.config().parsed
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const recipes = collection(db, 'recipes')
const spices = collection(db, 'spices')

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

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app')
