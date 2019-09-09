<template>
  <div id="app" class="app">
    <router-view />
    <link
      rel="stylesheet"
      href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
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
  height: 100%;
  width: 100%;
}
.headingOne {
  line-height: 65pt;
  font-size: 65pt;
  font-weight: bolder;
}
.headingTwo {
  line-height: 50pt;
  font-size: 45pt;
  font-weight: 400;
}
.headingThree {
  line-height: 25pt;
  font-size: 25pt;
  font-weight: 600;
}
</style>
