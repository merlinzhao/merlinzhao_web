<template>
  <div class="background">
    <div class="row nameRow">
      <div class="row nameRowCenter">
        <div class="col-11 leftCol">
          <p class="headingThree" style="opacity: 0.9;">{{greeting}}!</p>
          <p class="headingOne">I'm Merlin.</p>
          <div style="height: 5%; width: 100%;" />
          <p class="headingThree" style="opacity: 0.9;">software developer</p>
          <p class="headingThree" style="opacity: 0.9;">graphic designer</p>
          <p class="headingThree" style="opacity: 0.9;">chipotle lover</p>
          <p class="headingThree wiz" style="opacity: 0.9;">
            unfortunately, not a real wizard
            <i class="far fa-sad-tear" />
          </p>
          <!-- <div style="height: 7%; width: 100%;" /> -->
          <!-- <button class="projectBtn">View my Projects</button> -->
        </div>
        <div class="col-1 rightCol"></div>
      </div>
    </div>
    <div class="aboutMeRow">
      <div class="aboutMeCenter">
        <p class="headingThree aboutMeThree">About Me</p>
        <p class="regText">
          Red Velvet (Hangul: 레드벨벳) is a South Korean girl group formed by SM Entertainment. The group debuted on August 1, 2014, with the digital single "Happiness" and four group members: Irene, Seulgi, Wendy, and Joy. In March 2015, Yeri was added into the group.
          <br />
          <br />Since their debut, Red Velvet has released two studio albums, one reissue album, and eight extended plays in Korean, with nine of them topping South Korea's Gaon Album Chart. Their singles "Happiness", "Ice Cream Cake", "Dumb Dumb", "Russian Roulette", "Rookie", "Peek-a-Boo", and "Bad Boy" have all charted in the top five on Gaon Digital Chart, while their singles "Red Flavor" and "Power Up" topped the chart upon their releases. Red Velvet is regarded as one of the most popular K-pop groups worldwide by Time and Billboard and have received several awards for music, choreography, and popularity, including the Golden Disc New Artist Award in 2015 and the Mnet Asian Music Award for Best Female Group in 2017.
        </p>
      </div>
    </div>
    <div class="projectRow" style="cursor:pointer">
      <div class="projectRow2">
        <p class="headingThree projectThree projectCenter2">VIEW MY</p>
        <p class="headingThree projectThree projectCenter">PROJECTS</p>
      </div>
     
    </div>
    <div class="gitRow">
      <div
        class="col-6 gitRowLeft"
        style="cursor:pointer"
        onclick="window.open('http://www.github.com/merlinzhao')"
      >
        <p class="regText regGitText gitCenter2">www.github.com/merlinzhao</p>
        <p class="headingThree projectThree gitCenter1">
          <i class="fab fa-github" /> GITHUB
        </p>
      </div>
      <div
        class="col-6 gitRowRight"
        style="cursor:pointer"
        onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
      >
        <p class="regText regGitText linkedCenter2">www.linkedin.com/in/merlinzhao</p>
        <p class="headingThree projectThree linkedCenter1">
          <i class="fab fa-linkedin" /> LINKEDIN
        </p>
      </div>
    </div>
    <!-- <div class="row externalRow">
      <button class="btn2" data-toggle="tooltip" title="My Projects" style="font-size: 2.2em;">
        <i class="fas fa-file-code"></i>
      </button>
      <button class="btn2" data-toggle="tooltip" title="My Resume" style="font-size: 2.2em;">
        <i class="fas fa-file-alt"></i>
      </button>
      <button class="btn2" style="font-size: 2.2em;" data-toggle="tooltip" title="Conact Me :)">
        <i class="fas fa-paper-plane"></i>
      </button>
      <div
        style="font-size: 3.2em; font-weight: 200; color:white; height: 50px ;margin: -15px 35px 0px 25px;"
      >|</div>
      <button
        class="btn2"
        onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
        style="font-size: 2.2em;"
        data-toggle="tooltip"
        title="LinkedIn"
      >
        <i class="fab fa-linkedin"></i>
      </button>
      <button
        class="btn2"
        onclick="window.open('http://www.github.com/merlinzhao')"
        style="font-size: 2.2em;"
        data-toggle="tooltip"
        title="GitHub"
      >
        <i class="fab fa-github"></i>
      </button>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTime: "",
      selectFas: "",
      greeting: "여보세요",
      greetingArr: [
        "여보세요",
        "hello",
        "hola",
        "こんにちは",
        "bonjour",
        "你好"
      ],
      greetingIndex: 0,

      testNum: 0,

      // for event listeners
      projectPanel: "",
      projectCenter: "",
      projectCenter2: "",

      gitPanel: "",
      gitCenter: "",
      linkedInPanel: "",
      linkedInCenter: ""
    };
  },
  mounted() {
    this.currentTime = new Date();

    //   // PROJECT
    //   this.projectPanel = document.querySelector(".projectRow");
    //   this.projectPanel.addEventListener("mouseover", this.overProject, false);
    //   this.projectPanel.addEventListener("mouseout", this.outProject, false);
    //   this.projectCenter = document.querySelector(".projectCenter");

    //   // GIT
    //   this.gitPanel = document.querySelector(".gitRowLeft");

    //   // LINKED IN
    //   this.gitCenter = document.querySelector(".gitRowRight");

    //   setInterval(() => {
    //     if (this.greetingIndex < 5) {
    //       this.greetingIndex++;
    //     } else {
    //       this.greetingIndex = 0;
    //     }
    //     this.greeting = this.greetingArr[this.greetingIndex];
    //   }, 800);
    // },
    // methods: {
    //   overProject() {
    //     this.projectCenter.style.transform = "translateX(100px)";
    //   },
    //   outProject() {
    //     this.projectCenter.style.transform = "translateX(0px)";
    //   }
  }
};
</script>


