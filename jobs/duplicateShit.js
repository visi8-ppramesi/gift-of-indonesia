
const { getStorage, ref, getDownloadURL } = require("firebase/storage")
const { initializeApp } = require("firebase/app")
const { doc, getDoc, getDocs, updateDoc, getFirestore, collection } = require('firebase/firestore')
const env = require('dotenv').config().parsed

// import dotenv from 'dotenv'

// const env = dotenv.config().parsed
const firebaseConfig = {
    apiKey: env.VUE_APP_API_KEY,
    authDomain: env.VUE_APP_AUTH_DOMAIN,
    projectId: env.VUE_APP_PROJECT_ID,
    storageBucket: env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: env.VUE_APP_MESSAGING_SENDER_ID,
    appId: env.VUE_APP_APP_ID,
    measurementId: env.VUE_APP_MEASUREMENT_ID
};

console.log(firebaseConfig)

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const recipes = collection(db, 'recipes')
const spices = collection(db, 'spices')

const promises = []
getDocs(recipes).then((res) => {
    res.forEach((doc) => {
        const myData = doc.data()
        myData.id = doc.id
        promises.push(new Promise((resolve, reject) => {
            resolve(myData)
        }))
    })
    Promise.all(promises).then((data) => {
        const { ingredients } = data.find(d => !!d.ingredients)
        console.log(ingredients)
        data.forEach((recipe) => {
            const recRef = doc(db, 'recipes', recipe.id)
            updateDoc(recRef, { ingredients }).then((updt) => {
                console.log(updt)
            })
        })
    })
})

// const recipeById = async function(id){
//     const docRef = doc(this.db, "recipes", id)
//     const docSnap = await getDoc(docRef)
//     const data = docSnap.data()
//     data.image = await getDownloadURL(ref(this.storage, data.image))
//     return data
// }