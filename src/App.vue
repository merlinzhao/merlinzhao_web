<template>
  <div id="app">
    <router-view />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
