<template>
    <div class="product-item" v-bind:class="{'soldOut':product.soldOut}" v>
        <img alt="" src="../assets/items/tee_black.png">
        <div class="info-container">
            <div class="details">
                <h1>{{product.title}}</h1>
                <p>{{product.price}}</p>
            </div>
            <button class="add2cart" @click="$emit('addToCart', product.id)">{{ product.soldOut ? "SOLD OUT" : "ADD TO CART" }}</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: ["product"],
}
</script>

<style lang="sass" scoped>
.product-item 
    padding: 3vh

.product-item >  *
    display: block
    height: auto
    width: 60vw
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

.details 
    width: 43%

.info-container 
    display: flex

</style>