<style scoped>
/* ======================================================================== */
/* NAME ROW ITEMS ========= NAME NAME NAME NAME =========== NAME ROW ITEMS  */
/* ======================================================================== */
.nameRow {
  height: 85vh;
  min-height: 600px;
  max-height: 1200px;
  width: 100vw;
  margin: auto;
  background: linear-gradient(
    0deg,
    rgb(152, 12, 252) 0%,
    rgb(5, 132, 216) 100%
  );
}
.nameRowCenter {
  height: 85vh;
  min-height: 600px;
  max-height: 1200px;
  width: 80%;
  max-width: 1350px;
  margin: auto;
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
  max-width: 1350px;
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
  height: 500px;
  width: 100vw;
  background: rgb(255, 168, 6);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  transition: background 0.5s ease-out;
}
.projectRow:hover {
  background: rgb(252, 193, 0);
}

.projectRow:hover > .projectCenter {
  transform: translateX(85px);
  background: rgb(228, 206, 136);
}
.projectRow:hover > .projectCenter2 {
  transform: translateX(-85px);
  visibility: visible;
}
.projectCenter {
  position: absolute;
  padding: 0px 8px 0px 8px;
  text-align: center;
  vertical-align: middle;
  background: rgb(255, 168, 6);
  transition: all 0.4s linear;
}

.projectCenter2 {
  visibility: hidden;
  position: absolute;
  text-align: center;
  vertical-align: middle;

  transition: all 0.4s linear;
}
.projectThree {
  font-weight: 700 !important;
}

/* ======================================================================== */
/* GIT ROW ITEMS ============= GIT GIT GIT GIT ============= GIT ROW ITEMS  */
/* ======================================================================== */
.gitRow {
  height: 500px;
  width: 100vw;
  background: #fafafa;
  display: flex;
  flex-direction: row;
}

.gitRowLeft {
  height: 100%;
  background: rgb(29, 29, 85);
  display: flex;
  transition: background 0.5s ease-out;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.gitRowLeft:hover {
  background: rgb(40, 40, 110);
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
  background: linear-gradient(135deg, #4501a5 0%, #ff8989 100%);
  opacity: 1;
  transition: opacity 0.5s ease-out;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.gitRowRight:hover {
}

.gitRowRight:hover > .linkedCenter1 {
  transform: translateY(-10px);
}
.gitRowRight:hover > .linkedCenter2 {
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

.headingOne {
  line-height: 65pt;
  font-size: 65pt;
  color: white;
  font-weight: 700;
}
.headingTwo {
  line-height: 50pt;
  font-size: 45pt;
  color: white;
  font-weight: 400;
}
.headingThree {
  line-height: 25pt;
  font-size: 25pt;
  color: white;
  font-weight: 400;
}

.wiz {
  color: rgba(191, 112, 255, 0.829);
}

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
}
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
</style>

