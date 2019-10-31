<template>
  <div>
    <span class="openNavButton" @click="openNav()">
      <i class="fas fa-bars"></i>
    </span>
    <div id="mySidenav" class="sidenav headingThree navBG">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">
        <i class="fas fa-times-circle"></i>
      </a>
      <a @click="nav('projects')">Experience</a>
      <a href="#" onclick="window.open('http://www.github.com/merlinzhao')">Github</a>
      <a href="#" onclick="window.open('https://www.linkedin.com/in/merlinzhao/')">LinkedIn</a>
      <!-- <a href="#">Resume</a> -->
    </div>
    <div class="intro" ref="top" @click="closeNav()">
      <div class="center">
        <p class="MERLIN">MERLIN</p>
      </div>
      <div class="hello">
        <p>Hello 👋 Thanks for dropping by!</p>
      </div>
      <!-- <div class="explore"></div> -->
    </div>
    <div @click="closeNav()">
      <about-me @click="closeNav()" />
      <welcome />
      <myFooter @scrollTo="scrollTo" />
    </div>

    <!-- <projects style="width: 100vw; height:100%;" /> -->
  </div>
</template>

<script>
import welcome from "./welcome.vue";
import aboutMe from "./about-me.vue";
import myFooter from "./footer.vue";

export default {
  name: "mainView",
  components: {
    welcome,

    aboutMe,
    myFooter
  },
  mounted() {},
  methods: {
    openNav() {
      const width = this.$el.querySelector(".intro");
      if (width.offsetWidth > 350) {
        document.getElementById("mySidenav").style.width = "350px";
      } else {
        document.getElementById("mySidenav").style.width = "80%";
      }
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    nav(event) {
      if (event != "projects") return;
      this.$router.push({ path: event });
    },

    scrollTo() {
      var element = this.$refs["top"];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
};
</script>

<style scoped>
.intro {
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background: #111;

  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;

  z-index: 1;
}

/* =============================================================================================== */
/* =============================================================================================== */
/* =============================================================================================== */
@-webkit-keyframes introGradientTwo {
  0% {
    /* font-size: 3em; */
    background-position: 7% 0%;
  }
  50% {
    background-position: 94% 100%;
  }
  100% {
    background-position: 7% 0%;
  }
}
@-moz-keyframes introGradientTwo {
  0% {
    /* font-size: 3em; */
    background-position: 7% 0%;
  }

  50% {
    background-position: 94% 100%;
  }
  100% {
    background-position: 7% 0%;
  }
}
@keyframes introGradientTwo {
  0% {
    /* font-size: 5em; */
    background-position: 7% 0%;
  }
  50% {
    background-position: 94% 100%;
  }
  100% {
    background-position: 7% 0%;
  }
}

/* =============================================================================================== */
/* ========================= MERLIN MERLIN MERLIN MERLIN MERLIN MERLIN =========================== */
/* =============================================================================================== */

.MERLIN {
  font-weight: 700;
  text-align: center;
  margin: 0px;

  position: absolute;
  background: linear-gradient(314deg, #ffa600, #c401ff, #0aefff);
  background-size: 600% 600%;

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: rgba(255, 0, 0, 0);

  -webkit-animation: introGradientTwo 5s ease-in-out infinite;
  -moz-animation: introGradientTwo 5s ease-in-out infinite;
  animation: introGradientTwo 5s ease-in-out infinite;
}

.center {
  width: 100%;
  height: 1em;
  font-size: 12em;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(-40px);

  -webkit-animation: introGradientTwo 3s ease-in-out;
  -moz-animation: introGradientTwo 3s ease-in-out;
  animation: shiftTitle 3s ease-in-out;
}

.explore {
  height: 80px;
  width: 120px;
  position: absolute;
  bottom: 2%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.6;
}

@-webkit-keyframes shiftTitle {
  0% {
    /* font-size: 5em; */
    transform: translateY(0px);
  }
  50% {
    /* font-size: 5em; */
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-40px);
  }
}
@-moz-keyframes shiftTitle {
  0% {
    /* font-size: 5em; */
    transform: translateY(0px);
  }
  50% {
    /* font-size: 5em; */
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-40px);
  }
}
@keyframes shiftTitle {
  0% {
    /* font-size: 5em; */
    transform: translateY(0px);
  }
  50% {
    /* font-size: 5em; */
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-40px);
  }
}

/* =============================================================================================== */
/* ========================= HELLO HELLO HELLO HELLO HELLO HELLO HELLO =========================== */
/* =============================================================================================== */
.hello {
  font-size: 27pt;
  color: #fff;
  transform: translateY(-35px);
  display: flex;
  flex-direction: row;
  -webkit-animation: helloAnimation 5s ease-out;
  -moz-animation: helloAnimation 5s ease-out;
  animation: helloAnimation 5s ease-out;
}

@-webkit-keyframes helloAnimation {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes helloAnimation {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes helloAnimation {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* ======================================================================== */
/* ================ 555px 555px 555px 555px 555px 555px =================== */
/* ======================================================================== */

@media only screen and (max-width: 555px) {
  .center {
    font-size: 4em !important;
  }
  .hello {
    font-size: 14pt !important;
    text-align: center;
  }
  .headingThree {
    font-size: 16pt;
  }
}
@media only screen and (max-width: 833px) {
  .center {
    font-size: 8em;
  }

  .hello {
    font-size: 19pt;
    text-align: center;
  }
}

/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */
/* V NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */
/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */

@supports (backdrop-filter: none) {
  .navBG {
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}
@supports not (backdrop-filter: none) {
  .navBG {
    background: rgba(17, 17, 17, 0.85);
  }
}

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
</style>