<template>
  <div class="expCBg">
    <div
      v-if="photoLeft"
      class="col-6 photoCard"
      :style="{  backgroundColor: backgroundColor, backgroundImage: 'url(' + require('../assets/images/'+imgURL+'') + ')' }"
    ></div>
    <div v-if="photoLeft" class="col-6 textCardR">
      <p class="headingThree">{{projectTitle}}</p>
      <p v-if="subHeading!='none'" class="subHeading">{{subHeading}}</p>
      <p class="regText">{{bodyText}}</p>
    </div>
    <div v-if="!photoLeft" class="col-6 textCardL">
      <p class="headingThree">{{projectTitle}}</p>
      <p v-if="subHeading!='none'" class="subHeading">{{subHeading}}</p>
      <p class="regText">{{bodyText}}</p>
    </div>
    <div
      v-if="!photoLeft"
      class="col-6 photoCard"
      :style="{backgroundColor: backgroundColor, backgroundImage: 'url(' + require('../assets/images/'+imgURL+'') + ')' }"
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
      default: "This is a test subheading",
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
  },
  mounted() {},
  methods: {
    openLink() {
      if (this.externalLink[1]) window.open(this.externalLink[0]);
      else if (this.gitLink != "none") window.open(this.gitLink);
    },
  },
};
</script>

<style scoped>
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
  height: 600px;
  display: flex;
  flex-direction: column;
  filter: saturate(0);
  transition: filter 0.3s ease-out;
  justify-content: center;
  padding-right: 25px;
}

.textCardR {
  color: var(--white);
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  filter: saturate(0);
  transition: filter 0.3s ease-out;
  padding-left: 50px;
  justify-content: center;
}
.photoCard {
  width: 100%;
  height: 600px;
  background: red;
  padding: 0;
  background-repeat: no-repeat;
  background-position: center center;
  align-items: center;
  background-size: cover;
}
</style>