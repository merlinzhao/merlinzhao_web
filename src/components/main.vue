<template>
  <div>
    <div class="intro">
      <div class="innerIntro">
        <p class="MERLIN">MERLIN.</p>
      </div>
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
    setTimeout();
  }
};
</script>

<style scoped>
.intro {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f4f4f4;

  -webkit-animation: bgfadein 1.5s ease-in; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: bgfadein 1.5s ease-in; /* Firefox < 16 */
  -ms-animation: bgfadein 1.5s ease-in; /* Internet Explorer */
  -o-animation: bgfadein 1.5s ease-in; /* Opera < 12.1 */
  animation: bgfadein 1.5s ease-in;
  z-index: 1;
}

@keyframes bgfadein {
  from {
    background: #131313;
  }
  to {
    background: #f4f4f4;
  }
}

/* Firefox < 16 */
@-moz-keyframes bgfadein {
  from {
    background: #131313;
  }
  to {
    background: #f4f4f4;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes bgfadein {
  from {
    background: #131313;
  }
  to {
    background: #f4f4f4;
  }
}

/* Internet Explorer */
@-ms-keyframes bgfadein {
  from {
    background: #131313;
  }
  to {
    background: #f4f4f4;
  }
}

/* Opera < 12.1 */
@-o-keyframes bgfadein {
  from {
    background: #131313;
  }
  to {
    background: #f4f4f4;
  }
}

/* ==========================INNER INTRO INNER INTRO INNER INTRO INNRE INTRO ====================== */
/* ==========================INNER INTRO INNER INTRO INNER INTRO INNER INTRO ======================= */
/* =============================================================================================== */

.innerIntro {
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(314deg, #ffa600, #c401ff, #0aefff);
  background-size: 600% 600%;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: left;
  text-align: center;

  background-clip: text;
  -webkit-background-clip: text;

  -webkit-animation: introGradientTwo 4s linear infinite;
  -moz-animation: introGradientTwo 4s linear infinite;
  animation: introGradientTwo 4s linear infinite;
}

/* =============================================================================================== */
/* =============================================================================================== */
/* =============================================================================================== */

@-webkit-keyframes GradientAnimation {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}
@-moz-keyframes GradientAnimation {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}
@keyframes GradientAnimation {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}
/* =============================================================================================== */
@-webkit-keyframes introGradientTwo {
  0% {
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
  font-size: 1200%;
  font-weight: 700;
  text-align: center;

  -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 3s; /* Firefox < 16 */
  -ms-animation: fadein 3s; /* Internet Explorer */
  -o-animation: fadein 3s; /* Opera < 12.1 */
  animation: fadein 3s;

  color: #f4f4f400;
}

@keyframes fadein {
  from {
    color: #131313;
  }
  to {
    color: #f4f4f400;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    color: #131313;
  }
  to {
    color: #f4f4f400;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    color: #131313;
  }
  to {
    color: #f4f4f400;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    color: #131313;
  }
  to {
    color: #f4f4f400;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    color: #131313;
  }
  to {
    color: #f4f4f400;
  }
}
</style>