<template>
  <div class="background">
    <div class="absolute" />
    <div class="aboutCenter"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background: #222;
}
.absolute {
  height: 300px;
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, #131313, #222);
}
.aboutCenter {
  width: 95%;
  max-width: 1250px;
  height: 100%;
  padding: 5% 0% 5% 0%;
}
</style>