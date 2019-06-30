<template>
  <div id="app">
    <img id="background" src="./assets/sky.gif" alt="">
    <Navbar class="navbar" />
      <router-view />
  </div>
</template>

<script>
  import Navbar from './components/Navbar'

  export default {
    components: {
      Navbar
    },
    created() {
      //sessionStorage.setItem('firstLoad', true);
    }
  }
</script>


<style>
  * {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    outline: 0;
    font-family: 'Scheherazade', serif;
    color: white;
  }

  body {
    margin: 0;
  }

  h1 {
    font-size: 5vw;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0 !important;
  }

  #background {
    display: block;
    position: fixed;
    height: 100%;
    width: auto;
    z-index: -5;
  }

  .navbar {
    padding-top: 8vh;
  }

.showNavbar {
  display: flex
}
</style>