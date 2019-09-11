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
        <p class="regText">{{bodyText}}</p>
      </div>
      <div class="iconRow">
        <div class="col-9 leftCol">
          <div v-for="number in icons" :key="number">
            <i
              v-if="number === 'A'"
              class="devicon-bootstrap-plain colored"
              style="margin-right: 5px; color: #D959FF;"
            />
            <i
              v-if="number === 'B'"
              class="devicon-python-plain colored"
              style="margin-right: 5px;"
            />
            <i
              v-if="number === 'C'"
              class="devicon-swift-plain colored"
              style="margin-right: 5px;"
            />
            <i
              v-if="number === 'D'"
              class="devicon-javascript-plain colored"
              style="margin-right: 5px;"
            />
            <i
              v-if="number === 'E'"
              class="devicon-nodejs-plain colored"
              style="margin-right: 5px;"
            />
            <i
              v-if="number === 'F'"
              class="devicon-vuejs-plain colored"
              style="margin-right: 5px;"
            />
            <i v-if="number === 'G'" class="devicon-css3-plain colored" style="margin-right: 5px;" />
            <i
              v-if="number === 'H'"
              class="devicon-html5-plain colored"
              style="margin-right: 5px;"
            />
            <i
              v-if="number === 'I'"
              class="devicon-android-plain colored"
              style="margin-right: 5px;"
            />
          </div>
        </div>
        <div class="col-3 rightCol" style="font-size: 2em; cursor:pointer; ">
          <i v-if="gitLink!='none'" class="fab fa-github githubLogo" />
          <i v-if="externalLink!='none'" class="fas fa-external-link-square-alt githubLogo"></i>
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
    bodyText: {
      type: String,
      default: "Description Unavailable"
    },
    gitLink: {
      type: String,
      default: "none"
    },
    externalLink: {
      type: String,
      default: "none"
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
  }
};
</script>

<style scoped>
.projectCard {
  width: 100%;
  height: 550px;
  background: #333;
  display: flex;
}

.imageCol {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: saturate(0.3);
  transition: filter 0.3s ease-out;
}
.projectCard:hover .imageCol {
  filter: saturate(1);
}
.textRow {
  height: 270px;
  width: 100%;
  padding: 25px;
  filter: brightness(0.7);
  transition: filter 0.3s ease-out;
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
}
.regText {
  line-height: 18pt;
  font-size: 12pt;
  color: white;
  font-weight: 400;
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

@media only screen and (max-width: 833px) {
  .imageCol {
    max-height: 220px;
  }
  .projectCard {
    flex-direction: column !important;
  }

  .imageCol {
    background-size: contain;
  }
}
</style>
 