<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <mainView style="height: 100%; width: 100%" />
  </div>
</template>

<script>
import mainView from "./components/main.vue";

export default {
  name: "app",
  components: {
    mainView
  }
};
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
