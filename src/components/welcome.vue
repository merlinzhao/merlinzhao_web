<template>
  <div class="background">
    <div class="welcomeContainer">
      <div class="projectRowOut">
        <div class="projectRow" style="cursor:pointer; color:white" @click="nav('projects')">
          <p class="headingThree projectThree projectCenter2">VIEW MY</p>
          <p class="headingThree projectThree projectCenter">PROJECTS & EXPERIENCE</p>
        </div>
      </div>
      <div class="gitRow">
        <div
          class="col gitRowLeft"
          style="cursor:pointer; color: white;"
          onclick="window.open('http://www.github.com/merlinzhao')"
        >
          <p class="regText regGitText gitCenter2">www.github.com/merlinzhao</p>
          <p class="headingThree projectThree gitCenter1">
            <i class="fab fa-github" /> GITHUB
          </p>
        </div>
        <div
          class="col gitRowRight"
          style="cursor:pointer; color: white;"
          onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
        >
          <div class="linked2">
            <p class="regText regGitText linkedCenter2">www.linkedin.com/in/merlinzhao</p>
            <p class="headingThree projectThree linkedCenter1">
              <i class="fab fa-linkedin" /> LINKEDIN
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    nav(event) {
      this.$router.push({ path: event });
    },
  },
};
</script>


<style scoped>
.background {
  height: 730px;
  min-height: 500px;
  width: 100%;
  background: var(--bg-eee);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
}
/* ======================================================================== */
/* NAME ROW ITEMS ========= NAME NAME NAME NAME =========== NAME ROW ITEMS  */
/* ======================================================================== */

.welcomeContainer {
  height: 100%;
  max-width: 1240px;
  width: 100%;
}

.nameBG {
  background: linear-gradient(271deg, #c342ff, #2694ff, #455dbd);
  background-size: 800% 800%;

  -webkit-animation: knockOutAnimation 5s ease infinite;
  -moz-animation: knockOutAnimation 5s ease infinite;
  animation: knockOutAnimation 5s ease infinite;
  color: transparent !important;

  background-clip: text;
  -webkit-background-clip: text;
}
@-webkit-keyframes knockOutAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes knockOutAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes knockOutAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.leftCol {
  height: 100%;
  line-height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: left;
}
.rightCol {
  height: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgb(152, 12, 252) 0%,
    rgb(5, 132, 216) 100%
  );
}
/* ======================================================================== */
/* ======================================================================== */
/* ======================================================================== */
.externalRow {
  height: 15%;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  padding: 15px;
}
/* ======================================================================== */
/* ABOUTME ROW ITEMS ========= ABOUT ABOUT ABOUT ======= ABOUT ME ROW ITEMS */
/* ======================================================================== */
.aboutMeRow {
  height: 500px;
  width: 100vw;
  background: #fafafa;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.aboutMeCenter {
  width: 80vw;
  height: 80%;
  padding: 15px;
  max-width: 1250px;
}
.aboutMeThree {
  color: #333 !important;
}
.regText {
  line-height: 18pt;
  font-size: 16pt;
  color: #333;
  font-weight: 300;
}

/* ======================================================================== */
/* PROJECT ROW ITEMS ====== PROJECT PROJECT PROJECT ===== PROJECT ROW ITEMS */
/* ======================================================================== */
.projectRow {
  height: 400px;
  width: 100%;
  background: #fe875d;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  transition: background 0.5s ease-out;
}
.projectRowOut {
  background-size: 600% 600%;
  padding: 0px 0 5px 0;

  /* -webkit-animation: GradientAnimation 7s ease-in-out infinite;
  -moz-animation: GradientAnimation 7s ease-in-out infinite;
  animation: GradientAnimation 7s ease-in-out infinite; */
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
  background: #c94242;
}

@media only screen and (min-width: 700px) {
  .projectRow:hover > .projectCenter {
    transform: translateX(82px);
  }
  .projectRow:hover > .projectCenter2 {
    transform: translateX(-210px);
    opacity: 1;
  }
}

