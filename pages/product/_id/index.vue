<template>
    <div class="Product">
        <Navbar class="navbar" />
        <div class="product-item" v-bind:key="product.id" v-for="product in products">
            <div v-if="$route.params.id == product.id">
                <img v-bind:src="product.img">
                <div class="info-container">
                    <h1>{{product.title}}</h1>
                    <p>{{product.price}}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, omnis corporis.</p>
                </div>
                <button @click="$store.commit('addToCart', $route.params.id)">ADD TO CART</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../../../components/Navbar.vue'

export default {
    name: 'Product',
    props: ['product'],
    components: {
        Navbar
    },
    head() {
      return {
        title: "/{{}} DARK-LAB 2037+",
        meta: {
          tags: "dark lab darklab darklab2037 2037 dark-lab"
        }
      }
    },
    data() {
        return {
            title: "product",
            products: this.$store.state.products
        }
    }
}
</script>

<style scoped lang="sass">
.product-item 
    padding: 3vh

img
    display: block
    height: auto
    width: auto
    max-height: 40vh
    margin-left: auto
    margin-right: auto

.soldOut *
    text-decoration: line-through

button 
    color: white
    width: 35vh
    height: 3em
    background-color: #ff0000
    display: inline-block
    padding: 0.35em 1.2em
    margin: 1em 0.3em 0.3em 0
    border-radius: 0.12em
    font-weight: 300
    transition: color 0.8s

    &:active
        color:#000000
        background-color:#FFFFFF

.info-container 
    display: flex
    flex-direction: column
    margin-left: auto
    margin-right: auto
    max-width: 40vh
    
    * 
        margin-bottom: 10px

</style>
