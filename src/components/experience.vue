<template>
  <div class="experienceBg" >
    <div class="deviceOut" >
      <p class="headingOneHalf experienceHead">Experiences & Projects</p>
      <p class="headingThree experienceSub">
        Explore my works throughout the years.
      </p>
      <div class="deskTopDevice" />
    </div>

    <div class="experienceCenter">
       <expCard
        :photoLeft="true"
        :imgURL="'ibm.png'"
        :backgroundColor="'rgb(0,0,0)'"
        :projectTitle="'IBM'"
        :subHeading="'Front End Developer Intern'"
        :bodyText="'I worked on a React Native application for Cognos Analytics, fixing UI bugs and refactoring code in order to improve efficiency. I also implemented new pipelines for end-to-end testing through Jenkins, improving reliability and reducing runtimes.'"
        :thisId="'IBMid'"
        :className="'textCardL'"
        :externalLink="['https://www.ibm.com/products/cognos-analytics','IBM']"
        :linkName="'IBM Cognos Analytics'"
        :icons="['O','D','G','Jenkins']"
      />
      <expCard
        :imgURL="'amd-white.png'"
        :backgroundColor="'rgb(201, 66, 66)'"
        :projectTitle="'Advanced Micro Devices'"
        :subHeading="'PCIE Design and Validation Intern'"
        :bodyText="'At AMD, I was responsible for administrating and optimizing a SQL database. This ties into a larger regression testing system used by many RTL designers that allowed them to efficiently view critical simulation errors. I also improved upon the team’s Ruby on Rails website which visualized regression results.'"
        :thisId="'AMDid'"
        :className="'textCardL'"
        :externalLink="['https://www.amd.com','AMD']"
        :linkName="'amd.com'"
        :icons="['K', 'L', 'N', 'B', 'H', 'G']"
      />
      <expCard
        :photoLeft="true"
        :projectTitle="'Menlolab Inc.'"
        :bodyText="'I created key interactive data interfaces for a web application, as well as streamlining communication between the frontend and docker components. I also heavily focused on error detection and bug fixes of existing services. '"
        :subHeading="'Front End Developer Intern'"
        :icons="['F', 'D', 'A', 'H', 'G', 'J']"
        :imgURL="'MenloPic.png'"
        :externalLink="['https://menlolab.com', 'View on web']"
        :linkName="'menlolab.com'"
        :backgroundColor="'orange'"
        :thisId="'Menloid'"
        :className="'textCardR'"
        :photoCover="true"
      />
      <expCard
        :projectTitle="'DeltaHacks'"
        :subHeading="'Design Executive and Organizer'"
        :bodyText="'After competing in multiple hackathons, I wanted to help organize one. As a DeltaHacks executive, I assisted in the creation of deltahacks.com, swag, and promotional materials such as bags, stickers, and Snapchat filters. I also ensured that the event went smoothly and answered technical questions from hackers in regards to C, Python, Java, Swift and Web development.'"
        :backgroundColor="'#092238 '"
        :externalLink="['https://www.deltahacks.com','DeltaHacks.com']"
        :linkName="'DeltaHacks.com'"
        :imgURL="'dh.png'"
      />
      <expCard
        :photoLeft="true"
        :imgURL="'NavTextPic.png'"
        :projectTitle="'NavText'"
        :subHeading="'Second Place Overall at Hack Western 5 '"
        :bodyText="'NavText is a SMS based navigation application that sends directions, store and landmark information through text messages. This project was aimed to help people without overpriced data plans get directions. Fact: Canada has one of the most expensive mobile data plans among developed countries.'"
        :icons="['E', 'D', 'A']"
        :backgroundColor="'#9ab8c3'"
        :gitLink="'https://github.com/merlinzhao/NavText'"
        :externalLink="[
          'https://devpost.com/software/navtext-15tgmj',
          'View on Devpost',
        ]"
        :thisId="'Navid'"
        :linkName="'View on Devpost'"
      />
      <expCard
        :imgURL="'MerlinWebPic.png'"
        :projectTitle="'merlinzhao.me'"
        :bodyText="'My portfolio website coded and personally designed using Vue.js. I encorperated resuable components with props for increased flexibility. This project was a great way for me to dive deeper into web development!'"
        :icons="['F', 'A', 'D', 'H', 'G']"
        :gitLink="'https://github.com/merlinzhao/merlinzhao_web'"
        :externalLink="['http://www.merlinzhao.me', 'View on web']"
        :linkName="'merlinzhao.me'"
        :backgroundColor="'#222'"
        :thisId="'Webid'"
      />
      <expCard
        :photoLeft="true"
        :projectTitle="'Welcome Week'"
        :bodyText="'A mobile application that helps students quickly find campus events based on their preferences. This project was aimed to enhance the welcome week experience.'"
        :icons="['E', 'C', 'D']"
        :imgURL="'WelcomePic.png'"
        :backgroundColor="'#774545'"
        :subHeading="'First Place in Best Hack for Improving Welcome Week at Delta Hacks IV  '"
        :gitLink="'https://github.com/merlinzhao/WelcomeWeek'"
        :thisId="'Welcomeid'"
      />
      <expCard
        :projectTitle="'Nutryent'"
        :bodyText="'An Android app that uses an image of food to extract nutritional details through a visual recognition API. This project was part of my first Hackathon experience, in which I was able to apply what I have learned about the software development life cycle for the first time.'"
        :icons="['I', 'J', 'C', 'D']"
        :imgURL="'NutryentPic.png'"
        :backgroundColor="'#ffa42e'"
        :subHeading="'Made at ArchHacks 2017'"
        :externalLink="[
          'https://devpost.com/software/nutryent',
          'View on Devpost',
        ]"
        :gitLink="'https://github.com/Jseto97/Archhacks2017'"
        :thisId="'Nutid'"
        :linkName="'View on Devpost'"
        :photoCover="true"
      />
      <expCard
        :photoLeft="true"
        :projectTitle="'Space Escape'"
        :bodyText="'A multiplier python game inspired by the classic arcade game Galaga. Built heavily upon my knowledge of object-oriented programming.'"
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
          View the projects above along with more, over on my Github.
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
      let screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        this.desktopPositon =
          this.screenHeight * 0.85 + 1540 - this.screenHeight * 0.35;
      } else if (screenWidth < 767) {
        this.desktopPositon =
          this.screenHeight * 0.85 + 400 + 1340 - this.screenHeight * 0.35;
      } else {
        this.desktopPositon =
          this.screenHeight * 0.85 + 480 + 1340 - this.screenHeight * 0.35;
      }
      this.desktopOffset = this.scrollPosition - this.desktopPositon;
      let scale = 1;
      if (screenWidth < 576) {
        scale = this.desktopOffset * 0.008;
      } else if (screenWidth < 767) {
        scale = this.desktopOffset * 0.008 * 0.8;
      } else {
        scale = this.desktopOffset * 0.008 * 0.9;
      }
      let deviceInPosition = this.desktopDevice.getBoundingClientRect().y;

      console.log(scale, deviceInPosition, this.screenHeight * 0.3);

      if (deviceInPosition <= this.screenHeight && scale > 1 && scale < 8.5) {
        // this.desktopDevice.style.width =
        //   String(800 + this.desktopOffset * 2) + "px";
        // this.desktopDevice.style.height =
        //   String(400 + this.desktopOffset * 1.5) + "px";
        this.desktopDevice.style.transform = "scale(" + scale + ")";
        if (this.desktopOffset > 300) {
          this.desktopDevice.style.top = "calc(" + this.desktopOffset + "px)";
        }
        // this.desktopDevice.style.transform =
        //   "translateY(" + String(this.desktopOffset * 0.3) + "px)";
      } else {
        this.desktopDevice.style.transform = "scale(1)";
      }

      if (scale >= 6) {
        this.desktopDevice.style.opacity = 0;
        if (scale >= 8.5) {
          this.desktopDevice.style.display = "none";
        }
        this.expBg.style.transition = "background 0s";
        this.expBg.style.background = "#111";
      } else {
        this.desktopDevice.style.display = "initial";
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
  min-width: 300px;
  height: 9700px;
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
  top: 1800px;

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

@media only screen and (max-width: 576px) {
  .experienceBg {
    height: 8300px;
  }
  .headingOneHalf {
    line-height: 30pt !important;
    font-size: 26pt !important;
    margin: 0px !important;
    width: 80%;
  }
  .experienceSub {
    top: 190px;
  }
  .gitBox {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 650px) and (min-width: 576px) {
  .headingOneHalf {
    line-height: 40pt !important;
    font-size: 35pt !important;
    margin: 0px !important;
  }
  .experienceBg {
    height: 8750px;
  }
}

@media only screen and (max-width: 767px) and (min-width: 651px) {
  .experienceBg {
    height: 8650px;
  }
}
</style>