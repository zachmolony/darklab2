import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: [],
        products: [
            {
              id: 1,
              img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Hoodie_Green.png?alt=media&token=88434e76-11b4-4f12-ae73-a4d1682ddcb8',
              title: "Skull Hoodie",
              type: 'tees',
              price: '£xx.xx',
              soldOut: false
            },
            {
              id: 2,
              img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Jeans_1.png?alt=media&token=a7620aa5-c312-433f-bf91-1ea04cbe79da',
              title: "Dark Denim",
              type: 'pants',
              price: '£xx.xx',
              soldOut: false
            },
            {
              id: 3,
              img: '',
              title: "Butterfly Hoodie",
              type: 'accessories',
              price: '£xx.xx',
              soldOut: true
            }
          ]
    },
    mutations: {
        addToCart(state, item) {
            state.cart.push(item);
        }
    }
})