<template>
    <div class="navbar">
        <router-link to="/home">
            <img id="menu" src="../assets/skull.gif" alt="">
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
    padding-top: 5vh
    margin-left: 2vw
    width: 90vw
    display: flex
    justify-content: space-between

img
    height: 30px
    width: auto

#cart
    padding:2px
    margin-left: 3px

#menu
    height: 40px
    margin-right: -1vw
    margin-left: 1vw
    margin-top: -5px
</style>
