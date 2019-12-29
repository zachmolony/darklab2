<template>
  <div>
    <div id="app">
      <img id="background" src="../assets/b3.gif" alt="">
        <div id="logoContainer" >
          <nuxt-link to="/home">
              <img id="logo" :class="{ 'active' : ($store.state.page !== 'index') }" src="../assets/3d-logo.png" alt="">
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
        title: "☬ CAIRO LOST-HILLS | Outer Limits ☬"
      }
    }
  };

</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Gupter&display=swap')

.page-leave-active
  transition: all .30s ease-out

.page-enter-active 
  transition: all .30s ease-out

.page-enter
  opacity: 0
  transform-origin: 50% 50%

.page-leave-active
  opacity: 0
  transform-origin: 50% 50%

*
  box-sizing: border-box
  padding: 0
  border: 0
  outline: 0
  font-family: 'Gupter', serif
  color: white
  text-decoration: none


body
  margin: 0
  background-color: black

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
  min-height: 100%
  min-width: 100%
  z-index: -5
  margin-left: auto
  margin-right: auto

@media (max-width: 700px)
  #background
    margin-left: -80% !important

.page_content
  margin-left: auto
  margin-right: auto
  max-width: 500px

  /* NAVBAR */

.navbar
  display: none

#logoContainer
  pointer-events: none  
  padding-top: 5vh
  width: 50vw
  position: absolute
  left: 25%

#logo
  z-index: 2
  pointer-events: all
  margin: 0 auto
  margin-top: 33vh
  height: 60px

.active
  transform: translate3d(0, -34vh, 0)
  transition-timing-function: cubic-bezier(0.57, 0.09, 0.38, 1)
  transition-delay: 1000ms
  transition-duration: 900ms

@media screen and (max-width: 375px)
    #logo
        width: 53vw
        height: auto
</style>
