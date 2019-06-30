<template>
    <div>
        <div id="header">
            <div class="skull">
                <img src="../assets/skull.gif" alt="">
            </div>
            <img id="logo" src="../assets/logo-rough.png" alt="">
            <router-link to="/home">
                <button class="enterButton">enter store.</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Enter'
}
</script>

<style scoped>
  .skull * {
    width: 35vw;
  }

  .skull {
    position: absolute;
    margin-top: 5.5vh;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  #header {
    position: absolute;
    padding-top: 40vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
#logo {
    filter: invert(1);
    height: 30px;
    width: auto;
}

.enterButton {
    margin-top: 4vh;
    background-color: transparent;
    color: red;
}
</style>