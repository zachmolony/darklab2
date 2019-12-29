import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      cart: cart ? JSON.parse(cart) : [],
      products: [{
          id: 2,
          img: 'https://firebasestorage.googleapis.com/v0/b/outer-limits-200b9.appspot.com/o/cairo_hood.png?alt=media&token=e6ed0491-86a9-4734-ba74-c8c69407f572',
          title: "Cairo Hood",
          price: 'coming soon',
          soldOut: false,
          quantity: 1,
          desc: "• Wasteman Retardant"
        },
        {
          id: 3,
          img: 'https://firebasestorage.googleapis.com/v0/b/outer-limits-200b9.appspot.com/o/cairo_sweatpants.png?alt=media&token=b0e59f70-65bb-4dce-bd79-bc90783015d3',
          title: "Cairo Pants",
          price: 'coming soon',
          soldOut: false,
          quantity: 1,
          desc: "• Wasteman Retardant"
        },
        {
          id: 1,
          img: 'https://firebasestorage.googleapis.com/v0/b/outer-limits-200b9.appspot.com/o/monster_hoodie.png?alt=media&token=c061e8fe-aace-4f89-b681-e8d625827012',
          title: "Monster Hood",
          price: 'coming soon',
          soldOut: false,
          quantity: 1,
          desc: "• Wasteman Retardant"
        },
        {
          id: 4,
          img: 'https://firebasestorage.googleapis.com/v0/b/outer-limits-200b9.appspot.com/o/expanse_hood.png?alt=media&token=d7f5b4bd-9abd-449e-af25-5b71ca4d702e',
          title: "Expanse Hood",
          price: 'coming soon',
          soldOut: false,
          quantity: 1,
          desc: "• Wasteman Retardant"
        },
        {
          id: 5,
          img: 'https://firebasestorage.googleapis.com/v0/b/outer-limits-200b9.appspot.com/o/metal_denim.png?alt=media&token=342fca5c-d29e-43d1-90b9-247cea839f20',
          title: "Death Metal Denim",
          price: 'coming soon',
          soldOut: false,
          quantity: 1,
          desc: `• Oooh im cool i got jeans on\n• Fuck you`
        }
      ]
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName;
      },
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
        if (cartItem.quantity > 1) {
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