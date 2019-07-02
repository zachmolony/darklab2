import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart =  window.localStorage.getItem('cart');

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
        products: [
            {
              id: 1,
              img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Hoodie_Green.png?alt=media&token=88434e76-11b4-4f12-ae73-a4d1682ddcb8',
              title: "Skull Hoodie",
              price: '£xx.xx',
              soldOut: false,
              quantity: 1
            },
            {
              id: 2,
              img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Jeans_1.png?alt=media&token=a7620aa5-c312-433f-bf91-1ea04cbe79da',
              title: "Dark Denim",
              price: '£xx.xx',
              soldOut: false,
              quantity: 1
            },
            {
              id: 3,
              img: '',
              title: "Butterfly Hoodie",
              price: '£xx.xx',
              soldOut: true,
              quantity: 1
            }
          ]
    },
    mutations: {
        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);
            if (found) {
                found.quantity++;
            } else {
                state.cart.push(item);
            };
            this.commit('cartPersistence');
        },
        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1);
            this.commit('cartPersistence');
        },
        cartPersistence(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
})