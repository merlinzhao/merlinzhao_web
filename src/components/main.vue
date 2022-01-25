<template>
  <div>
    <sideMenu
      class="side-menu"
      style="position: fixed; z-index: 100"
      :menuType="'desktop'"
    />
    <mobile-menu class="mobile-menu" />

    <div class="intro" ref="top">
      <div class="center">
        <p class="MERLIN">MERLIN</p>
        <!-- <p class="merlin">merlinzhao.me</p> -->
      </div>
      <div class="hello intro_text" style="height: 50px">
        <!-- <p id="intro_text">{{ intro_list[0] }}</p> -->
      </div>
    </div>

    <!-- <highlights class="highlights" /> -->
    <!--<highlights />-->
    <about-me />
    <experience id="scroll_exp" />
    <!-- <welcome /> -->
    <contact />
    <myFooter @scrollTo="scrollTo" />

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

import experience from "./experience.vue";
import contact from "./contact.vue";

export default {
  name: "mainView",
  components: {
    welcome,
    aboutMe,
    myFooter,
    highlights,
    sideMenu,
    mobileMenu,

    experience,
    contact,
  },

  data() {
    return {};
  },

  mounted() {
    // window.setInterval(() => {
    //   this.changeIntro();
    // }, 2200);

    // ——————————————————————————————————————————————————
    // TextScramble
    // ——————————————————————————————————————————————————

    class TextScramble {
      constructor(el) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.update = this.update.bind(this);
      }
      setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
          const from = oldText[i] || "";
          const to = newText[i] || "";
          const start = Math.floor(Math.random() * 40);
          const end = start + Math.floor(Math.random() * 40);
          this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
      }
      update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
          let { from, to, start, end, char } = this.queue[i];
          if (this.frame >= end) {
            complete++;
            output += to;
          } else if (this.frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = this.randomChar();
              this.queue[i].char = char;
            }
            output += `<span class="dud">${char}</span>`;
          } else {
            output += from;
          }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
          this.resolve();
        } else {
          this.frameRequest = requestAnimationFrame(this.update);
          this.frame++;
        }
      }
      randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
      }
    }

    // ——————————————————————————————————————————————————
    // Example
    // ——————————————————————————————————————————————————

    const phrases = [
      "est. 1998",
      "switch to dark mode!",
      "New York, NY",
      "Toronto, ON",
      "hello world!",
      "Welcome",
      "안녕하세요",
    ];

    const el = document.querySelector(".intro_text");
    const fx = new TextScramble(el);

    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 1200);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  },
  methods: {
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
  height: 85vh;
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
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
@-moz-keyframes introGradientTwo {
  0% {
    /* font-size: 3em; */
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
@keyframes introGradientTwo {
  0% {
    /* font-size: 5em; */
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

/* =============================================================================================== */
/* ========================= MERLIN MERLIN MERLIN MERLIN MERLIN MERLIN =========================== */
/* =============================================================================================== */

.MERLIN {
  font-weight: 700;
  text-align: center;
  margin: 0px;
  font-family: "Roboto";

  background: linear-gradient(314deg, #c94242, #fe875d);
  background-size: 1200% 600%;

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
  font-family: "Varela Round", sans-serif;
  font-size: 150px;
}

.center {
  position: relative;
  width: 100%;
  height: 1em;
  font-size: 12em;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 
  -webkit-animation: introGradientTwo 3s ease-in-out;
  -moz-animation: introGradientTwo 3s ease-in-out;
  animation: shiftTitle 3s ease-in-out; */
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

.love {
  position: absolute;
  top: 10px;
  color: var(--hello);
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
  width: 680px;
  font-size: 40pt;
  font-weight: 400;
  color: var(--hello);
  transform: translateY(-30px);
  display: flex;
  flex-direction: row;
  /* -webkit-animation: helloAnimation 5s ease-out;
  -moz-animation: helloAnimation 5s ease-out;
  animation: helloAnimation 5s ease-out; */

  transition: color 0.5s ease-out;
  text-align: left;
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

@media only screen and (max-width: 576px) {
  .center {
    font-size: 4em !important;
  }
  .hello {
    font-size: 18pt !important;
    text-align: center;
    width: 225px !important;
    transform: translateY(-10px) !important;
  }
  .headingThree {
    font-size: 16pt;
  }
  .highlights {
    visibility: hidden;
    display: none;
  }
}
@media only screen and (max-width: 767px) {
  .center {
    font-size: 8em;
  }

  .hello {
    font-size: 26pt;
    text-align: center;
    width: 450px;
    transform: translateY(-25px);
  }
}

@media only screen and (max-width: 1100px) {
  .mobile-menu {
    visibility: visible;
  }
  .side-menu {
    visibility: hidden;
  }
}
</style>