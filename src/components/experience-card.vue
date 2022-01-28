<template>
  <div class="expCBg" :id="`${thisId}`">
    <div
      v-if="photoLeft"
      class="col-xs-12 col-sm-6 col-md-6 col-lg-6 photoCard"
      :id="`photoLeft${thisId}`"
      :style="{
        backgroundColor: backgroundColor,
        backgroundImage:
          'url(' + require('../assets/images/' + imgURL + '') + ')',
      }"
    ></div>
    <div v-if="photoLeft" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 textCardR">
      <p class="headingTwo">{{ projectTitle }}</p>
      <p v-if="subHeading != 'none'" class="subHeading regText">{{ subHeading }}</br>&nbsp</p>
      <p class="regText">{{ bodyText }}</p>
      <div class="iconRow">
        <div v-for="number in icons" :key="number">
          <i
            v-if="number === 'A'"
            class="devicon-bootstrap-plain colored icon"
            style="margin-right: 5px; color: #8848b5"
          >
            <div class="tool regText modalR">
              <p class="modalText">Bootstrap</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'B'"
            class="devicon-python-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Python</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'C'"
            class="devicon-nodejs-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">NodeJS</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'D'"
            class="devicon-javascript-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Javascript</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'E'"
            class="devicon-swift-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Swift</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'F'"
            class="devicon-vuejs-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">VueJS</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'G'"
            class="devicon-css3-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">CSS3</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'H'"
            class="devicon-html5-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">HTML5</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'I'"
            class="devicon-android-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Android Dev</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'J'"
            class="devicon-java-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Java</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'K'"
            class="devicon-ruby-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Ruby</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'L'"
            class="devicon-rails-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Rails</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'M'"
            class="devicon-mysql-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">MySQL</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'N'"
            class="devicon-c-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">C</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'O'"
            class="devicon-react-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">React</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'Jenkins'"
            class="devicon-jenkins-plain icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Jenkins</p>
              <i></i>
            </div>
          </i>
        </div>
      </div>
      <p @click="openLink()" v-if="gitLink != 'none'" class="linkText">
        <i class="fab fa-github githubLogo" /> View on GitHub
      </p>
      <p @click="openLink()" v-if="externalLink[1]" class="linkText">
        <i class="fa fa-desktop" aria-hidden="true" /> {{ linkName }}
      </p>
    </div>
    <div v-if="!photoLeft" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 textCardL">
      <p class="headingTwo">{{ projectTitle }}</p>
      <p v-if="subHeading != 'none'" class="subHeading regText">{{ subHeading }}</p>
      <p class="regText">{{ bodyText }}</p>
      <div class="iconRow">
        <div v-for="number in icons" :key="number">
          <i
            v-if="number === 'A'"
            class="devicon-bootstrap-plain colored icon"
            style="margin-right: 5px; color: #8848b5"
          >
            <div class="tool regText modalR">
              <p class="modalText">Bootstrap</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'B'"
            class="devicon-python-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Python</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'C'"
            class="devicon-nodejs-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">NodeJS</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'D'"
            class="devicon-javascript-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Javascript</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'E'"
            class="devicon-swift-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Swift</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'F'"
            class="devicon-vuejs-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">VueJS</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'G'"
            class="devicon-css3-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">CSS3</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'H'"
            class="devicon-html5-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">HTML5</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'I'"
            class="devicon-android-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Android Dev</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'J'"
            class="devicon-java-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Java</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'K'"
            class="devicon-ruby-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Ruby</p>
              <i></i>
            </div>
          </i>

          <i
            v-if="number === 'L'"
            class="devicon-rails-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">Rails</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'M'"
            class="devicon-mysql-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">MySQL</p>
              <i></i>
            </div>
          </i>
          <i
            v-if="number === 'N'"
            class="devicon-c-plain colored icon"
            style="margin-right: 5px"
          >
            <div class="tool regText modalR">
              <p class="modalText">C</p>
              <i></i>
            </div>
          </i>
          
        </div>
      </div>
      <p @click="openLink()" v-if="gitLink != 'none'" class="linkText">
        <i class="fab fa-github githubLogo" /> View on GitHub
      </p>
      <p @click="openLink()" v-if="externalLink[1]" class="linkText">
        <i class="fa fa-desktop" aria-hidden="true" /> {{ linkName }}
      </p>
    </div>
    <div
      v-if="!photoLeft"
      class="col-xs-12 col-sm-6 col-md-6 col-lg-6 photoCard"
      :id="`photoRight${thisId}`"
      :style="{
        backgroundColor: backgroundColor,
        backgroundImage:
          'url(' + require('../assets/images/' + imgURL + '') + ')',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    photoLeft: {
      type: Boolean,
      default: false,
    },
    imgURL: {
      type: String,
      default: "kang.jpg",
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
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    thisId: {
      type: String,
      default: "NA",
    },
    icons: {
      type: Array,
      default: () => [],
    },
    linkName: {
      type: String,
      default: "Web",
    },
    photoCover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { bg: null, card: null };
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll);
    this.bg = document.getElementById(this.thisId);
    if (!this.photoLeft) {
      this.bg.classList.add("expCBg2");
    }
    if (this.photoCover && this.photoLeft) {
      let full_id = "photoLeft" + this.thisId;
      document.getElementById(full_id).classList.add("photoCard-cover");
    } else if (this.photoCover && !this.photoLeft) {
      let full_id = "photoRight" + this.thisId;
      document.getElementById(full_id).classList.add("photoCard-cover");
    }
  },
  methods: {
    getScroll() {
      //console.log(this.projectTitle, this.bg.getBoundingClientRect().y);
    },
    openLink() {
      if (this.externalLink[1]) window.open(this.externalLink[0]);
      else if (this.gitLink != "none") window.open(this.gitLink);
    },
  },
};
</script>

