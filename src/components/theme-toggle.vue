<template>
  <!-- Light/dark switch shared by the desktop and mobile menus -->
  <div class="theme-toggle">
    <label @click="toggleTheme" class="label" :class="{ day: isLight }">
      <i class="fas fa-moon"></i>
      <i class="fas fa-sun"></i>
      <div class="blob" :class="{ 'day-blob': isLight }"></div>
    </label>
  </div>
</template>

<script>
import { themeState, applyTheme, toggleTheme } from "../theme.js";

export default {
  name: "themeToggle",
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
  },
};
</script>

<style scoped>
.theme-toggle {
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
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;
}
.label i {
  color: white;
}
.blob {
  position: absolute;
  left: 50%;
  width: 51%;
  height: 101%;
  background: white;
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
