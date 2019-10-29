import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');

const createStore = () => {
  return new Vuex.Store({
    state: {
      cart: cart ? JSON.parse(cart) : [],
      products: [{
          id: 1,
          img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Hoodie_Green.png?alt=media&token=88434e76-11b4-4f12-ae73-a4d1682ddcb8',
          title: "Skull Hoodie",
          price: 39.99,
          soldOut: false,
          quantity: 1
        },
        {
          id: 2,
          img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Jeans_1.png?alt=media&token=a7620aa5-c312-433f-bf91-1ea04cbe79da',
          title: "Dark Denim",
          price: 69.99,
          soldOut: false,
          quantity: 1
        },
        {
          id: 3,
          img: '',
          title: "Butterfly Hoodie",
          price: 69.99,
          soldOut: true,
          quantity: 1
        }
      ]
    },
    mutations: {
      addToCart(state, id) {
        let found = state.cart.find(product => product && product.id == id);
        if (found) {
          found.quantity++;
        } else {
          let item = state.products.find(product => product && product.id == id);
          state.cart.push(item);
        };
        this.commit('cartPersistence');
      },
      increaseQuantity(state, item) {
        state.cart.find(product => product.id == item.id).quantity++;
        this.commit('cartPersistence');
      },
      decreaseQuantity(state, item) {
        let cartItem = state.cart.find(product => product.id == item.id)
        if (cartItem.quantity < 1) {
          cartItem.quantity--;
        } else {
          this.commit('removeFromCart');
        }
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
}

export default createStore