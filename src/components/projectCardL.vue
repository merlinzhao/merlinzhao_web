<template>
  <div class="projectCard">
    <div
      class="col imageCol"
      :style="{
        backgroundColor: backgroundColor,
        backgroundImage:
          'url(' + require('../assets/images/' + imgURL + '') + ')',
      }"
    >
      <!-- <i class="fas fa-laptop" /> -->
    </div>
    <div class="col leftCardItems">
      <div class="textRow">
        <p class="headingThree">{{ projectTitle }}</p>
        <p v-if="subHeading != 'none'" class="subHeading">{{ subHeading }}</p>
        <p class="regText">{{ bodyText }}</p>
      </div>
      <div class="iconRow">
        <div class="col-9 leftCol">
          <div v-for="icon in iconData" :key="icon.name">
            <i :class="icon.class" style="margin-right: 5px">
              <div class="tool">
                <p class="toolText">{{ icon.name }}</p>
                <i></i>
              </div>
            </i>
          </div>
        </div>
        <div class="col-3 rightCol" style="font-size: 2em; cursor: pointer">
          <i
            @click="openUrl(gitLink)"
            v-if="gitLink != 'none'"
            class="fab fa-github githubLogo icon"
          >
            <div class="tool">
              <p class="toolText">View on GitHub</p>
              <i></i>
            </div>
          </i>
          <i
            @click="openUrl(externalLink[0])"
            v-if="externalLink[1]"
            class="fas fa-external-link-square-alt githubLogo icon"
          >
            <div class="tool">
              <p class="toolText">{{ externalLink[1] }}</p>
              <i></i>
            </div>
          </i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { skillIcons } from "../skills.js";

export default {

  props: {
    imgURL: {
      type: String,
      required: true,
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
  },
  computed: {
    iconData() {
      return skillIcons(this.icons);
    },
  },
  methods: {
    openUrl(url) {
      window.open(url, "_blank", "noopener");
    },
  },
};
</script>

<style scoped>
.projectCard {
  width: 100%;
  height: 560px;
  background: var(--bg-projectCard);
  display: flex;
  transition: background 0.5s ease-out;
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
  width: 100%;
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
  font-weight: 400;
}
.subHeading {
  line-height: 12pt;
  font-size: 11pt;
  color: var(--PC-subhead);
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
}
.projectCard:hover .githubLogo {
  color: var(--black);
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
 