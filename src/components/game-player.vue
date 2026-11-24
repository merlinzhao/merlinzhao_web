<template>
  <!-- Fills whatever box it is put in and fits the 900x780 game inside it -->
  <div class="gamePlayer">
    <div class="gameFrame">
      <iframe
        v-if="started"
        ref="game"
        :src="gameUrl"
        @load="onGameLoad"
        title="Space Escape"
        allow="autoplay; fullscreen; gamepad"
        allowfullscreen
      ></iframe>
      <button v-else class="poster" :style="posterStyle" @click="started = true">
        <span class="playButton"><i class="fas fa-play" /> Play</span>
      </button>
    </div>

    <div class="mobileNote" :style="posterStyle">
      <div class="mobileShade">
        <i class="fas fa-desktop mobileIcon" />
        <p class="mobileTitle">Desktop only</p>
        <p class="mobileText">
          Space Escape is played with a keyboard. Open this page on a desktop
          or laptop to play.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gamePlayer",
  data() {
    return {
      // the game is ~6 MB, so it only loads once the visitor presses Play
      started: false,
      gameUrl: process.env.BASE_URL + "space-esc/index.html",
      posterStyle: {
        backgroundImage:
          "url(" + require("../assets/images/SpacePic.png") + ")",
      },
    };
  },
  methods: {
    // The game is served from this same site, so we can reach into its page:
    // stop arrow keys / Space from also scrolling the page around the card,
    // and give the game keyboard focus straight away.
    onGameLoad() {
      const frame = this.$refs.game;
      if (!frame) return;
      try {
        const keys = [" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
        frame.contentWindow.addEventListener("keydown", (e) => {
          if (keys.includes(e.key)) e.preventDefault();
        });
      } catch (err) {
        // different origin (shouldn't happen): game still works
      }
      frame.focus();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cousine&display=swap");

.gamePlayer {
  width: 100%;
  height: 100%;
  container-type: size;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* largest 900:780 box that fits the space it is given */
.gameFrame {
  width: min(100cqw, 100cqh * 900 / 780);
  aspect-ratio: 900 / 780;
  background: #000;
}
.gameFrame iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.poster {
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  cursor: pointer;
  background-color: #222;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.playButton {
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 18pt;
  padding: 12px 28px;
  border: 2px solid #fff;
  border-radius: 6px;
  letter-spacing: 2px;
  transition: background 0.2s ease-out, transform 0.2s ease-out;
}
.poster:hover .playButton {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

.mobileNote {
  display: none;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
.mobileShade {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}
.mobileIcon {
  font-size: 28pt;
  margin-bottom: 10px;
}
.mobileTitle {
  font-family: "Cousine", monospace;
  font-size: 18pt;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 0 0 6px;
}
.mobileText {
  color: #ddd;
  font-size: 12pt;
  line-height: 18pt;
  max-width: 320px;
  margin: 0;
}

@media (hover: none) and (pointer: coarse), (max-width: 700px) {
  .gameFrame {
    display: none;
  }
  .mobileNote {
    display: block;
  }
}
</style>
