<template>
  <div id="Home">
    <Navbar class="navbar" />
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
          img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Hoodie_Green.png?alt=media&token=88434e76-11b4-4f12-ae73-a4d1682ddcb8',
          title: "Skull Hoodie",
          type: 'tees',
          price: 19.99,
          soldOut: false
        },
        {
          id: 2,
          img: '',
          title: "Dark Denim",
          type: 'pants',
          price: 49.99,
          soldOut: false
        },
        {
          id: 3,
          img: '',
          title: "Butterfly Hoodie",
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

<style <style lang="scss" scoped>

</style>
