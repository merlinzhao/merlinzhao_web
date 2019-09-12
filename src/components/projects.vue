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
            :bodyText="'NavText is a SMS based navigation application. It sends directions, store and landmark information through SMS. This can help those without mobile data plans or traveling abroad get around.'"
            :icons="['E','C','D']"
            :imgURL="'NavTextPic.png'"
            :backgroundColor="'#9ab8c3'"
            :gitLink="'hey'"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 cardPaddingL">
          <project-card-large
            :projectTitle="'Menlolab Inc.'"
            :bodyText="'Wendy is from Richmond Hill, Canada. Shine on me! uwu'"
            :subHeading="'Front End Developer'"
            :icons="['A','B','C','D']"
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
            :backgroundColor="'#555'"
            :sizeBackground="'cover'"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'Welcome Week'"
            :bodyText="'I did not forget about Park Sooyoung!'"
            :icons="['A','E','D']"
            :imgURL="'WelcomePic.png'"
            :backgroundColor="'#774545'"
            :subHeading="'First Place in Best Hack for Improving Welcome Week at Delta Hacks IV  '"
            :gitLink="'hey'"
          />
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
          <projectCard
            :projectTitle="'Nutryent'"
            :bodyText="'An Android app that uses an image of food to extract nutritional details through a visual recognition API. The data is used to keep track of the users daily nutritional intake.'"
            :icons="['I','J','C','D']"
            :imgURL="'NutryentPic.png'"
            :backgroundColor="'#ffa42e'"
            :subHeading="'Made at ArchHacks 2017'"
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
.test {
  height: 800px;
  width: 400px;

  background-size: 600% 600% !important;

  background: linear-gradient(230deg, #ff5bf1, #fd6500, #fdcb00);
  -webkit-animation: GradientAnimation 4s ease-in-out infinite;
  -moz-animation: GradientAnimation 4s ease-in-out infinite;
  animation: GradientAnimation 4s ease-in-out infinite;
  mask-image: url("../assets/images/iPhone-6-wireframe.png");
  mask-mode: alpha;
  mask-repeat: no-repeat;
  mask-size: 100%;
}
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
 