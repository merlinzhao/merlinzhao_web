<template>
  <div class="menu-box" :class="{ 'menu-box-open': isOpen }">
    <div class="sidenav headingThree" :class="{ 'sidenav-open': isOpen }">
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
      <a class="item-box" @click="scrollTo('scroll_about')">About Me</a>
      <a class="item-box" @click="scrollTo('scroll_exp')">Experience</a>
      <a class="item-box" @click="scrollTo('scroll_contact')">Contact</a>
      <a
        href="#"
        class="item-box"
        onclick="window.open('http://www.github.com/merlinzhao')"
        >Github</a
      >
      <a
        href="#"
        class="item-box"
        onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
        >LinkedIn</a
      >
    </div>

    <i
      class="fas fa-angle-down openNavButton arrow"
      :class="{ 'arrow-box-open': isOpen }"
      @click="arrowClick()"
    ></i>
  </div>
</template>

<script>
import { themeState, applyTheme, toggleTheme } from "../theme.js";

export default {
  data() {
    return {
      isOpen: false,
      timeout: null,
    };
  },
  computed: {
    isLight() {
      return themeState.theme !== "dark";
    },
  },
  mounted() {
    applyTheme();
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: {
    toggleTheme,
    arrowClick() {
      clearTimeout(this.timeout);
      this.isOpen = !this.isOpen;
      // Auto-close the menu after 8s
      if (this.isOpen) this.timeout = setTimeout(() => (this.isOpen = false), 8000);
    },
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
  width: 100vw;
  height: 50px;
  backdrop-filter: blur(10px);
  transition: transform 0.7s ease-out, height 0.7s ease-out;
  transform: translateY(0px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: var(--bg-mobile-menu-neutral);
}
.arrow {
  font-size: 35px;
  height: 50px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  transition: transform 0.7s ease-out;
  margin: 0 0 0 0;
}
.menu-box-open {
  height: 370px;
  transform: translateY(-0px);
  background: var(--bg-mobile-menu);
}

.sidenav {
  position: relative;
  transition: height 0.7s ease-out;
  width: 100vw;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  opacity: 1;
  height: 0px;
}

.sidenav-open {
  height: 320px;
  width: 100vw;
  opacity: 1;
}

.arrow-box-open {
  transform: rotate(180deg);
}
.item-box {
  padding-left: 8px;
}
/* =============================================================================================== */
.night-mode-button {
  margin-top: 50px;
}
.label {
  font-size: 22px;
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

  transition-delay: 0s;
}

.label .fa-moon {
  color: rgb(255, 255, 255);
}
label .fa-sun {
  color: rgb(255, 255, 255);
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
@media only screen and (max-width: 1100px) {
  .headingThree {
    line-height: 24pt;
    font-size: 20pt;
  }
}
</style>