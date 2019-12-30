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

/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */
/* V NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */
/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */

.sidenav {
  height: 100%;
  width: 0;
  max-width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  z-index: 10;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: white;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 20pt;
  margin-left: 50px;
}

.openNavButton {
  font-size: 20pt;
  cursor: pointer;
  position: fixed;
  color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  margin-left: 10px;
  top: 5px;
  left: 5px;
}
.openNavButton:hover {
  color: white;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
@supports (backdrop-filter: none) {
  .navBG {
    background: rgba(0, 0, 0, 0.85);
    -webkit-backdrop-filter: blur(10px) !important;
    backdrop-filter: blur(10px);
  }
}
@supports not (backdrop-filter: none) {
  .navBG {
    background: rgba(17, 17, 17, 0.85);
  }
}
</style>
