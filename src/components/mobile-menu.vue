<template>
  <!--<div class="outside-box" id="outside-box">-->
  <div class="menu-box" id="menu-box">
    <div class="sidenav headingThree" id="sidenav">
      <div class="night-mode-button">
        <label @click="changeTheme()" for="night-mode" class="label" id="mobileToggle">
          <i class="fas fa-moon"></i>
          <i class="fas fa-sun"></i>
          <div class="blob" id="mobileBlob"></div>
        </label>
      </div>

      <a href="#" class="exp-box" @click="nav('projects')">Experience</a>
      <a href="#" class="git-box" onclick="window.open('http://www.github.com/merlinzhao')">Github</a>
      <a
        href="#"
        class="link-box"
        onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
      >LinkedIn</a>
    </div>
    <i class="fas fa-angle-down openNavButton arrow" id="arrow-box" @click="arrowClick()"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    arrowClick() {
      //var outside = document.getElementById("outside-box");
      var menu = document.getElementById("menu-box");
      var arrow = document.getElementById("arrow-box");
      var sidenav = document.getElementById("sidenav");

      if (this.isOpen) {
        menu.classList.remove("menu-box-open");
        //outside.classList.remove("outside-box-open");
        arrow.classList.remove("arrow-box-open");
        sidenav.classList.remove("sidenav-open");
        this.isOpen = false;
      } else {
        menu.classList.add("menu-box-open");
        //outside.classList.add("outside-box-open");
        arrow.classList.add("arrow-box-open");
        sidenav.classList.add("sidenav-open");
        this.isOpen = true;
      }
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
.outside-box {
  height: 100vh;
  width: 100vw;
  transition: all 0.7s ease-out;
}
.menu-box {
  width: 100vw;
  height: 50px;
  position: fixed;
  backdrop-filter: blur(10px);
  transition: all 0.7s ease-in-out;
}
.arrow {
  position: fixed;
  font-size: 35px;
  height: 50px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  transition: all 0.7s ease-in-out;

  margin: 0 0 0 0;
}

.menu-box-open {
  height: 300px;
  background: rgba(0, 0, 0, 0.7);
}

.outside-box-open {
}

.sidenav {
  transition: all 0.7s ease-in-out;
  width: 100vw;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(-250px);
}

.sidenav-open {
  height: 250px;
  width: 100vw;

  opacity: 1;
  transform: translateY(0px);
}

.arrow-box-open {
  transform: translateY(250px) rotate(180deg);
}

/* =============================================================================================== */
.night-mode-button {
  margin-top: 50px;
}
.label {
  font-size: 22px;
  margin-left: 22px;
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
</style>