.projectCenter {
  position: absolute;
  padding: 0px 8px 0px 8px;
  text-align: center;
  vertical-align: middle;
  transition: all 0.4s linear;
}

.projectCenter2 {
  transform: translateX(-160px);
  opacity: 0;
  position: absolute;
  text-align: center;
  vertical-align: middle;
  transition: all 0.4s linear, opacity 0.4s ease-in-out;
}
.projectThree {
  font-weight: 700 !important;
}

/* ======================================================================== */
/* GIT ROW ITEMS ============= GIT GIT GIT GIT ============= GIT ROW ITEMS  */
/* ======================================================================== */
.gitRow {
  height: 300px;
  width: 100%;

  display: flex;
  flex-direction: row;
}

.gitRowLeft {
  height: 100%;
  background: #356288;
  display: flex;
  transition: background 0.5s ease-out;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  margin: 5px 5px 0px 0px;
}
.gitRowLeft:hover {
  background: #487da8;
}
.gitRowLeft:hover > .gitCenter2 {
  transform: translateY(20px);
  opacity: 0.4;
}

.gitRowLeft:hover > .gitCenter1 {
  transform: translateY(-10px);
}

.gitCenter1 {
  transition: all 0.4s linear;
  position: absolute;
}

.gitCenter2 {
  transform: translateY(17px);
  font-size: 12pt;
  opacity: 0;
  text-align: center;
  transition: all 0.4s linear;
  position: absolute;
}

.regGitText {
  color: white;
}

/* RIGHT GIT ============================================================== */

.gitRowRight {
  height: 100%;

  padding: 0px;
  margin: 5px 0px 0px 5px;
}

.linked2 {
  height: 100%;
  background-size: 100% 100% !important;
  background: #356288;
  /* linear-gradient(135deg, #c94242 0%, #fe875d 100%); */
  opacity: 1;
  transition: all 0.5s ease-out, background-size 1s ease-in-out;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.linked2:hover {
  background: #487da8;
}

.linked2:hover > .linkedCenter1 {
  transform: translateY(-10px);
}
.linked2:hover > .linkedCenter2 {
  transform: translateY(20px);
  opacity: 0.4;
}
.linkedCenter1 {
  transition: all 0.4s linear;
  position: absolute;
}
.linkedCenter2 {
  transform: translateY(17px);
  font-size: 12pt;
  opacity: 0;
  text-align: center;
  transition: all 0.4s linear;
  position: absolute;
}

/* ======================================================================== */

/* 
.btn {
  height: 95px;
  width: 80px;
  border: none;
  padding: 0px;
  align-items: center;
  margin: 1vh 0px 1vh 0px;
}

.btn2 {
  height: 50px;
  width: 50px;
  border: none;
  background: transparent;
  padding: 0px;
  align-items: center;
  margin: 0px 10px 0px 0px;
}
.projectBtn {
  color: white;
  border-radius: 12px;
  font-size: 16pt;
  border: 3px rgba(255, 255, 255, 0.9) solid;
  background: transparent;
  height: 60px;
  width: 260px;
  transition: color 0.6s ease-out, border 0.4s ease-out;
}
.projectBtn:hover {
  border: 3px rgba(255, 255, 255, 0.6) solid;
  color: rgba(255, 255, 255, 0.6);
} */
.fas {
  transition: color 0.3s ease-out;
  color: rgb(255, 255, 255, 0.9);
}
/* .fas:hover {
  color: rgb(255, 255, 255, 0.7);
} */
.fab {
  transition: color 0.3s ease-out;
  color: rgb(255, 255, 255, 1);
}
/* .fab:hover {
  color: rgb(255, 255, 255, 0.7);
} */

/* ======================================================================== */
/* ================ 555px 555px 555px 555px 555px 555px =================== */
/* ======================================================================== */

@media only screen and (max-width: 768px) {
  .gitRow {
    display: flex !important;
    flex-direction: column !important;
  }
  .projectRow {
    height: 250px;
  }
  .gitRowLeft {
    height: 150px;
  }
  .gitRowRight {
    height: 150px;
  }
  .headingThree {
    font-size: 26pt;
    font-weight: 500;
  }
}
</style>

