<template>
  <div>
    <landing />
    <welcome />
    <!-- <projects style="width: 100vw; height:100%;" /> -->
  </div>
</template>

<script>
import welcome from "./welcome.vue";
import projects from "./projects.vue";
import landing from "./landing.vue";

export default {
  name: "mainView",
  components: {
    welcome,
    projects,
    landing
  }
};
</script>

 <style>
</style>
 