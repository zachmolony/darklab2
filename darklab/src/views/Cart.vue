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
  props: ['basket'],
  data() {
    return {
      
    }
  },
  created() {
    if (basket.length == 0) {
      let basketIsEmpty = true;
    }
  }
}
</script>

<style scoped>
.basket {
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
}

  @media screen and (min-width: 500px) {
    h1 {
      font-size: 26px;
    }
  }
</style>
