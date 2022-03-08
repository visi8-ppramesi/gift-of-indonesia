import firestoreOrm from 'firestore-orm'

const types = firestoreOrm.types

export default {
    recipes: {
        description: {
            type: String
        },
        image: {
            type: types.Firestorage
        },
        ingredients: {
            type: Array
        },
        text: {
            type: String
        },
        title: {
            type: String
        },
        tags: {
            type: Array
        }
    },
    spices: {
        description: {
            type: String
        },
        image: {
            type: types.Firestorage
        },
        name: {
            type: String
        },
        price: {
            type: Number
        }
    },
    connections: {
        identifier: {
            type: String
        },
        open: {
            type: Number
        }
    }
}