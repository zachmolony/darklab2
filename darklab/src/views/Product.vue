<template>
    <div class="Product">
        <Navbar class="navbar" />
        <div v-bind:key="product.id" v-for="product in products">
            <div v-if="product_Id == product.id">
                <p>Product found</p>
                <img v-bind:src="product.img">
                <div class="info-container">
                    <h1>{{product.title}}</h1>
                    <p>{{product.price}}</p>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    name:'Product',
    components: {
        Navbar
    },
    props: ['products'],
    data() {
        return {
            product_Id: this.$route.params.Pid,
            title: "product"
        }
    }
}
</script>

<style scoped>

</style>
