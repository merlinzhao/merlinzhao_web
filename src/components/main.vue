<template>
  <div>
    <span class="openNavButton" @click="openNav()">
      <i class="fas fa-bars"></i>
    </span>
    <div id="mySidenav" class="sidenav headingThree">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">
        <i class="fas fa-times-circle"></i>
      </a>
      <a href="#">Experience</a>
      <a href="#">About</a>
      <a href="#">Github</a>
      <a href="#">LinkedIn</a>
      <a href="#">Resume</a>
    </div>
    <div class="intro" @click="closeNav()">
      <div class="center">
        <p class="MERLIN">MERLIN</p>
      </div>
      <div class="hello">
        <p>Hello 👋 Thanks for visiting my personal website!</p>
      </div>
    </div>
    <div @click="closeNav()">
      <about-me @click="closeNav()" />
      <welcome />
      <myFooter />
    </div>

    <!-- <projects style="width: 100vw; height:100%;" /> -->
  </div>
</template>

<script>
import welcome from "./welcome.vue";
import projects from "./projects.vue";
import aboutMe from "./about-me.vue";
import myFooter from "./footer.vue";
import { setTimeout } from "timers";

export default {
  name: "mainView",
  components: {
    welcome,
    projects,
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
      console.log("hello", width.offsetWidth);
    },

    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
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
/* ================ MENU MENU MENU MENU MENU MENU MENU =================== */
/* ======================================================================== */

.mainMenuBar {
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainMenuCenter {
  height: 100%;
  width: 100%;
  max-width: 1150px;
}
.menuCol {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14pt;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease-out;
  font-weight: 400;
}
.menuCol:hover {
  color: white;
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

/* 123456789876543234567876543234567898765432345678987654321234567898765432123456789876543234567876543 */
.sidenav {
  height: 100%;
  width: 0;
  max-width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(34, 34, 34, 0.7);
  backdrop-filter: blur(10px);
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
  font-size: 25pt;
  cursor: pointer;
  position: fixed;
  color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  margin-left: 10px;
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