<template>
  <div>
    <sideMenu class="side-menu" style="position: fixed; z-index: 100" />
    <mobile-menu class="mobile-menu" />

    <div class="intro" ref="top">
      <div class="center">
        <p class="MERLIN">MERLIN</p>
      </div>
      <div class="hello" ref="scramble" style="height: 50px"></div>
    </div>

    <about-me />
    <experience id="scroll_exp" />
    <contact />
    <myFooter @scrollTo="scrollTo" />
  </div>
</template>

<script>
import aboutMe from "./about-me.vue";
import myFooter from "./footer.vue";
import sideMenu from "./side-menu.vue";
import mobileMenu from "./mobile-menu.vue";
import experience from "./experience.vue";
import contact from "./contact.vue";

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________ancdefghijklmnopqrstuvwxyz";

// Subtitle phrases cycled under the title
const PHRASES = [
  "Software Engineer",
  "New York, NY",
  "hello world!",
  "Bubble | Zoom | IBM | AMD",
];

// Animates an element's text from its current value to a new one through
// random "scrambled" characters.
class TextScramble {
  constructor(el) {
    this.el = el;
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from: oldText[i] || "", to: newText[i] || "", start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (const item of this.queue) {
      if (this.frame >= item.end) {
        complete++;
        output += item.to;
      } else if (this.frame >= item.start) {
        if (!item.char || Math.random() < 0.28) item.char = randomChar();
        output += `<span class="dud">${item.char}</span>`;
      } else {
        output += item.from;
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
  stop() {
    cancelAnimationFrame(this.frameRequest);
  }
}

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

export default {
  name: "mainView",
  components: {
    aboutMe,
    myFooter,
    sideMenu,
    mobileMenu,
    experience,
    contact,
  },

  mounted() {
    const fx = new TextScramble(this.$refs.scramble);
    let counter = 0;
    let timer = null;
    const next = () => {
      fx.setText(PHRASES[counter]).then(() => {
        timer = setTimeout(next, 1200);
      });
      counter = (counter + 1) % PHRASES.length;
    };
    next();

    // Stop cycling once the page is torn down (e.g. navigating to /projects)
    this.$once("hook:beforeDestroy", () => {
      clearTimeout(timer);
      fx.stop();
    });
  },
  methods: {
    scrollTo() {
      window.scrollTo(0, this.$refs.top.offsetTop);
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
@keyframes introGradientTwo {
  0% {
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

  animation: introGradientTwo 5s ease-in-out infinite;
}

.center {
  position: relative;
  width: 100%;
  height: 1em;
  font-size: 12em;

  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-menu {
  visibility: hidden;
  position: fixed;
  z-index: 100;
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

  transition: color 0.5s ease-out;
  text-align: left;
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