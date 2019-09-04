<template>
  <div>
    <div class="intro">
      <p class="MERLIN">MERLIN.</p>
      <p>hello</p>
    </div>

    <landing />
    <welcome />

    <!-- <projects style="width: 100vw; height:100%;" /> -->
  </div>
</template>

<script>
import welcome from "./welcome.vue";
import projects from "./projects.vue";
import landing from "./landing.vue";
import { setTimeout } from "timers";

export default {
  name: "mainView",
  components: {
    welcome,
    projects,
    landing
  },
  mounted() {
    const intro = document.querySelector(".intro");
  }
};
</script>

<style scoped>
.intro {
  font-size: 1200%;
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f4f4f4;

  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;

  -webkit-animation: introFade 4.5s ease-out;
  -moz-animation: introFade 4.5s ease-out;
  animation: introFade 4.5s ease-out;

  visibility: hidden;

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
  35% {
    font-size: 1em;
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
  35% {
    font-size: 1em;
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
  35% {
    font-size: 1em;
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

  position: absolute;
  background: linear-gradient(314deg, #ffa600, #c401ff, #0aefff);
  background-size: 600% 600%;
  display: block;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: rgba(255, 0, 0, 0);

  -webkit-animation: introGradientTwo 3s ease-out;
  -moz-animation: introGradientTwo 3s ease-out;
  animation: introGradientTwo 3s ease-out;
}
</style>