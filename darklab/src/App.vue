<template>
  <div id="app">
    <img id="background" src="./assets/sky.gif" alt="">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
</style>