<style scoped>
.headingTwo {
  line-height: 45pt;
}
.regText {
  color: #ddd;
}

.subHeading {
  color: #aaa;
}

.linkText {
  color: rgb(31, 110, 255);
  line-height: 15pt;
  font-size: 13pt;
  font-weight: 400;
  width: 200px;
  transition: all 0.3s;
  height: 25px;
  margin: 0;
}
.linkText:hover {
  cursor: pointer;
  font-size: 16pt;
  color: rgb(0, 132, 255);
}
.expCBg {
  position: relative;
  width: 100%;
  height: 600px;
  margin: 100px 0 100px 0;
  display: flex;
  padding: 0;
  transition: background 0.5s ease-out;
}

.textCardL {
  color: var(--white);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  transition: filter 0.3s ease-out;
  justify-content: center;
  padding-right: 25px;
}

.textCardR {
  color: var(--white);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  transition: filter 0.3s ease-out;
  padding-left: 50px;
  justify-content: center;
}
.photoCard {
  width: 100%;
  height: 100%;
  background: red;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center center;
  align-items: center;
  background-size: contain;
}

.photoCard-cover {
  background-size: cover !important;
}

.iconRow {
  height: 100px;
  position: relative;
  justify-content: left;
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 17pt;
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
.icon .tool {
  min-width: 100px;
  top: 10px;
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
  padding: 5px;
  text-align: center;
  font-family: "Roboto";
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

@media only screen and (max-width: 575px) {
  .expCBg {
    flex-direction: column;
    margin: 10px;
    height: auto;
  }

  .expCBg2 {
    flex-direction: column-reverse !important;
  }
  .photoCard {
    height: 250px !important;
  }
  .textCardL {
    padding: 20px 20px 20px 20px;
    background: #333;
    height: 400px;
  }
  .textCardR {
    padding: 20px 20px 20px 20px;
    background: #333;
    height: 400px;
  }
  .subHeading {
    margin-bottom: 0px;
  }

  .linkText {
    line-height: 15pt;
    font-size: 11pt;
  }
}

@media only screen and (min-width: 576px) and (max-width: 767px) {
  .headingTwo {
    line-height: 32pt !important;
    font-size: 30pt !important;
    margin-bottom: 5px;
  }
  .subHeading {
    margin-bottom: 0px;
  }
  .expCBg {
    height: 500px;
    margin: 100px 0 100px 0;
  }
}
</style>