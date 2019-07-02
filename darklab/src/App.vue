<template>
  <div id="app" >
    <img id="background" src="./assets/sky.gif" alt="">
    <router-view class="page_content" />
  </div>
</template>

<script>
  import Navbar from './components/Navbar'

  export default {

  }
</script>


<style>
  * {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    outline: 0;
    font-family: 'Scheherazade', serif;
    color: black;
  }

  body {
    margin: 0;
  }

  h1 {
    font-size: 5vw;
  }

  @media screen and (min-width: 700px) {
    h1 {
      font-size: 36px;
    }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0 !important;
  }

  #background {
    display: block;
    position: fixed;
    height: auto;
    width: 100%;
    z-index: -5;
    filter: grayscale(1);
    filter: invert(1);
  }

  .page_content {
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;
  }
</style>