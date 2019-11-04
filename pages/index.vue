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
    name: 'Enter'
}
</script>

<style scoped lang="sass">
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
  padding-bottom: 2vh

#logo
  height: 30px
  width: auto

.enterButton
  margin-top: 4vh
  background-color: transparent
  color: red
</style>