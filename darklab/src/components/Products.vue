<template>
    <div>
        <div class="Products" v-bind:key="product.id" v-for="product in products">
            <ProductItem v-bind:product="product" />
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
    name: "Products",
    components: {
        ProductItem
    },
    props: ["products"]
}
</script>

<style scoped>
.Products {
    margin-top: 3vh;
}
</style>
