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
        <i v-for="icon in filteredIconData" :key="icon.id" :class="icon.class" style="margin-right: 5px;">
        <div class="tool regText modalR">
          <p class="modalText">{{ icon.name }}</p>
          <i></i>
        </div>
        </i>
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
        <i v-for="icon in filteredIconData" :key="icon.id" :class="icon.class" style="margin-right: 5px;">
        <div class="tool regText modalR">
          <p class="modalText">{{ icon.name }}</p>
          <i></i>
        </div>
        </i>
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
    return {
      bg: null,
      card: null,
      iconss: [
        {
          id: 1,
          name: "Bootstrap",
          class: "devicon-bootstrap-plain colored icon",
          value: "A",
        },
        {
          id: 2,
          name: "Python",
          class: "devicon-python-plain colored icon",
          value: "B",
        },
        {
          id: 3,
          name: "NodeJS",
          class: "devicon-nodejs-plain colored icon",
          value: "C",
        },
        {
          id: 4,
          name: "Javascript",
          class: "devicon-javascript-plain colored icon",
          value: "D",
        },
        {
          id: 5,
          name: "Swift",
          class: "devicon-swift-plain colored icon",
          value: "E",
        },
        {
          id: 6,
          name: "VueJS",
          class: "devicon-vuejs-plain colored icon",
          value: "F",
        },
        {
          id: 7,
          name: "CSS3",
          class: "devicon-css3-plain colored icon",
          value: "G",
        },
        {
          id: 8,
          name: "HTML5",
          class: "devicon-html5-plain colored icon",
          value: "H",
        },
        {
          id: 9,
          name: "Android Dev",
          class: "devicon-android-plain colored icon",
          value: "I",
        },
        {
          id: 10,
          name: "Java",
          class: "devicon-java-plain colored icon",
          value: "J",
        },
        {
          id: 11,
          name: "Ruby",
          class: "devicon-ruby-plain colored icon",
          value: "K",
        },
        {
          id: 12,
          name: "Rails",
          class: "devicon-rails-plain colored icon",
          value: "L",
        },
        {
          id: 13,
          name: "MySQL",
          class: "devicon-mysql-plain colored icon",
          value: "M",
        },
        {
          id: 14,
          name: "C",
          class: "devicon-c-plain colored icon",
          value: "N",
        },
        {
          id: 15,
          name: "React",
          class: "devicon-react-plain colored icon",
          value: "O",
        },
        {
          id: 16,
          name: "Jenkins",
          class: "devicon-jenkins-plain colored icon",
          value: "P",
        },
        {
          id: 17,
          name: "AWS",
          class: "devicon-amazonwebservices-original colored icon",
          value: "Q",
        },
        {
          id: 18,
          name: "GCP",
          class: "devicon-googlecloud-plain colored icon",
          value: "R",
        },
        {
          id: 19,
          name: "Docker",
          class: "devicon-docker-plain colored icon",
          value: "S",
        },
        {
          id: 20 ,
          name: "Kubernetes",
          class: "devicon-kubernetes-plain colored icon",
          value: "T",
        },
        {
          id: 21 ,
          name: "Typescript",
          class: "devicon-typescript-plain colored icon",
          value: "U",
        },
         {
          id: 22 ,
          name: "Redis",
          class: "devicon-redis-plain colored icon",
          value: "V",
        },
      ],
    };
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
  computed: {
    filteredIconData() {
      if (this.icons.length === 0) {
        return [];
      } else {
        return this.iconss.filter(icon => this.icons.includes(icon.name));
      }
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
  color: rgb(7, 164, 255);
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