<template>
  <div class="projectCard" :ref="projectTitle">
    <div
      class="imageRow"
      :style="{  backgroundSize: sizeBackground, backgroundColor: backgroundColor, backgroundImage: 'url(' + require('../assets/images/'+imgURL+'') + ')' }"
    >
      <!-- <i class="fas fa-laptop" /> -->
    </div>
    <div class="textRow">
      <p class="headingThree">{{projectTitle}}</p>
      <p v-if="subHeading!='none'" class="subHeading">{{subHeading}}</p>
      <p class="regText">{{bodyText}}</p>
    </div>
    <div class="iconRow">
      <div class="col-9 leftCol">
        <div v-for="number in icons" :key="number">
          <i
            v-if="number === 'A'"
            class="devicon-bootstrap-plain colored icon"
            style="margin-right: 5px; color: #8848b5;"
          >
            <div class="tool regText modalR">
              <p class="modalText">Bootstrap</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'B'"
            class="devicon-python-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">Python</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'C'"
            class="devicon-nodejs-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">NodeJS</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'D'"
            class="devicon-javascript-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">Javascript</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'E'"
            class="devicon-swift-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">Swift</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'F'"
            class="devicon-vuejs-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">VueJS</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'G'"
            class="devicon-css3-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">CSS3</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'H'"
            class="devicon-html5-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">HTML5</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'I'"
            class="devicon-android-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">Android Dev</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'J'"
            class="devicon-java-plain colored icon"
            style="margin-right: 5px;"
          >
            <div class="tool regText modalR">
              <p class="modalText">Java</p>
              <i></i>
            </div>
          </i>
        </div>
      </div>
      <div class="col-3 rightCol" style="font-size: 2em; cursor:pointer; ">
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
        <i @click="openLink();" v-if="gitLink!='none'" class="fab fa-github githubLogo icon">
          <div class="tool regText modalR">
            <p class="modalText">View on GitHub</p>
            <i></i>
          </div>
        </i>
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
      default: false,
    },
    imgURL: {
      type: String,
      default: "kang.jpg",
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    icons: {
      type: Array,
      default: () => [],
    },
    projectTitle: {
      type: String,
      default: "Title Unavailable",
    },
    subHeading: {
      type: String,
      default: "none",
    },
    bodyText: {
      type: String,
      default: "Description Unavailable",
    },
    gitLink: {
      type: String,
      default: "none",
    },
    externalLink: {
      type: Array,
      default: () => [],
    },
    sizeBackground: {
      type: String,
      default: "contain",
    },
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
    },
  },
};
</script>

<style scoped>
.projectCard {
  width: 100%;
  height: 560px;
  background: var(--bg-projectCard);
  transition: background 0.5s ease-out;
  font-family: "Lato", sans-serif;
}

.imageRow {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 220px;
  background-repeat: no-repeat;
  background-position: center center;
  transition: filter 0.3s ease-out;
}

.textRow {
  height: 280px;
  width: 100%;
  padding: 25px;
  filter: brightness(1);
  opacity: 0.6;
  transition: opacity 0.3s ease-out, filter 0.3s ease-out;
  overflow-y: auto;
  overflow-x: hidden;
}

.projectCard:hover .textRow {
  opacity: 1;
}
.iconRow {
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  width: calc(100% - 10px);
  display: flex;
  flex-direction: row;
  padding: 0px 25px 15px 25px;
}

.headingThree {
  line-height: 25pt;
  font-size: 25pt;
  color: var(--black);
  font-weight: 400;
  margin-bottom: 5px;
}
.regText {
  line-height: 18pt;
  font-size: 12pt;
  color: var(--black);
  font-weight: 200;
}

.subHeading {
  line-height: 12pt;
  font-size: 11pt;
  color: var(--PC-subhead);
  margin-bottom: 10px;
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
  color: var(--gitHub-logo);
  margin-left: 10px;
}
.projectCard:hover .githubLogo {
  color: var(--black);
}

.icon .tool {
  min-width: 100px;
  top: -20px;
  transform: translate(calc(-50% + 10px), -62%);
  color: #ffffff;
  background-color: #777;
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

/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL */
/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL */
.modalR {
  visibility: visible;
}

.modalText {
  margin: 0px;
  overflow: hidden;
  white-space: nowrap;
}

@media (hover: hover) and (pointer: fine) {
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
    background-color: #777;
    box-shadow: 0 1px 8px transparent;
  }
}
@media only screen and (max-width: 768px) {
  .leftCol {
    filter: saturate(1) !important;
  }
}

@media (prefers-color-scheme: dark) {
  .projectCard {
    background: #333;
  }
  .headingThree {
    color: white;
  }
  .regText {
    color: white;
  }
  .textRow {
    opacity: 1;
    filter: brightness(0.7);
  }
  .projectCard:hover .textRow {
    filter: brightness(1);
  }
  .subHeading {
    color: #aaa;
  }
  .githubLogo {
    transition: color 0.3s ease-out;
    color: #aaa;
  }
  .projectCard:hover .githubLogo {
    color: white;
  }
}
</style>
 