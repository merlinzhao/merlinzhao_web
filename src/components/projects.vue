<template>
  <div class="background">
    <div class="projectRowOut">
      <div class="projectRow" style="cursor:pointer; color:white" @click="nav('projects')">
        <p class="headingThree projectThree projectCenter">MADE BY MERLIN.</p>
      </div>
    </div>
    <div class="center row">
      <div class="col-4 cardPadding">
        <projectCard
          style="transform: translateY(-50px);"
          :projectTitle="'Project1'"
          :bodyText="'BAE JOOHUYN KANG SEULGI SON SEUNGWAN PARK SOOYOUNG KIM YERIM RED DEU BEL BET UM PAH UM PAH'"
          :icons="['A','B','D']"
        />
      </div>
      <div class="col-4 cardPadding">
        <projectCard
          style="transform: translateY(-50px)"
          :projectTitle="'Project1'"
          :bodyText="'des1 des1'"
          :icons="['A','B','D']"
        />
      </div>
      <div class="col-4 cardPadding">
        <projectCard
          style="transform: translateY(-50px)"
          :projectTitle="'Project1'"
          :bodyText="'des1 des1'"
          :icons="['A','E','D']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import projectCard from "./projectCard.vue";
export default {
  name: "projects",
  components: {
    projectCard
  }
};
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  background: #fafafa;
  width: 100%;
  min-width: 700px;
  align-items: center;
  font-family: "Lato", sans-serif;
}
.center {
  width: 90%;
  max-width: 1250px;
}

/* ======================================================================== */
/* PROJECT ROW ITEMS ====== PROJECT PROJECT PROJECT ===== PROJECT ROW ITEMS */
/* ======================================================================== */
.projectRow {
  height: calc(80vh + 100px);
  width: 100%;
  background: rgb(255, 145, 0);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  transition: background 0.5s ease-out;
}
.projectRowOut {
  width: 100%;
  background: linear-gradient(230deg, #ff5bf1, #fd6500, #fdcb00);
  background-size: 600% 600%;

  -webkit-animation: GradientAnimation 7s ease-in-out infinite;
  -moz-animation: GradientAnimation 7s ease-in-out infinite;
  animation: GradientAnimation 7s ease-in-out infinite;
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
.projectRow:hover {
  background: transparent;
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
  padding: 0px 2% 0px 2%;
}
</style>
 