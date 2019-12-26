<template>
    <nuxt-link :to="'/product/' + product.id">
        <div class="product-item" v-bind:class="{'soldOut':product.soldOut}">
            <carousel :perPage=1>
                    <slide :key="image.img" v-for="image in product.imgs">
                        <img v-bind:src="image.src">
                        <img class="pImg" src="../assets/items/hood.png" alt="">
                    </slide>
                </carousel>
            <div class="info-container">
                <h1>{{product.title}}</h1>
                <p>{{product.price}}</p>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
    name: "ProductItem",
    props: ["product"],
    components: {
        Carousel,
        Slide        
    },
    methods: {
        goToProductPage(productId) {
            this.$router.push({name:'product',params:{Pid:productId}})
        }
    }
}
</script>

<style lang="sass" scoped>
.product-item 
    padding: 3vh

.product-item >  *
    display: block
    height: auto
    width: auto
    max-height: 230px
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

.pImg
    width: 100%
</style>
