<template>
  <div id="Home">
    <Products  v-bind:products="products" v-on:addToCart="addToCart"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Products from '../components/Products.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Products
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Black Tee",
          type: 'tees',
          price: 19.99,
          soldOut: false
        },
        {
          id: 2,
          title: "Ripped Jeans",
          type: 'pants',
          price: 49.99,
          soldOut: false
        },
        {
          id: 3,
          title: "Dark Hat",
          type: 'accessories',
          price: 29.99,
          soldOut: true
        }
      ]
    }
  },
  methods: {
    addToCart(id){
      console.log(id)
    }
  },
  /*
  created() {
    axios.get('')
      .then(res => this.products = res.data)
      .catch(err => console.log(err));
  }
  */
}
</script>

<style>


</style>
