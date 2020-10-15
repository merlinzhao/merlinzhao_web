<template>
  <div class="contactBg">
    <div class="needMe" id="needMe">
      <p class="headingOneHalf contactHead">{{ needMeText }}</p>
    </div>
    <p class="headingOneHalf foundHead" id="foundMe">Found Me</p>
    <div class="contactCenter" id="contactCenter">
      <div class="cardRow row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <div
            class="highLightCard"
            id="card2"
            onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
          >
            <p class="headingThree">LinkedIn</p>
            <i class="fab fa-linkedin contactIcon" aria-hidden="true"></i>

            <p class="regText">/in/merlinzhao/</p>
            <p class="regText">&nbsp</p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <div class="highLightCard" id="card2">
            <div class="photoBox2" />
            <p class="headingThree">Phone & Email</p>
            <i class="far fa-address-card contactIcon"></i>
            <a
              href="mailto:zhaom21@mcmaster.ca"
              class="regText"
              style="width: 100%; text-align: center"
            >
              <i class="fas fa-envelope" style="margin-right: 8px"></i
              >zhaom21@mcmaster.ca
            </a>

            <a
              href="tel:647-993-6121"
              class="regText"
              style="width: 100%; text-align: center"
            >
              <i class="fas fa-phone" style="margin-right: 8px"></i>(647) 993
              6121
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <div
            class="highLightCard"
            id="card2"
            onclick="window.open('https://www.instagram.com/merlin.zhao/')"
          >
            <div class="photoBox3" />

            <p class="headingThree">Instagram</p>

            <i class="fab fa-instagram contactIcon" aria-hidden="true"></i>

            <p class="regText">@merlin.zhao</p>
            <p class="regText">&nbsp</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sectionTop: null,
      foundMe: null,
      contactCenter: null,
      needMeText: "Look•••••••••••",
      needMeTextArr: [
        "Look•••••••••••",
        "Looki••••••••••",
        "Lookin•••••••••",
        "Looking••••••••",
        "Looking •••••••",
        "Looking f••••••",
        "Looking fo•••••",
        "Looking for••••",
        "Looking for••••",
        "Looking for M••",
        "Looking for Me•",
        "Looking for Me?",
      ],
      needMecount: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
    this.sectionTop = document.getElementById("needMe");
    this.foundMe = document.getElementById("foundMe");
    this.contactCenter = document.getElementById("contactCenter");
  },
  methods: {
    getScroll() {
      let screenHeight = window.innerHeight;
      let p = this.sectionTop.getBoundingClientRect().y;
      let f = this.foundMe.getBoundingClientRect().y;
      console.log(this.foundMe.getBoundingClientRect().y, screenHeight);
      if (p > screenHeight * 0.9) {
        this.needMeText = this.needMeTextArr[0];
      } else if (p > screenHeight * 0.85) {
        this.needMeText = this.needMeTextArr[1];
      } else if (p > screenHeight * 0.8) {
        this.needMeText = this.needMeTextArr[2];
      } else if (p > screenHeight * 0.75) {
        this.needMeText = this.needMeTextArr[3];
      } else if (p > screenHeight * 0.7) {
        this.needMeText = this.needMeTextArr[4];
      } else if (p > screenHeight * 0.65) {
        this.needMeText = this.needMeTextArr[5];
      } else if (p > screenHeight * 0.6) {
        this.needMeText = this.needMeTextArr[6];
      } else if (p > screenHeight * 0.55) {
        this.needMeText = this.needMeTextArr[7];
      } else if (p > screenHeight * 0.5) {
        this.needMeText = this.needMeTextArr[8];
      } else if (p > screenHeight * 0.45) {
        this.needMeText = this.needMeTextArr[9];
      } else if (p > screenHeight * 0.4) {
        this.needMeText = this.needMeTextArr[10];
      } else {
        this.needMeText = this.needMeTextArr[11];
      }

      if (f <= screenHeight * 0.8) {
        this.foundMe.style.opacity = "1";
        this.contactCenter.style.opacity = "1";
      } else {
        this.foundMe.style.opacity = "0";
        this.contactCenter.style.opacity = "0";
      }
    },
  },
};
</script>
<style scoped>
.contactCenter {
  width: 95%;

  max-width: 1240px;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-out;
}
.contactBg {
  height: 1800px;
  width: 100%;
  background: var(--bg-eee);
  transition: 0.3s all ease-out;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}

.needMe {
  margin-top: 150px;
  height: 700px;
  width: 100%;
}
.contactHead {
  position: sticky;
  top: 100px;
  text-align: center;
  color: var(--black);
  width: 100%;
  /* background: -webkit-linear-gradient(
    45deg,
    var(--sub-three) 0%,
    var(--sub-four) 60%,
    var(--sub-three) 120%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}
.foundHead {
  color: var(--black);
  opacity: 0;
  transition: all 1s ease-out;
}

.cardRow {
  width: 100%;
  height: 600px;
  margin: 80px 0 40px 0;
}

.highLightCard {
  z-index: 999;
  height: 450px;
  background: var(--bg-projectCard);
  box-shadow: 8px 12px 12px #0000002d;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.highLightCard:hover {
  cursor: pointer;
}
.headingOneHalf {
  font-variant-numeric: tabular-nums;
}
.headingThree {
  color: var(--sub-two);
}
.regText {
  color: var(--black);
  margin-bottom: 10px;
}
.contactIcon {
  font-size: 90pt;
  color: var(--black);
  margin: 20px 0 50px 0;
}
</style>
