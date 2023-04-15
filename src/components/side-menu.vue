<template>
  <div class="menu-box headingThree sidenav">
    <div class="glass-box" />
    <span class="openNavButton" @click="openNav()">
      <i class="fas fa-bars"></i>
    </span>
    <div class="night-mode-button">
      <label
        @click="changeTheme()"
        for="night-mode"
        class="label"
        id="toggleLabel"
      >
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="blob" id="blob"></div>
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
export default {
  data() {
    return {
      setTheme: "undefined",
    };
  },
  props: {
    menuType: {
      type: String,
      default: "desktop",
    },
  },

  mounted() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.setTheme = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      if (localStorage.getItem("dark-mode")) {
        this.setTheme = localStorage.getItem("dark-mode");
      } else {
        this.setTheme = "light";
      }
    }
    var element = document.getElementById("toggleLabel");
    var elementBlob = document.getElementById("blob");

    if (this.setTheme == "dark") {
      element.classList.remove("day");
      elementBlob.classList.remove("day-blob");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      element.classList.add("day");
      elementBlob.classList.add("day-blob");
      document.documentElement.setAttribute("data-theme", "light");
    }

    localStorage.setItem("dark-mode", this.setTheme);
  },
  methods: {
    scrollTo(event_id) {
      document.getElementById(event_id).scrollIntoView({ behavior: "smooth" });
    },

    changeTheme() {
      var element = document.getElementById("toggleLabel");
      var elementBlob = document.getElementById("blob");

      if (this.setTheme == "dark") {
        this.setTheme = "light";
      } else {
        this.setTheme = "dark";
      }
      localStorage.setItem("dark-mode", this.setTheme);

      if (this.setTheme == "dark") {
        element.classList.remove("day");
        elementBlob.classList.remove("day-blob");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        element.classList.add("day");
        elementBlob.classList.add("day-blob");
        document.documentElement.setAttribute("data-theme", "light");
      }
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

.themeIcon {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0s;
  opacity: 0;
  color: white;
  margin-left: 32px;
}

.about-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0.0s;
  opacity: 0;
}

.about-box:hover {
  cursor: pointer;
}
.exp-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0.1s;
  opacity: 0;
}

.exp-box:hover {
  cursor: pointer;
}

.contact-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0.2s;
  opacity: 0;
}

.contact-box:hover {
  cursor: pointer;
}
.git-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0.3s;
  opacity: 0;
}
.link-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0.4s;
  opacity: 0;
}

.menu-box:hover .themeIcon {
  transform: translateX(0px);
  opacity: 1;
}

.menu-box:hover .git-box {
  transform: translateX(0px);
  opacity: 1;
}
.menu-box:hover .about-box {
  transform: translateX(0px);
  opacity: 1;
}
.menu-box:hover .exp-box {
  transform: translateX(0px);
  opacity: 1;
}
.menu-box:hover .contact-box {
  transform: translateX(0px);
  opacity: 1;
}
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

.info {
  display: block;
  margin-top: 50px;
}
.info.night {
  color: white;
}
.day-blob {
  left: 0;
}
.day {
  background-color: rgb(241, 177, 0);
}
</style>