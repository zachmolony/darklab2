<template>
    <nuxt-link :to="'/product/' + product.id">
        <div class="product-item" v-bind:class="{'soldOut':product.soldOut}">
            <img v-bind:src="product.img">
            <div class="info-container">
                <h1>{{product.title}}</h1>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    name: "ProductItem",
    props: ["product"],
    methods: {
        goToProductPage(productId) {
            this.$router.push({name:'product',params:{Pid:productId}})
        }
    }
}
</script>

<style lang="sass" scoped>
.product-item 
    padding: 10px

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

</style>
