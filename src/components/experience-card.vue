<template>
  <!-- Photo comes first in the DOM; .photoRight flips it to the right on desktop -->
  <div
    class="expCBg"
    :class="{ photoRight: !photoLeft && !stacked, stacked }"
    :id="thisId"
  >
    <div
      class="col-xs-12 col-sm-6 col-md-6 col-lg-6 photoCard"
      :class="{ 'photoCard-cover': photoCover, 'photoCard-inset': photoInset }"
      :style="photoStyle"
    >
      <!-- optional live content (e.g. a playable game) in place of the photo -->
      <slot name="photo" />
    </div>
    <div
      class="col-xs-12 col-sm-6 col-md-6 col-lg-6"
      :class="photoLeft ? 'textCardR' : 'textCardL'"
    >
      <p class="headingTwo">{{ projectTitle }}</p>
      <p v-if="subHeading != 'none'" class="subHeading regText">
        {{ subHeading }}<template v-if="photoLeft"><br />&nbsp;</template>
      </p>
      <p class="regText">{{ bodyText }}</p>
      <div class="iconRow">
        <i
          v-for="icon in iconData"
          :key="icon.name"
          :class="icon.class"
          style="margin-right: 5px"
        >
          <div class="tool">
            <p class="toolText">{{ icon.name }}</p>
            <i></i>
          </div>
        </i>
      </div>
      <p @click="openUrl(gitLink)" v-if="gitLink != 'none'" class="linkText">
        <i class="fab fa-github githubLogo" /> View on GitHub
      </p>
      <p @click="openUrl(externalLink[0])" v-if="externalLink[1]" class="linkText">
        <i :class="linkIcon" aria-hidden="true" /> {{ linkName }}
      </p>
    </div>
  </div>
</template>

<script>
import { skillIcons } from "../skills.js";

export default {
  props: {
    photoLeft: {
      type: Boolean,
      default: false,
    },
    imgURL: {
      type: String,
      default: "none",
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
    // Optional CSS gradient drawn behind the photo (on top of backgroundColor)
    backgroundGradient: {
      type: String,
      default: "",
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    thisId: {
      type: String,
      default: "NA",
    },
    // Skill names from skills.js, shown in this order
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
    // Pad the photo on the left and right (25px, 15px on phones); the image
    // is sized inside the padding while backgroundColor fills the whole card
    photoInset: {
      type: Boolean,
      default: false,
    },
    // full width: text on top, photo (or slot content) underneath
    stacked: {
      type: Boolean,
      default: false,
    },
    linkIcon: {
      type: String,
      default: "fa fa-desktop",
    },
  },
  computed: {
    iconData() {
      return skillIcons(this.icons);
    },
    photoStyle() {
      if (this.imgURL == "none") return { backgroundColor: this.backgroundColor };
      const photo = `url(${require("../assets/images/" + this.imgURL)})`;
      return {
        backgroundColor: this.backgroundColor,
        backgroundImage: this.backgroundGradient
          ? `${photo}, ${this.backgroundGradient}`
          : photo,
      };
    },
  },
  methods: {
    openUrl(url) {
      if (url.startsWith("/")) this.$router.push(url);
      else window.open(url);
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

.expCBg.photoRight {
  flex-direction: row-reverse;
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

.photoCard-inset {
  padding: 0 25px;
  background-origin: content-box;
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


/* STACKED: full-width card, text on top, photo/game below */
.expCBg.stacked {
  flex-direction: column-reverse;
  height: auto;
}
.expCBg.stacked > div {
  flex: none;
  width: 100%;
  max-width: 100%;
}
.stacked .textCardL {
  height: auto;
  padding: 0 0 25px 0;
}
.stacked .iconRow {
  height: 60px;
}
.stacked .photoCard {
  height: min(780px, calc(100vh - 120px));
  padding: 20px;
}

@media only screen and (max-width: 575px) {
  .photoCard-inset {
    padding: 0 15px;
  }
  .expCBg,
  .expCBg.photoRight {
    flex-direction: column;
    margin: 10px;
    height: auto;
  }
  .photoCard {
    height: 250px !important;
  }
  .stacked .photoCard {
    padding: 0;
  }
  .stacked .textCardL {
    height: auto;
    padding: 20px;
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