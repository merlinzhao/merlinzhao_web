<template>
  <div>
    <welcome />
    <projects style="width: 100vw; height:100%;" />
  </div>
</template>

<script>
import welcome from "./welcome.vue";
import projects from "./projects.vue";
export default {
  name: "mainView",
  components: {
    welcome,
    projects
  }
};
</script>

 <style>
</style>
 