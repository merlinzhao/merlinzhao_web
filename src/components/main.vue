<template>
  <welcome class="welcome" />
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
  height: 100%;
  width: 100%;
  display: block;
  align-content: center;
}
</style>
 