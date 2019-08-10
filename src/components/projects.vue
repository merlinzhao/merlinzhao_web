<template>
  <div class="background">
    <projectCard />
  </div>
</template>

<script>
import projectCard from "./projectCard.vue";
export default {
  name: "projects",
  components: {
    projectCard
  }
};
</script>

<style scoped>
.background {
  background: #fcfcfc;
}
</style>
 