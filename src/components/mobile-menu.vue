<template>
  <div class="menu-box" id="menu-box">
    <div class="sidenav headingThree" id="sidenav">
      <div class="night-mode-button">
        <label
          @click="changeTheme()"
          for="night-mode"
          class="label"
          id="mobileToggle"
        >
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <div class="blob" id="mobileBlob"></div>
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
      id="arrow-box"
      @click="arrowClick()"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      menu: null,
      arrow: null,
      sidebav: null,
      timeout: null,
    };
  },
  methods: {
    arrowClick() {
      if (this.isOpen) {
        clearTimeout(this.timeout);
        this.closeMenu();
      } else {
        this.openMenu();

        this.timeout = setTimeout(() => {
          if (this.isOpen) {
            this.closeMenu();
          }
        }, 8000);
      }
    },
    scrollTo(event_id) {
      document.getElementById(event_id).scrollIntoView({ behavior: "smooth" });
    },
    openMenu() {
      this.menu.classList.add("menu-box-open");
      //outside.classList.add("outside-box-open");
      this.arrow.classList.add("arrow-box-open");
      this.sidenav.classList.add("sidenav-open");
      this.isOpen = true;
    },
    closeMenu() {
      this.menu.classList.remove("menu-box-open");
      //outside.classList.remove("outside-box-open");
      this.arrow.classList.remove("arrow-box-open");
      this.sidenav.classList.remove("sidenav-open");
      this.isOpen = false;
    },
    changeTheme() {
      var element = document.getElementById("mobileToggle");
      var elementBlob = document.getElementById("mobileBlob");

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
    nav(event) {
      if (event != "projects") return;
      this.$router.push({ path: event });
    },
  },
  mounted() {
    this.menu = document.getElementById("menu-box");
    this.arrow = document.getElementById("arrow-box");
    this.sidenav = document.getElementById("sidenav");

    if (window.matchMedia("prefers-color-scheme: dark").matches) {
      this.setTheme = "dark";
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      if (localStorage.getItem("dark-mode")) {
        this.setTheme = localStorage.getItem("dark-mode");
      } else {
        this.setTheme = "light";
      }
    }
    var element = document.getElementById("mobileToggle");
    var elementBlob = document.getElementById("mobileBlob");

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
@media only screen and (max-width: 1100px) {
  .headingThree {
    line-height: 24pt;
    font-size: 20pt;
  }
}
</style>