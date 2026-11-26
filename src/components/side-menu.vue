<template>
  <div class="menu-box headingThree sidenav">
    <div class="glass-box" />
    <span class="openNavButton" @click="openNav()">
      <i class="fas fa-bars"></i>
    </span>
    <theme-toggle class="toggle-box" />
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
import themeToggle from "./theme-toggle.vue";

export default {
  components: { themeToggle },
  methods: {
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
  z-index: 100;
}
/* Below 1100px the mobile menu takes over */
@media only screen and (max-width: 1100px) {
  .menu-box {
    visibility: hidden;
  }
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

.toggle-box,
.about-box,
.exp-box,
.contact-box,
.git-box,
.link-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  opacity: 0;
}
.toggle-box {
  margin-left: 32px;
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
.menu-box:hover .toggle-box,
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

</style>