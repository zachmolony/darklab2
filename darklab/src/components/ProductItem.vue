<template>
    <div class="product-item" v-bind:class="{'soldOut':product.soldOut}" v>
        <img alt="" src="../assets/items/tee_black.png">
        <h1>{{product.title}}</h1>
        <div class="details">
            <p>{{product.price}}</p>
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

<style scoped>
.product-item {
    padding: 3vh;
}

.product-item >  * {
    display: block;
    height: auto;
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
}

.soldOut * {
    text-decoration: line-through;
}

.soldOut > button {
    display: none;
}

button {
    color: black;
    padding: 5px;
}

.details {
    width: 43%;
}

</style>
