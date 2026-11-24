<template>
  <div class="playPage">
    <div class="topBar">
      <router-link to="/" class="backLink">
        <i class="fas fa-arrow-left" /> Home
      </router-link>
      <a
        href="https://github.com/merlinzhao/space-esc"
        target="_blank"
        rel="noopener"
        class="backLink"
      >
        <i class="fab fa-github" /> Source
      </a>
    </div>

    <h1 class="title">SPACE ESCAPE</h1>
    <p class="hint">
      Click the game to start. Arrow keys or WASD to move, Space to shoot.
      Reach 1000 points to escape!
    </p>

    <div class="gameBox">
      <game-player />
    </div>
  </div>
</template>

<script>
import gamePlayer from "./game-player.vue";

export default {
  name: "play",
  components: { gamePlayer },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cousine&display=swap");

.playPage {
  min-height: 100vh;
  background: #111;
  color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px 40px;
  font-family: "Lato", sans-serif;
}

.topBar {
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.backLink {
  color: #aaa;
  text-decoration: none;
  font-size: 12pt;
  transition: color 0.2s ease-out;
}
.backLink:hover {
  color: #fff;
  text-decoration: none;
}

.title {
  font-family: "Cousine", monospace;
  font-weight: 700;
  letter-spacing: 4px;
  margin: 10px 0 5px;
}

.hint {
  color: #999;
  text-align: center;
  margin-bottom: 20px;
}

/* the player fits the game inside this box */
.gameBox {
  width: 100%;
  max-width: 900px;
  height: min(780px, calc(100vh - 200px));
  min-height: 260px;
}

@media (hover: none) and (pointer: coarse), (max-width: 700px) {
  .hint {
    display: none;
  }
  .gameBox {
    height: 300px;
  }
}
</style>
