<template>
    <div>
      <div id="header">
        <div class="skull">
          <img src="../assets/skull.gif" alt="">
        </div>
        <nuxt-link to="/home">
          <button class="enterButton">enter store.</button>
        </nuxt-link>
      </div>
    </div>
</template>

<script>
export default {
    name: 'index'
}
</script>

<style scoped lang="sass">
.page-leave-active
  transition: all 600ms ease-out 100ms

.page-enter-active 
  transition: all 600ms ease-out

.page-enter
  opacity: 0
  transform-origin: 50% 50%

.page-leave-active
  opacity: 0
  transform-origin: 50% 50%

#header
  position: absolute
  padding-top: 28vh
  left: 0
  right: 0
  margin-left: auto
  margin-right: auto
  max-width: 300px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  overflow: hidden

.skull *
  max-width: 130px
  padding-bottom: 5vh

#logo
  height: 30px
  width: auto

.enterButton
  margin-top: 4vh
  background-color: transparent
  color: red
</style>