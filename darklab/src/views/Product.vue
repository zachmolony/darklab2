<template>
    <div class="Product">
        <Navbar class="navbar" />
        <div class="product-item" v-bind:key="product.id" v-for="product in products2">
            <div v-if="product_Id == product.id">
                <img v-bind:src="product.img">
                <div class="info-container">
                    <h1>{{product.title}}</h1>
                    <p>{{product.price}}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, omnis corporis.</p>
                </div>
                <button @click="emitAddToCart">ADD TO CART</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { EventBus } from '../event-bus.js';

export default {
    name: 'Product',
    components: {
        Navbar
    },
    props: ['products', 'basket'],
    data() {
        return {
            product_Id: this.$route.params.Pid,
            title: "product",
            products2: [
                {
                    id: 1,
                    img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Hoodie_Green.png?alt=media&token=88434e76-11b4-4f12-ae73-a4d1682ddcb8',
                    title: "Skull Hoodie",
                    price: '£xx.xx',
                    soldOut: false
                },
                {
                    id: 2,
                    img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Jeans_1.png?alt=media&token=a7620aa5-c312-433f-bf91-1ea04cbe79da',
                    title: "Dark Denim",
                    price: '£xx.xx',
                    soldOut: false
                },
                {
                    id: 3,
                    img: '',
                    title: "Butterfly Hoodie",
                    price: '£xx.xx',
                    soldOut: true
                }
            ]
        }
    },
    methods: {
        emitAddToCart() {
            // Send the event on a channel (addToCart) with a payload (product_Id)
            EventBus.$emit('addToCart', this.product_Id);
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
    background-color: rgba(255, 0, 0)
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
