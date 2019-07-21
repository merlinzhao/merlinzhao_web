<template>
<body>
  <welcome class="welcome" />
</body>
</template>

<script>
import welcome from "./welcome.vue";
export default {
  name: "mainView",
  components: {
    welcome
  }
};
</script>

 <style>
.welcome {
  height: 100vh;
  width: 100vw;
  align-content: center;
}
</style>
 