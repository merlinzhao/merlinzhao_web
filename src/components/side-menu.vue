<template>
  <div>
    <div class="menu-box headingThree sidenav">
      <span class="openNavButton" @click="openNav()">
        <i class="fas fa-bars"></i>
      </span>
      <i @click="changeTheme();" class="fas fa-adjust themeIcon"></i>
      <a href="#" class="exp-box" @click="nav('projects')">Experience</a>
      <a href="#" class="git-box" onclick="window.open('http://www.github.com/merlinzhao')">Github</a>
      <a
        href="#"
        class="link-box"
        onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
      >LinkedIn</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setTheme: true
    };
  },
  props: {
    menuType: {
      type: String,
      default: "desktop"
    }
  },

  mounted() {
    if (localStorage.setTheme) {
      this.setTheme = localStorage.setTheme;
    }
  },
  methods: {
    nav(event) {
      if (event != "projects") return;
      this.$router.push({ path: event });
    },
    changeTheme() {
      this.setTheme = !this.setTheme;
      localStorage.setTheme = this.setTheme;
      console.log(this.setTheme);
    }
  }
};
</script>

<style scoped>
.menu-box {
  height: 350px;
  width: 270px;
}

.themeIcon {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0s;
  opacity: 0;
  color: white;
  margin-left: 30px;
}
.exp-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0.1s;
  opacity: 0;
}
.git-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0.2s;
  opacity: 0;
}
.link-box {
  transform: translateX(-120px);
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: 0.3s;
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

.menu-box:hover .exp-box {
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
  color: white;
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