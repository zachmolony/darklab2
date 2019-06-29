<template>
    <div class="product-item" v-bind:class="{'soldOut':product.soldOut}" v>
        <h1>{{product.title}}</h1>
        <img v-bind:src="product.url" alt="">
        <div class="details">
            <p>{{product.price}}</p>
            <button class="add2cart" @click="$emit('addToCart', product.id)">{{ product.soldOut ? "sold out" : "add to cart" }}</button>
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

.soldOut * {
    text-decoration: line-through;
}

.soldOut > button {
    display: none;
}
 
</style>
