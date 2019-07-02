<template>
    <div>
        <Navbar class="navbar" />
        <div class="basket">
          <h1 v-if="basketIsEmpty">You have nothing in your cart.</h1>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      basket: this.$store.state.cart
    }
  },
}
</script>
v-for="(item, index) in basket"
<style scoped>
.basket {
  width: 80vw;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  border: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: rgb(187, 187, 187);
}

.item-container {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
}

.product-img {
  width: auto;
  height: 20vw;
  max-height: 100px;
}

  @media screen and (min-width: 500px) {
    h1 {
      font-size: 26px;
    }
  }
</style>
