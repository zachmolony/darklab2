<template>
    <div class="navbar">
        <nuxt-link exact to="/">
            <img id="menu" src="../assets/skull.gif" alt="">
        </nuxt-link>
        <nuxt-link to="/cart">
            <img id="cart" src="../assets/carticon.png" alt="">
        </nuxt-link>
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
    margin-left: auto
    margin-right: auto
    width: 90vw
    max-width: 420px
    display: flex
    justify-content: space-between

img
    height: 30px
    width: auto

#logo 
    margin-right: 10px

#cart
    padding: 2px
    margin-left: 3px

#menu
    height: 40px
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
