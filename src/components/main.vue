<template>
  <div>
    <sideMenu class="side-menu" style="position: fixed; z-index: 100;" :menuType="'desktop'" />
    <mobile-menu class="mobile-menu" />

    <div class="intro" ref="top" @click="closeNav()">
      <dots style="position: absolute; height: 100vh; width: 100vw;" />
      <div class="center">
        <!-- <p class="MERLIN">MERLIN</p> -->
        <p class="merlin">merlinzhao.me</p>
      </div>
      <div class="hello">
        <p>Hello 👋 Thanks for dropping by!</p>
      </div>
      <!-- <div class="explore"></div> -->
    </div>

    <div>
      <!--<highlights />-->
      <about-me />
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
import highlights from "./highlights.vue";
import sideMenu from "./side-menu.vue";
import mobileMenu from "./mobile-menu.vue";
import dots from "./dots.vue";

export default {
  name: "mainView",
  components: {
    welcome,
    aboutMe,
    myFooter,
    highlights,
    sideMenu,
    mobileMenu,
    dots,
  },

  data() {
    return {};
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

      if (localStorage.setTheme) {
        this.setTheme = localStorage.setTheme;
      }
    },
  },
};
</script>

<style scoped>
.intro {
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background: var(--bg-e4e4e4);
  transition: background 0.5s ease-out;
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
  background: linear-gradient(314deg, #ffa600, #c401ff, #0aefff, #ff7b00);
  background-size: 600% 600%;

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: rgba(255, 0, 0, 0);

  -webkit-animation: introGradientTwo 5s ease-in-out infinite;
  -moz-animation: introGradientTwo 5s ease-in-out infinite;
  animation: introGradientTwo 5s ease-in-out infinite;
}

.merlin {
  color: white;
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

.mobile-menu {
  visibility: hidden;
  position: fixed;
  z-index: 100;
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
  color: var(--hello);
  transform: translateY(-35px);
  display: flex;
  flex-direction: row;
  -webkit-animation: helloAnimation 5s ease-out;
  -moz-animation: helloAnimation 5s ease-out;
  animation: helloAnimation 5s ease-out;

  transition: color 0.5s ease-out;
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
  .side-menu {
    visibility: hidden;
  }
  .mobile-menu {
    visibility: visible;
  }
}
</style>