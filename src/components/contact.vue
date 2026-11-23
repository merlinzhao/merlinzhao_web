<template>
  <div class="contactBg">
    <div class="needMe" ref="needMe">
      <p class="headingOneHalf contactHead">{{ needMeText }}</p>
    </div>
    <p class="headingOneHalf foundHead" ref="foundMe">You Know How</p>
    <div class="contactCenter" ref="contactCenter">
      <div class="cardRow row" id="scroll_contact">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 cardPadding">
          <div
            class="highLightCard"
            id="card2"
            onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
          >
            <p class="headingThree">LinkedIn</p>
            <i class="fab fa-linkedin contactIcon" aria-hidden="true"></i>

            <p class="regText">/in/merlinzhao/</p>
            <p class="regText">&nbsp;</p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 cardPadding">
          <div class="highLightCard" id="card2">
            <div class="photoBox2" />
            <p class="headingThree">Email</p>
            <i class="far fa-address-card contactIcon"></i>
            <a
              href="mailto:merlinzhao@gmail.com"
              class="regText"
              style="width: 100%; text-align: center"
            >
              <i class="fas fa-envelope" style="margin-right: 8px"></i
              >merlinzhao@gmail.com
            </a>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>
const HEADLINE = "Get in Touch";

export default {
  data() {
    return {
      needMeText: "Look•••••••••••",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getScroll);
  },
  methods: {
    getScroll() {
      const screenHeight = window.innerHeight;
      const sectionTop = this.$refs.needMe.getBoundingClientRect().y;

      // Type out the headline one letter for every 5% of the viewport the
      // section rises above 90% of the screen height, padding with dots.
      let shown = 1;
      while (
        shown < HEADLINE.length &&
        sectionTop * 20 <= screenHeight * (19 - shown)
      ) {
        shown++;
      }
      this.needMeText = HEADLINE.slice(0, shown).padEnd(HEADLINE.length, "•");

      const opacity =
        this.$refs.foundMe.getBoundingClientRect().y <= screenHeight * 0.8 ? "1" : "0";
      this.$refs.foundMe.style.opacity = opacity;
      this.$refs.contactCenter.style.opacity = opacity;
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
  padding-bottom: 150px;
  transition: opacity 1s ease-out;
}
.contactBg {
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
  margin: 0;
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

  margin: 80px 0 120px 0;
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
  transition: all 0.5s ease-out;
}
.highLightCard:hover {
  cursor: pointer;
  background: var(--bg-projectCard-hover);
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
.cardPadding {
  padding: 0 15px 0 15px;
}
@media only screen and (max-width: 575px) {
  .contactCenter {
    padding: 0;
  }
}
@media only screen and (max-width: 767px) {
  .contactCenter {
    flex-direction: row;
  }
  .cardPadding {
    padding: 10px 15px 10px 15px;
  }

  .cardRow {
    width: 100%;

    margin: 60px 0 100px 0;
  }
  .highLightCard {
    height: 380px;
  }
  .contactCenter {
    padding: 0;
  }
}
@media only screen and (max-width: 992px) {
  .cardPadding {
    padding: 10px 5px 0px 5px;
    /* width: 33% !important; */
    /* min-width: 250px !important; */
    /* max-width: 33%; */
  }
}
</style>
