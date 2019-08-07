<template>
  <div id="app">
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
