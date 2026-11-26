<template>
  <div class="menu-box headingThree sidenav">
    <div class="glass-box" />
    <span class="openNavButton" @click="openNav()">
      <i class="fas fa-bars"></i>
    </span>
    <div class="night-mode-button">
      <label
        @click="toggleTheme"
        class="label"
        :class="{ day: isLight }"
      >
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="blob" :class="{ 'day-blob': isLight }"></div>
      </label>
    </div>
    <a class="about-box" @click="scrollTo('scroll_about')">About Me</a>
    <a class="exp-box" @click="scrollTo('scroll_exp')">Experience</a>
    <a class="contact-box" @click="scrollTo('scroll_contact')">Contact</a>
    <a
      href="#"
      class="git-box"
      onclick="window.open('http://www.github.com/merlinzhao')"
      >Github</a
    >
    <a
      href="#"
      class="link-box"
      onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
      >LinkedIn</a
    >
  </div>
</template>

<script>
import { themeState, applyTheme, toggleTheme } from "../theme.js";

export default {
  computed: {
    isLight() {
      return themeState.theme !== "dark";
    },
  },
  mounted() {
    applyTheme();
  },
  methods: {
    toggleTheme,
    // Sections live on the home page; from other pages, go there first
    // and let the router scroll to the section.
    scrollTo(id) {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
      else this.$router.push({ path: "/", hash: `#${id}` });
    },
  },
};
</script>

<style scoped>
.menu-box {
  height: 380px;
  width: 250px;
}

.menu-box:hover .glass-box {
  opacity: 1;
}
.glass-box {
  backdrop-filter: blur(10px);
  opacity: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
  transition: opacity 0.5s ease-out;
}

.about-box,
.exp-box,
.contact-box,
.git-box,
.link-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  opacity: 0;
}
/* Stagger the links sliding in */
.exp-box {
  transition-delay: 0.1s;
}
.contact-box {
  transition-delay: 0.2s;
}
.git-box {
  transition-delay: 0.3s;
}
.link-box {
  transition-delay: 0.4s;
}
.about-box:hover,
.exp-box:hover,
.contact-box:hover {
  cursor: pointer;
}
.menu-box:hover .about-box,
.menu-box:hover .exp-box,
.menu-box:hover .contact-box,
.menu-box:hover .git-box,
.menu-box:hover .link-box {
  transform: translateX(0px);
  opacity: 1;
}
.openNavButton {
  font-size: 20pt;
  cursor: pointer;
  position: fixed;
  color: var(--open-nav);
  z-index: 10;
  margin-left: 10px;
  top: 10px;
  left: 5px;
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}
.menu-box:hover .openNavButton {
  transform: translateY(-50px);
  opacity: 0;
}

/* =============================================================================================== */
.night-mode-button {
  margin-top: 50px;
}
.label {
  font-size: 22px;
  margin-left: 32px;
  background-color: rgb(19, 26, 48);
  display: flex;
  height: 35px;
  border-radius: 50px;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 15px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  transform: translateX(-120px);
  transition: all 0.4s ease-in-out;
  transition-delay: 0s;
  opacity: 0;
}

.label .fa-moon {
  color: rgb(255, 255, 255);
}
label .fa-sun {
  color: rgb(255, 255, 255);
}

.menu-box:hover .label {
  transform: translateX(0px);
  opacity: 1;
}
.blob {
  position: absolute;
  left: 50%;
  width: 51%;
  height: 101%;
  background: rgb(255, 255, 255);
  border-radius: 50px;
  transition: 0.5s ease all;
}

.day-blob {
  left: 0;
}
.day {
  background-color: rgb(241, 177, 0);
}
</style>