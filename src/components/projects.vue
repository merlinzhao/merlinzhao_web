<template>
  <div class="background">
    <sideMenu class="side-menu" />
    <mobile-menu class="mobile-menu" />

    <div class="projectRowOut" ref="top">
      <div class="projectRow" style="color:white">
        <p class="headingTwo projectThree projectCenter">MADE BY MERLIN.</p>
        <p class="subHeading">const subHeading = "Explore my Projects."</p>
      </div>
    </div>
    <div class="projectContainer">
      <div class="center row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 cardPaddingL">
          <project-card-large
            :projectTitle="'Advance Micro Devices'"
            :bodyText="'Job desciption coming soon'"
            :subHeading="'PCIE Design and Validation Intern'"
            :icons="['F','D','A','H','G','L','E','J','K']"
            :imgURL="'amd-white.png'"
            :backgroundColor="'rgb(201, 66, 66)'"
            :externalLink="['https://amd.com','View on web']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'NavText'"
            :subHeading="'Second Place Overall at Hack Western 5 '"
            :bodyText="'NavText is a SMS based navigation application that sends directions, store and landmark information through text messages.'"
            :icons="['E','D','A']"
            :imgURL="'NavTextPic.png'"
            :backgroundColor="'#9ab8c3'"
            :gitLink="'https://github.com/merlinzhao/NavText'"
            :externalLink="['https://devpost.com/software/navtext-15tgmj', 'View on Devpost']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'merlinzhao.me'"
            :bodyText="'My portfolio website coded from scratch (with love ❤️) and personally designed using Vue.js.'"
            :icons="['F','A','D','H','G']"
            :imgURL="'MerlinWebPic.png'"
            :externalLink="['http://www.merlinzhao.me','View on web']"
            :backgroundColor="'#222'"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 cardPaddingL">
          <project-card-large
            :projectTitle="'Menlolab Inc.'"
            :bodyText="'I created key interactive data interfaces for a web application, as well as streamlining communication between the frontend and docker components. I also heavily focused on error detection and bug fixes of existing services. '"
            :subHeading="'Front End Developer Intern'"
            :icons="['F','D','A','H','G','L','E','J','K']"
            :imgURL="'MenloPic.png'"
            :externalLink="['https://menlolab.com','View on web']"
          />
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'Welcome Week'"
            :bodyText="'A mobile application that helps students quickly find campus events based on their preferences.'"
            :icons="['E','C','D']"
            :imgURL="'WelcomePic.png'"
            :backgroundColor="'#774545'"
            :subHeading="'First Place in Best Hack for Improving Welcome Week at Delta Hacks IV  '"
            :gitLink="'https://github.com/merlinzhao/WelcomeWeek'"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'Nutryent'"
            :bodyText="'An Android app that uses an image of food to extract nutritional details through a visual recognition API.'"
            :icons="['I','J','C','D']"
            :imgURL="'NutryentPic.png'"
            :backgroundColor="'#ffa42e'"
            :subHeading="'Made at ArchHacks 2017'"
            :externalLink="['https://devpost.com/software/nutryent','View on Devpost']"
          />
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'Space Escape'"
            :bodyText="'A multiplier python game inspired by the classic arcade game Galaga.'"
            :icons="['B']"
            :imgURL="'SpacePic.png'"
            :backgroundColor="'#222'"
            :subHeading="'Multiplayer python game'"
            :gitLink="'https://github.com/merlinzhao/space-esc'"
          />
        </div>
      </div>
    </div>
    <myFooter @scrollTo="scrollTo" :page="'project'" />
  </div>
</template>



<script>
import projectCard from "./projectCard.vue";
import projectCardLarge from "./projectCardL.vue";
import myFooter from "./footer.vue";
import sideMenu from "./side-menu.vue";
import mobileMenu from "./mobile-menu.vue";
export default {
  name: "projects",
  date() {
    return {
      col: "col-2",
      setTheme: "undefined",
    };
  },
  components: {
    projectCard,
    projectCardLarge,
    myFooter,
    sideMenu,
    mobileMenu,
  },
  mounted() {
    this.scrollTo();
  },
  methods: {
    openNav() {
      // open navigation stuffs
      const width = this.$el.querySelector(".projectRowOut");
      if (width.offsetWidth > 350) {
        document.getElementById("mySidenav").style.width = "350px";
      } else {
        document.getElementById("mySidenav").style.width = "80%";
      }
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
    nav(event) {
      this.$router.push({ path: event });
    },
    scrollTo() {
      var element = this.$refs["top"];
      var top = element.offsetTop;
      window.scrollTo(0, top);

      if (localStorage.getItem("dark-mode")) {
        this.setTheme = localStorage.getItem("dark-mode");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cousine&display=swap");
.background {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  background: var(--bg-eee);
  width: 100%;
  align-items: center;
  font-family: "Lato", sans-serif;
  transition: background 0.5s ease-out;
}
.center {
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: row;
  padding: 0px 5px 0px 5px;
  margin: 0px;
  align-items: center;
}

.projectContainer {
  padding: 25px 0px 25px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ======================================================================== */
/* PROJECT ROW ITEMS ====== PROJECT PROJECT PROJECT ===== PROJECT ROW ITEMS */
/* ======================================================================== */
.projectRow {
  height: calc(80vh);
  min-height: 200px;
  width: 100%;
  background: var(--bg-e4e4e4);
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: flex-start;
  align-items: center;
  padding-top: calc(5% + 25px);
  transition: background 0.5s ease-out;
}
.projectRowOut {
  width: 100%;
  margin-bottom: 25px;
}
.mobile-menu {
  visibility: hidden;
  position: fixed;
  z-index: 100;
}

@-webkit-keyframes GradientAnimation {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}
@-moz-keyframes GradientAnimation {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}
@keyframes GradientAnimation {
  0% {
    background-position: 0% 48%;
  }
  50% {
    background-position: 100% 53%;
  }
  100% {
    background-position: 0% 48%;
  }
}

/* .projectRow:hover > .projectCenter {
  transform: translateX(110px);
}
.projectRow:hover > .projectCenter2 {
  transform: translateX(-188px);
  opacity: 1;
} */
.projectCenter {
  padding: 0px 8px 0px 8px;
  text-align: center;
  vertical-align: middle;
  transition: all 0.4s linear;
}
.projectThree {
  font-weight: 700 !important;
}

.subHeading {
  font-family: "Cousine", monospace;
  font-size: 16pt;
}

.cardPadding {
  padding: 10px 5px 0px 5px;
  /* width: 33% !important; */
  /* min-width: 250px !important; */
  /* max-width: 33%; */
}

.cardPaddingL {
  padding: 10px 5px 0px 5px;
}

@media only screen and (max-width: 555px) {
}
@media only screen and (max-width: 833px) {
  .side-menu {
    visibility: hidden;
  }
  .mobile-menu {
    visibility: visible;
  }
}
</style>


 