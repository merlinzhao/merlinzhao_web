<template>
  <div class="footerBackground">
    <div style="height: 10px; width: 100%" />
    <div
      class="row"
      style="width: 100%; align-items: center; justify-content: center; max-width: 1250px;"
    >
      <button class="footerButton">
        <i class="fas fa-file-alt" style="opacity:0;" />
      </button>
      <button v-if="page === 'home'" class="footerButton" @click="nav('projects')">
        <i class="fas fa-code" />
      </button>
      <button v-if="page === 'project'" class="footerButton" @click="$router.go(-1)">
        <i class="fas fa-home" />
      </button>
      <button class="footerButton">
        <i class="fas fa-arrow-alt-circle-up" @click="toTop" />
      </button>

      <button class="footerButton" onclick="window.open('http://www.github.com/merlinzhao')">
        <i class="fab fa-github" />
      </button>
      <button class="footerButton" onclick="window.open('https://www.linkedin.com/in/merlinzhao/')">
        <i class="fab fa-linkedin" />
      </button>
    </div>
    <p class="footerText">© merlin zhao</p>
  </div>
</template>
<script>
export default {
  name: "myFooter",
  props: {
    page: {
      type: String,
      default: "home"
    }
  },
  methods: {
    toTop() {
      this.$emit("scrollTo");
    },
    nav(event) {
      if (event != "projects") return;
      this.$router.push({ path: event });
    }
  }
};
</script>
<style scoped>
.footerBackground {
  height: 100px;
  width: 100%;
  background: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footerButton {
  margin: 0% 2% 0% 2%;
  background: transparent;
  border: none;
  font-size: 20pt;
  color: #999;
  transition: all 0.5s ease-out;
}

.footerButton:hover {
  color: white;
}
.footerButton:active {
  border: none;
}
.footerText {
  margin: 0px;
  color: #999;
  font-size: 12pt;
}
@media only screen and (max-width: 768px) {
  .footerButton {
    padding: 0px 10px 0px 10px;
  }
}
</style>