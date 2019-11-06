<template>
  <div>
    <div id="app">
      <img id="background" src="../assets/sky.gif" alt="">
      <div id="logoContainer">
        <nuxt-link to="/home">
        <transition>
          <img id="logo" :class="{ 'active' : ($store.state.page === 'index') }" src="../assets/logo-rough.png" alt="">
        </transition>
        </nuxt-link>
      </div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

  export default {
    components: {
      Navbar
    },
    head() {
      return {
        title: "DARK-LAB 2037+"
      }
    }
  };

</script>

<style lang="sass">
*
  box-sizing: border-box
  padding: 0
  border: 0
  outline: 0
  font-family: 'Scheherazade', serif
  color: black

body
  margin: 0
  background-color: #fefef4

h1
  font-size: 5vw

@media screen and (min-width: 700px)
  h1
    font-size: 32px

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  margin: 0 !important

#background
  display: block
  position: fixed
  height: auto
  width: 100%
  z-index: -5
  filter: grayscale(1)
  filter: invert(1)

.page_content
  margin-left: auto
  margin-right: auto
  max-width: 500px

  /* NAVBAR */

.navbar
  display: none

#logoContainer
  padding-top: 5vh
  width: 50vw
  position: absolute
  left: 25%

#logo
    margin: 0 auto
    margin-top: 37vh
    height: 30px

.active
  transform: translateY(37vh)

.page-enter-active 
  transition: opacity 0.25s ease-out

.page-leave-active 
  transition: opacity 0.25s ease-in

.page-enter .page-leave-active 
  opacity: 0


@media screen and (max-width: 375px)
    #logo
        width: 53vw
        height: auto
</style>
