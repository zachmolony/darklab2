<template>
  <div id="app">
    <Products  v-bind:products="products" v-on:addToCart="addToCart"/>
  </div>
</template>

<script>
import Products from '../components/Products.vue'

export default {
  name: 'app',
  components: {
    Products
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Black Tee",
          // image: require('../assets/items/tee_black.png'),
          price: 19.99,
          soldOut: false
        },
        {
          id: 2,
          title: "Ripped Jeans",
          price: 49.99,
          soldOut: false
        },
        {
          id: 3,
          title: "Dark Hat",
          price: 29.99,
          soldOut: true
        }
      ]
    }
  },
  methods: {
    addToCart(id) {
      console.log(id)
    }
  },
  created() {
    axios.get('')
      .then(res => this.products = res.data)
      .catch(err => console.log(err));
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
