<template>
    <div class="navbar">
        <router-link to="/">
            <img id="menu" src="../assets/menuicon.png" alt="">
        </router-link>
        <router-link to="/">
            <img id="logo" src="../assets/logo-rough.png" alt="">
        </router-link>
        <router-link to="/cart">
            <img id="cart" src="../assets/carticon.png" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped lang="sass">
.navbar
    margin-left: 5vw
    width: 90vw
    display: flex
    justify-content: space-between

img
    filter: invert(1)
    height: 30px
    width: auto

#menu, #cart
    padding:2px
</style>
