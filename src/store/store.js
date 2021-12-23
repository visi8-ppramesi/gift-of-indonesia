import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        spiceIndo: [
            {id: 1, name: 'Cengkeh', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', price: '5,000', quantity: 0},
            {id: 2, name: 'Kayu Manis', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', price: '5,000', quantity: 0},
            {id: 3, name: 'Kapulaga', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', price: '5,000', quantity: 0},
        ],
        cartItemCount: 0,
        cartItems: [],
    },
    mutations: {
       addToCart(state, payload) {
           let item = payload;
           item = {...item, quantity: 1}
           if(state.cartItems,length > 0){
               let bool = state.cartItems.some(i => i.id == item.id)
               if(bool) {
                   let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
                   state.cartItems[itemIndex]["quantity"] += 1;
               }else {
                   state.cartItems.push(item)
               }
           }else {
               state.cartItems.push(item)
           }
           state.cartItemCount++
        },
        removeItem(state, payload){
            if(state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id === payload.id)

                if(bool) {
                    let index = state.cartItems.findIndex(el => el.id === payload.id)
                    if (state.cartItems[index]["quantity"] != 0){
                        state.cartItems[index]["quantity"] -= 1
                        state.cartItemCount--
                    }
                }
            }
        }
    },
    actions: {
        addToCart: (context, payload) => {
            context.commit("addToCart", payload)
        },
        removeItem: (context, payload) => {
            context.commit("removeItem", payload)
        }
    }
})

export default store