<template>
  <div>
    <div class="intro">
      <div class="center">
        <p class="MERLIN">MERLIN</p>
      </div>
      <div class="hello">
        <p>Hello 👋 Thanks for visiting my personal website!</p>
      </div>
    </div>

    <about-me />
    <welcome />
    <myFooter />

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
  mounted() {}
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
</style>