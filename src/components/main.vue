<template>
  <div>
    <div class="intro">
      <div class="center">
        <p class="MERLIN">MERLIN</p>
      </div>
      <p
        style="font-size: 27pt; color: #bbb; transform: translateY(-35px)"
      >Hello 👋 Thanks for visiting my personal website!</p>
    </div>

    <about-me />
    <welcome />

    <!-- <projects style="width: 100vw; height:100%;" /> -->
  </div>
</template>

<script>
import welcome from "./welcome.vue";
import projects from "./projects.vue";
import aboutMe from "./about-me.vue";
import { setTimeout } from "timers";

export default {
  name: "mainView",
  components: {
    welcome,
    projects,
    aboutMe
  },
  mounted() {
    const intro = document.querySelector(".intro");
  }
};
</script>

<style scoped>
.intro {
  height: 100vh;
  min-height: 500px;
  width: 100%;
  background: #131313;

  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;

  /* -webkit-animation: introFade 4.5s ease-out;
  -moz-animation: introFade 4.5s ease-out;
  animation: introFade 4.5s ease-out; */

  z-index: 1;
}

@-webkit-keyframes introFade {
  0% {
    visibility: visible;
    background: #131313;
  }
  15% {
    background: #131313;
  }
  50% {
    background: #131313;
  }
  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
    background: #f4f4f4;
  }
}
@-moz-keyframes introFade {
  0% {
    visibility: visible;
    background: #131313;
  }
  15% {
    background: #131313;
  }
  50% {
    background: #131313;
  }
  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
    background: #f4f4f4;
  }
}
@keyframes introFade {
  0% {
    visibility: visible;
    background: #131313;
  }
  15% {
    background: #131313;
  }
  50% {
    background: #131313;
  }
  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
    background: #f4f4f4;
  }
}

/* =============================================================================================== */
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
/* =============================================================================================== */
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

  transform: translateY(-50px);

  -webkit-animation: introGradientTwo 3s ease-in-out infinite;
  -moz-animation: introGradientTwo 3s ease-in-out infinite;
  animation: shiftTitle 3s ease-in-out;
}

@-webkit-keyframes shiftTitle {
  0% {
    /* font-size: 3em; */
  }
  100% {
  }
}
@-moz-keyframes shiftTitle {
  0% {
    /* font-size: 3em; */
  }
  100% {
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
    transform: translateY(-50px);
  }
}
</style>