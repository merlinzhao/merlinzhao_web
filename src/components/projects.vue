<template>
  <div class="background">
    <div class="projectRowOut">
      <div class="projectRow" style="color:white">
        <p class="headingThree projectThree projectCenter">MADE BY MERLIN.</p>
      </div>
    </div>
    <div class="projectContainer">
      <div class="center row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'NavText'"
            :subHeading="'Second Place Overall at Hack Western 5 '"
            :bodyText="'NavText is a SMS based navigation application that sends directions, store and landmark information through text messages.'"
            :icons="['E','D']"
            :imgURL="'NavTextPic.png'"
            :backgroundColor="'#9ab8c3'"
            :gitLink="'hey'"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 cardPaddingL">
          <project-card-large
            :projectTitle="'Menlolab Inc.'"
            :bodyText="'I created key interactive data interfaces for a web application, as well as streamlining communication between the frontend and docker components. I also heavily focused on error detection and bug fixes of existing services. '"
            :subHeading="'Front End Developer'"
            :icons="['F','D','A','H','G','L','E','J','K']"
            :imgURL="'MenloPic.png'"
            :externalLink="'hey'"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'merlinzhao.me'"
            :bodyText="'Bae joohyun has slayed with her visuals.'"
            :icons="['F','A','D','H','G']"
            :imgURL="'MerlinWebPic.png'"
            :gitLink="'hey'"
            :backgroundColor="'#222'"
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
            :gitLink="'hey'"
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
            :gitLink="'hey'"
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
            :gitLink="'hey'"
          />
        </div>
      </div>
    </div>
    <myFooter />
  </div>
</template>



<script>
import projectCard from "./projectCard.vue";
import projectCardLarge from "./projectCardL.vue";
import myFooter from "./footer.vue";
export default {
  name: "projects",
  date() {
    return {
      col: "col-2"
    };
  },
  components: {
    projectCard,
    projectCardLarge,
    myFooter
  }
};
</script>

<style scoped>
.background {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  background: #181818;
  width: 100%;
  align-items: center;
  font-family: "Lato", sans-serif;
}
.center {
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: row;
  padding: 0px 5px 0px 5px;
  align-items: center;
}

.projectContainer {
  padding: 25px 0px 100px 0px;
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
  background: #111;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  transition: background 0.5s ease-out;
}
.projectRowOut {
  width: 100%;
  margin-bottom: 25px;
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
  position: absolute;
  padding: 0px 8px 0px 8px;
  text-align: center;
  vertical-align: middle;
  transition: all 0.4s linear;
}
.projectThree {
  font-weight: 700 !important;
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
</style>
 