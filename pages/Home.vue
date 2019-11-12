<template>
  <div id="Home">
    <Navbar/>
    <Products  v-bind:products="products"/>
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
      products: this.$store.state.products
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

<style <style lang="sass" scoped>
.page-enter-active
  transition-delay: 850ms
</style>