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
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Product',
    components: {
        Navbar
    },
    props: ['products'],
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
    created() {
        console.log(typeof this.$route.params.Pid);
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
    margin-top: 10%
    margin-left: 15%
    color: white
    float: right
    max-height: 3em
    width: 35%
    background-color: rgba(255, 0, 0, 0.76)

.info-container 
    display: flex
    flex-direction: column
</style>
