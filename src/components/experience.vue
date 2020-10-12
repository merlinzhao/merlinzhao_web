<template>
  <div class="experienceBg">
    <div class="deviceOut">
      <p class="headingTwo experienceHead">Experience - IN DEV</p>
      <div class="deskTopDevice" />
    </div>

    <div class="experienceCenter">
      <expCard />
      <expCard :photoLeft="true" />
      <expCard />
      <expCard :photoLeft="true" />
      <expCard />
      <expCard :photoLeft="true" />
      <expCard />
    </div>
  </div>
</template>

<script>
import expCard from "./experience-card.vue";

export default {
  components: {
    expCard,
  },
  data() {
    return {
      topPosition: null,
      scrollPosition: 0,
      screenHeight: 0,
      desktopDevice: null,
      expBg: null,
      desktopOffset: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
    this.desktopDevice = document.querySelector(".deskTopDevice");
    this.expBg = document.querySelector(".experienceBg");
  },
  methods: {
    getScroll(event) {
      this.scrollPosition = window.top.scrollY;
      this.screenHeight = window.innerHeight;
      this.desktopPositon = this.screenHeight * 0.85 + 550 + 1300 + 1050;
      this.desktopOffset = this.scrollPosition - this.desktopPositon;

      let scale = this.desktopOffset * 0.008;

      if (this.desktopOffset > 0 && scale > 1 && scale < 10) {
        // this.desktopDevice.style.width =
        //   String(800 + this.desktopOffset * 2) + "px";
        // this.desktopDevice.style.height =
        //   String(400 + this.desktopOffset * 1.5) + "px";
        this.desktopDevice.style.transform = "scale(" + scale + ")";
        // this.desktopDevice.style.top =
        //   "calc(30vh - " + this.desktopOffset + "px)";
        // this.desktopDevice.style.transform =
        //   "translateY(" + String(this.desktopOffset * 0.3) + "px)";
      } else {
        this.desktopDevice.style.transform = "scale(1)";
      }
      console.log(scale);
      if (scale >= 5) {
        this.desktopDevice.style.opacity = 0;
        if (scale >= 9) {
          this.desktopDevice.style.visibility = "hidden";
        }
        this.expBg.style.transition = "background 0s";
        this.expBg.style.background = "#0d182e";
      } else {
        this.desktopDevice.style.visibility = "initial";
        this.desktopDevice.style.opacity = 1;
        this.expBg.style.transition = "background 0.3s ease-out";
        this.expBg.style.background = "var(--bg-e4e4e4)";
      }
    },
  },
};
</script>
<style scoped>
.experienceBg {
  height: 7900px;
  width: 100%;
  background: var(--bg-eee);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
  transition: background 0.5s ease-out;

  position: absolute;
}
.experienceCenter {
  width: 95%;
  max-width: 940px;
  height: 100%;
  position: absolute;

  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.experienceHead {
  position: absolute;
  top: 200px;
  color: var(--black);
}

.deviceOut {
  width: 100%;
  height: 90%;
  position: absolute;

  display: flex;
  overflow: hidden;
  justify-content: center;
}
.deskTopDevice {
  position: sticky !important;
  height: 500px;
  width: 700px;

  transition: width 0.2s, height 0.2s, opacity 0.5s ease-out;
  background-image: url("../assets/images/iPad-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  top: 35vh;
}

.exp1 {
  width: 100%;
  height: 600px;
  background: #555;
  margin: 100px 0 100px 0;
}
</style>