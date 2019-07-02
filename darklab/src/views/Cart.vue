<template>
    <div>
        <Navbar class="navbar" />
        <div class="basket">
          <h1 v-if="basket.length == 0">You have nothing in your cart.</h1>
          <div class="item-container" v-else :key="index" v-for="(item, index) in basket">
            <div class="item">
              <img class="product-img" v-bind:src="item.img">
              <div class="details">
                <h1>{{item.title}}</h1>
                <p>{{item.price}}</p>
              </div>
              <p>x {{item.quantity}}</p>
              <span @click="$store.commit('removeFromCart', item)">X</span>
            </div>
          </div>
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
h1 {
  font-size: 1em;
}

.basket {
  width: 80vw;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;
  border: 1px;
  border-style: solid;
  border-radius: 5px;
  border-color: rgb(187, 187, 187);
  padding: 15px;
}

.item-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.item {
  display: flex;
  justify-content: space-between;
}

.product-img {
  width: auto;
  height: 20vw;
}

.details {
  text-align: left;
  margin-top: -15px;
  margin-left: -30px;
}

  @media screen and (min-width: 500px) {
    h1 {
      font-size: 26px;
    }
    .product-img {
      width: auto;
      height: 100px;
    }
    .details {
      margin-top: -20px;
      margin-left: -80px;
    }
  }
</style>
