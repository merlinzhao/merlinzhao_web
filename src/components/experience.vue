<template>
  <div class="experienceBg">
    <div class="deviceOut">
      <p class="headingOneHalf experienceHead">Experiences & Projects</p>
      <p class="headingThree experienceSub">
        Explore my works throughout the years.
      </p>
      <div class="deskTopDevice" />
    </div>

    <div class="experienceCenter">
      <expCard
        :imgURL="'amd-white.png'"
        :backgroundColor="'rgb(201, 66, 66)'"
        :projectTitle="'Advance Micro Devices'"
        :subHeading="'PCIE Design and Validation Intern'"
        :thisId="'AMDid'"
        :className="'textCardL'"
        :icons="['K', 'L', 'N', 'B', 'H', 'G']"
      />
      <expCard
        :photoLeft="true"
        :projectTitle="'Menlolab Inc.'"
        :bodyText="'I created key interactive data interfaces for a web application, as well as streamlining communication between the frontend and docker components. I also heavily focused on error detection and bug fixes of existing services. '"
        :subHeading="'Front End Developer Intern'"
        :icons="['F', 'D', 'A', 'H', 'G', 'L', 'E', 'J', 'K']"
        :imgURL="'MenloPic.png'"
        :externalLink="['https://menlolab.com', 'View on web']"
        :backgroundColor="'orange'"
        :thisId="'Menloid'"
        :className="'textCardR'"
      />
      <expCard
        :projectTitle="'DeltaHacks'"
        :subHeading="'Design Executive and Organizer'"
        :backgroundColor="'#999 '"
      />
      <expCard
        :photoLeft="true"
        :imgURL="'NavTextPic.png'"
        :projectTitle="'NavText'"
        :subHeading="'Second Place Overall at Hack Western 5 '"
        :bodyText="'NavText is a SMS based navigation application that sends directions, store and landmark information through text messages.'"
        :icons="['E', 'D', 'A']"
        :backgroundColor="'#9ab8c3'"
        :gitLink="'https://github.com/merlinzhao/NavText'"
        :externalLink="[
          'https://devpost.com/software/navtext-15tgmj',
          'View on Devpost',
        ]"
        :thisId="'Navid'"
        :linkName="'Devpost'"
      />
      <expCard
        :imgURL="'MerlinWebPic.png'"
        :projectTitle="'merlinzhao.me'"
        :bodyText="'My portfolio website coded from scratch (with love ❤️) and personally designed using Vue.js.'"
        :icons="['F', 'A', 'D', 'H', 'G']"
        :externalLink="['http://www.merlinzhao.me', 'View on web']"
        :backgroundColor="'#222'"
        :thisId="'Webid'"
      />
      <expCard
        :photoLeft="true"
        :projectTitle="'Welcome Week'"
        :bodyText="'A mobile application that helps students quickly find campus events based on their preferences.'"
        :icons="['E', 'C', 'D']"
        :imgURL="'WelcomePic.png'"
        :backgroundColor="'#774545'"
        :subHeading="'First Place in Best Hack for Improving Welcome Week at Delta Hacks IV  '"
        :gitLink="'https://github.com/merlinzhao/WelcomeWeek'"
        :thisId="'Welcomeid'"
      />
      <expCard
        :projectTitle="'Nutryent'"
        :bodyText="'An Android app that uses an image of food to extract nutritional details through a visual recognition API.'"
        :icons="['I', 'J', 'C', 'D']"
        :imgURL="'NutryentPic.png'"
        :backgroundColor="'#ffa42e'"
        :subHeading="'Made at ArchHacks 2017'"
        :externalLink="[
          'https://devpost.com/software/nutryent',
          'View on Devpost',
        ]"
        :thisId="'Nutid'"
        :linkName="'Devpost'"
      />
      <expCard
        :photoLeft="true"
        :projectTitle="'Space Escape'"
        :bodyText="'A multiplier python game inspired by the classic arcade game Galaga.'"
        :icons="['B']"
        :imgURL="'SpacePic.png'"
        :backgroundColor="'#222'"
        :subHeading="'Multiplayer python game'"
        :gitLink="'https://github.com/merlinzhao/space-esc'"
        :thisId="'Spaceid'"
      />
      <div class="gitBox" onclick="window.open('http://www.github.com/merlinzhao')">
        <p class="headingThree proof1">The proof is in the...</p>
        <p class="headingTwo proof2"><i class="fab fa-github"></i> GitHub</p>
        <p class="regText proof3">
          /merlinzhao</br>
          View the projects above along with more over on my Github.
        </p>
      </div>
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
      this.desktopPositon =
        this.screenHeight * 0.85 + 550 + 1540 - this.screenHeight * 0.35;
      this.desktopOffset = this.scrollPosition - this.desktopPositon;

      let scale = this.desktopOffset * 0.008 * 0.5;
      let deviceInPosition = this.desktopDevice.getBoundingClientRect().y;

      //console.log(deviceInPosition, this.screenHeight * 0.3);

      if (deviceInPosition <= this.screenHeight && scale > 1 && scale < 8.5) {
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

      if (scale >= 6) {
        this.desktopDevice.style.opacity = 0;
        if (scale >= 8.5) {
          this.desktopDevice.style.visibility = "hidden";
        }
        this.expBg.style.transition = "background 0s";
        this.expBg.style.background = "#111";
      } else {
        this.desktopDevice.style.visibility = "initial";
        this.desktopDevice.style.opacity = 1;
        this.expBg.style.transition = "background 0.3s ease-out";
        this.expBg.style.background = "var(--bg-eee)";
      }
    },
  },
};
</script>
<style scoped>
.experienceBg {
  height: 8600px;
  width: 100%;
  background: var(--bg-eee);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
  transition: background 0.3s ease-out;

  position: relative;
}
.experienceCenter {
  width: 95%;
  max-width: 940px;
  top: 1400px;

  position: absolute;

  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;

  transition: 0.3s all ease-out;
}
.experienceHead {
  position: absolute;
  top: 100px;
  color: var(--black);
  text-align: center;
  background: -webkit-linear-gradient(
    45deg,
    var(--sub-three) 0%,
    var(--sub-four) 60%,
    var(--sub-three) 120%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.experienceSub {
  position: absolute;
  text-align: center;
  top: 190px;
  color: var(--mer-lin);
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
  height: 600px;
  width: 800px;

  transition: width 0.2s, height 0.2s, opacity 0.5s ease-out;
  background-image: url("../assets/images/iPad-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  top: 330px;
}

.exp1 {
  width: 100%;
  height: 600px;
  background: #555;
  margin: 100px 0 100px 0;
}

.gitBox {
  width: 100%;
  height: 400px;
  background: #356288;
  margin-top: 100px;
  padding: 30px;
  transition: background 0.3s ease-out;
}

.gitBox:hover {
  background: #437caa;
  cursor: pointer;
}
.proof1 {
  color: white;
  margin: 0;
}
.proof2 {
  color: white;
}
.proof3 {
  color: white;
  position: absolute;
  bottom: 30px;
}

@media only screen and (max-width: 555px) {
  .experienceBg {
    height: 7500px;
  }
}

@media only screen and (max-width: 650px) and (min-width: 556px) {
  .headingOneHalf {
    line-height: 40pt !important;
    font-size: 35pt !important;
    margin: 0px !important;
  }
}

@media only screen and (max-width: 883px) and (min-width: 651px) {
}
</style>