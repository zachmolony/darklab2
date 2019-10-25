<template>
    <div>
        <Navbar class="navbar" />
        <div class="basket">
          <div class="item-container" v-else :key="index" v-for="(item, index) in basket" v-if="item.quantity > 0">
            <div class="item">
              <img class="product-img" v-bind:src="item.img">
              <div class="details">
                <h1>{{item.title}}</h1>
                <p>{{item.price}}</p>
                <form>
                  <div class="value-button" id="decrease" @click="decreaseQuantity(item)">-</div>
                  <input type="number" id="number" v-bind:value="item.quantity" />
                  <div class="value-button" id="increase" @click="increaseQuantity(item)">+</div>
              </form>
              </div>
              <div class="edit">
                <span @click="$store.commit('removeFromCart', item)"><img src="https://image.flaticon.com/icons/svg/61/61848.svg" alt=""></span>
              
              </div>
            </div>
          </div>
          <h1 class="total" @click="getBasketTotal">Total: {{ getBasketTotal() }} </h1>
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
  methods: {
    increaseQuantity(item) {
      this.$store.commit('increaseQuantity', item);
    },
    decreaseQuantity(item) {
      this.$store.commit('decreaseQuantity', item);
    },
    getBasketTotal() {
      let total = this.$store.state.cart.reduce((a,b) => a  + (b.price * b.quantity), 0)
      return Math.round(total * 100) / 100;
    }
  },
  data() {
    return {
      basket: this.$store.state.cart,
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 0.9em;
}

p {
  font-size: 0.9em;
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
  background-color: #ffffff85;
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
  width: 100%;
  padding-left: 15px;
}

.details p {
  margin: 0;
}

.total {
  text-align: right;
}

span img {
  margin-top: -15px;
  height: 16px;
}

.edit {
  justify-content: flex-end;
}

.edit > * {
  float: right;
}

form {
  width: 100px;
  transform: translateX(-25px);
  text-align: center;
  padding-top: 20px;
}

.value-button {
  display: inline-block;
  margin: 0px;
  width: 20px;
  text-align: center;
  vertical-align: middle;
}

.value-button:hover {
  cursor: pointer;
}

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

input#number {
  text-align: center;
  margin: 0px;
  width: 20px;
  height: 20px;
  background-color: transparent;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

  @media screen and (min-width: 500px) {
    h1 {
      font-size: 22px;
    }
    .product-img {
      width: auto;
      height: 100px;
    }
    .details {
      margin-top: -20px;
      margin-left: 10px;
    }
  }
</style>
