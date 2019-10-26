<template>
    <div class="navbar">
        <router-link to="/">
            <img id="menu" src="../assets/skull.gif" alt="">
        </router-link>
        <router-link to="/home">
            <img id="logo" src="../assets/logo-rough.png" alt="">
        </router-link>
        <router-link to="/cart">
            <img id="cart" src="../assets/carticon.png" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ['basket']
}
</script>

<style scoped lang="sass">
.navbar
    padding-top: 5vh
    margin-left: auto -1vw
    margin-right: auto
    width: 90vw
    max-width: 450px
    display: flex
    justify-content: space-between

img
    height: 30px
    width: auto

#cart
    padding: 2px
    margin-left: 3px

#menu
    height: 40px
    margin-right: -2vw
    margin-left: 3vw
    margin-top: -5px

@media screen and (max-width: 375px)
    #logo
        width: 53vw
        height: auto
    
    #cart 
        width: 9vw
        height: auto
    
    #menu
        width: 18vw
        height: auto
</style>
