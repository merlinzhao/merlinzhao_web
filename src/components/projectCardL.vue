<template>
  <div class="projectCard" :ref="projectTitle">
    <div
      class="col imageCol"
      :style="{ backgroundColor: backgroundColor, backgroundImage: 'url(' + require('../assets/images/'+imgURL+'') + ')' }"
    >
      <!-- <i class="fas fa-laptop" /> -->
    </div>
    <div class="col leftCardItems">
      <div class="textRow">
        <p class="headingThree">{{projectTitle}}</p>
        <p v-if="subHeading!='none'" class="subHeading">{{subHeading}}</p>
        <p class="regText">{{bodyText}}</p>
      </div>
      <div class="iconRow">
        <div class="col-9 leftCol">
          <div v-for="number in icons" :key="number">
            <!-- A - bootstrap
            B - python
            C - swift
            D - js
            E - node
            F - vue
            G - css
            H - html
            I - android-->
            <i
              v-if="number === 'A'"
              class="devicon-bootstrap-plain colored icon"
              style="margin-right: 5px; color: #8848b5;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">Bootstrap</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'B'"
              class="devicon-python-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">Python</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'C'"
              class="devicon-nodejs-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">NodeJS</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'D'"
              class="devicon-javascript-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">Javascript</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'E'"
              class="devicon-swift-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">Swift</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'F'"
              class="devicon-vuejs-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">VueJS</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'G'"
              class="devicon-css3-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">CSS3</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'H'"
              class="devicon-html5-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">HTML5</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'I'"
              class="devicon-android-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">Android Dev</p>
                <i></i>
              </div>
            </i>
            <i
              v-if="number === 'J'"
              class="devicon-java-plain colored icon"
              style="margin-right: 5px;"
            >
              <div class="tool regText modalText">
                <p style="margin: 0px;">Java</p>
                <i></i>
              </div>
            </i>
          </div>
        </div>
        <div class="col-3 rightCol" style="font-size: 2em; cursor:pointer; ">
          <i @click="openLink();" v-if="gitLink!='none'" class="fab fa-github githubLogo icon">
            <div class="tool regText modalR">
              <p class="modalText">View on GitHub</p>
              <i></i>
            </div>
          </i>
          <i
            @click="openLink();"
            v-if="externalLink[1]"
            class="fas fa-external-link-square-alt githubLogo icon"
          >
            <div class="tool regText modalR">
              <p class="modalText">{{externalLink[1]}}</p>
              <i></i>
            </div>
          </i>
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

  props: {
    isEmpty: {
      type: Boolean,
      default: false
    },
    imgURL: {
      type: String,
      default: "kang.jpg"
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    icons: {
      type: Array,
      default: () => []
    },
    projectTitle: {
      type: String,
      default: "Title Unavailable"
    },
    subHeading: {
      type: String,
      default: "none"
    },
    bodyText: {
      type: String,
      default: "Description Unavailable"
    },
    gitLink: {
      type: String,
      default: "none"
    },
    externalLink: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.isEmpty) {
        const background = this.$refs[this.projectTitle];
        background.style.height = "0px";
        background.style.opacity = "0";
      }
    });
  },
  methods: {
    openLink() {
      if (this.externalLink[1]) window.open(this.externalLink[0]);
      else if (this.gitLink != "none") window.open(this.gitLink);
    }
  }
};
</script>

<style scoped>
.projectCard {
  width: 100%;
  height: 560px;
  background: #333;
  display: flex;
}

.imageCol {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
  padding: 0px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.textRow {
  height: 280px;
  width: 100%;
  padding: 25px;
  filter: brightness(0.7);
  transition: filter 0.3s ease-out;
  overflow-y: auto;
  overflow-x: hidden;
}
.projectCard:hover .textRow {
  filter: brightness(1);
}
.iconRow {
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px 25px 15px 25px;
}

.headingThree {
  line-height: 25pt;
  font-size: 25pt;
  color: white;
  font-weight: 400;
  margin-bottom: 5px;
}
.regText {
  line-height: 18pt;
  font-size: 12pt;
  color: white;
  font-weight: 400;
}
.subHeading {
  line-height: 12pt;
  font-size: 11pt;
  color: #aaa;
  margin-bottom: 10px;
}
.leftCardItems {
  padding: 0px;
}

.leftCol {
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  height: 100%;
  filter: saturate(0);
  transition: filter 0.3s ease-out;
  align-items: center;
  padding: 0px;
}
.projectCard:hover .leftCol {
  opacity: 1;
  filter: saturate(1);
}
.rightCol {
  padding: 0;
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.githubLogo {
  transition: color 0.3s ease-out;
  color: #aaa;
}
.projectCard:hover .githubLogo {
  color: white;
}
.modalText {
  margin: 0px;
}

.icon .tool {
  min-width: 100px;
  top: -20px;
  transform: translate(calc(-50% + 10px), -62%);
  color: #ffffff;
  background-color: #555;
  font-weight: 400;
  font-size: 11pt;
  border-radius: 5px;
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s;
  font-family: initial;
  padding: 5px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.icon:hover .tool {
  position: absolute;
  visibility: visible;
  opacity: 0.95;
}

.icon .tool i {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -12px;
  width: 24px;
  height: 12px;
  overflow: hidden;
}

.icon .tool i::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: #555;
  box-shadow: 0 1px 8px transparent;
}

@media only screen and (max-width: 991px) {
  .imageCol {
    max-height: 220px;
    width: 100%;
    background-size: cover !important;
  }
  .projectCard {
    flex-direction: column !important;
  }

  .imageCol {
    background-size: contain;
  }
}
@media only screen and (max-width: 768px) {
  .leftCol {
    filter: saturate(1) !important;
  }
}
</style>
 