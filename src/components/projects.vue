<template>
  <div class="background">
    <div class="projectRowOut">
      <div class="projectRow" style="color:white">
        <p class="headingThree projectThree projectCenter">MADE BY MERLIN.</p>
      </div>
    </div>
    <div class="projectContainer">
      <div class="center row">
        <div class="col cardPadding">
          <projectCard
            :projectTitle="'NavText'"
            :bodyText="'BAE JOOHUYN KANG SEULGI SON SEUNGWAN PARK SOOYOUNG KIM YERIM RED DEU BEL BET UM PAH UM PAH'"
            :icons="['E','C','D']"
            :imgURL="'NavTextPic.png'"
            :backgroundColor="'#9ab8c3'"
            :gitLink="'hey'"
          />
        </div>
        <div class="col cardPaddingL">
          <project-card-large
            :projectTitle="'Menlolab Inc.'"
            :bodyText="'Wendy is from Richmond Hill, Canada. Shine on me! uwu'"
            :icons="['A','B','C','D']"
            :imgURL="'wendy.png'"
            :externalLink="'hey'"
          />
        </div>
      </div>
      <div class="center row">
        <div class="col cardPadding">
          <projectCard
            :projectTitle="'Project3'"
            :bodyText="'Bae joohyun has slayed with her visuals.'"
            :icons="['A','E','D']"
            :imgURL="'irene.jpg'"
            :gitLink="'hey'"
          />
        </div>
        <div class="col cardPadding">
          <projectCard :projectTitle="'Project4'" :bodyText="'des1 des1'" :icons="['A','F','D']" />
        </div>
        <div class="col cardPadding">
          <projectCard
            :projectTitle="'Project4'"
            :bodyText="'I did not forget about Park Sooyoung!'"
            :icons="['A','E','D']"
            :imgURL="'iPhone-6-wireframe.png'"
            :gitLink="'hey'"
          />
        </div>
        <!-- <div class="col cardPadding">
          <projectCard :isEmpty="true" />
        </div>-->
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
  width: 90%;
  max-width: 1100px;
  display: flex;
  flex-direction: row;
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
  height: calc(80vh + 100px);
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
  width: 33% !important;
  min-width: 250px !important;
  max-width: 33%;
}

.cardPaddingL {
  padding: 10px 5px 0px 5px;
  width: 66% !important;
  max-width: 66%;
  min-width: 250px !important;
}

/* ======================================================================== */
/* ================ 555px 555px 555px 555px 555px 555px =================== */
/* ======================================================================== */
@media only screen and (max-width: 555px) {
  .center {
    flex-direction: column;
  }
  .cardPadding {
    width: 100% !important;
    min-width: 100% !important;
    max-width: none !important;
  }
  .cardPaddingL {
    width: 100% !important;
    min-width: 100% !important;
    max-width: none !important;
  }
}

@media only screen and (max-width: 833px) {
  .cardPadding {
    width: 50% !important;
    min-width: none !important;
    max-width: 50% !important;
  }
  .cardPaddingL {
    width: 50% !important;
    min-width: none !important;
    max-width: 50% !important;
  }
}
</style>
 