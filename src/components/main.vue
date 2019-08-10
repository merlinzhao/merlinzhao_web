<template>
  <div>
    <welcome class="welcome" />
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
.welcome {
  height: 100%;
  width: 100%;
  display: block;
  align-content: center;
}
</style>
 