<template>
  <div class="background">
    <sideMenu class="side-menu" />
    <mobile-menu class="mobile-menu" />

    <div class="projectRowOut" ref="top">
      <div class="projectRow" style="color: white">
        <p class="headingTwo projectThree projectCenter">MADE BY MERLIN.</p>
        <p class="subHeading">
          const subHeading = "Explore my Projects."<br />You have discovered my
          old projects page! :)<br />This page is out of date.
        </p>
      </div>
    </div>
    <div class="projectContainer">
      <div class="center row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 cardPaddingL">
          <project-card-large
            :projectTitle="'Advanced Micro Devices'"
            :bodyText="'Job description coming soon'"
            :subHeading="'PCIE Design and Validation Intern'"
            :icons="['VueJS', 'Javascript', 'Bootstrap', 'HTML5', 'CSS3', 'Swift', 'Java']"
            :imgURL="'amd-white.png'"
            :backgroundColor="'rgb(201, 66, 66)'"
            :externalLink="['https://amd.com', 'View on web']"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'NavText'"
            :subHeading="'Second Place Overall at Hack Western 5 '"
            :bodyText="'NavText is a SMS based navigation application that sends directions, store and landmark information through text messages.'"
            :icons="['Swift', 'Javascript', 'Bootstrap']"
            :imgURL="'NavTextPic.png'"
            :backgroundColor="'#9ab8c3'"
            :gitLink="'https://github.com/merlinzhao/NavText'"
            :externalLink="[
              'https://devpost.com/software/navtext-15tgmj',
              'View on Devpost',
            ]"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'merlinzhao.me'"
            :bodyText="'My portfolio website coded from scratch (with love ❤️) and personally designed using Vue.js.'"
            :icons="['VueJS', 'Bootstrap', 'Javascript', 'HTML5', 'CSS3']"
            :imgURL="'MerlinWebPic.png'"
            :externalLink="['http://www.merlinzhao.me', 'View on web']"
            :backgroundColor="'#222'"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 cardPaddingL">
          <project-card-large
            :projectTitle="'Menlolab Inc.'"
            :bodyText="'I created key interactive data interfaces for a web application, as well as streamlining communication between the frontend and docker components. I also heavily focused on error detection and bug fixes of existing services. '"
            :subHeading="'Front End Developer Intern'"
            :icons="['VueJS', 'Javascript', 'Bootstrap', 'HTML5', 'CSS3', 'Swift', 'Java']"
            :imgURL="'MenloPic.png'"
            :externalLink="['https://menlolab.com', 'View on web']"
          />
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'Welcome Week'"
            :bodyText="'A mobile application that helps students quickly find campus events based on their preferences.'"
            :icons="['Swift', 'NodeJS', 'Javascript']"
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
            :icons="['Android Dev', 'Java', 'NodeJS', 'Javascript']"
            :imgURL="'NutryentPic.png'"
            :backgroundColor="'#ffa42e'"
            :subHeading="'Made at ArchHacks 2017'"
            :externalLink="[
              'https://devpost.com/software/nutryent',
              'View on Devpost',
            ]"
          />
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'Space Escape'"
            :bodyText="'A multiplayer Python game inspired by the classic arcade game Galaga.'"
            :icons="['Python']"
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
    scrollTo() {
      window.scrollTo(0, this.$refs.top.offsetTop);
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
  height: calc(40vh);
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
}

.cardPaddingL {
  padding: 10px 5px 0px 5px;
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


 