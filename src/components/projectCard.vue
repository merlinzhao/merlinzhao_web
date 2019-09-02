<template>
  <div class="projectCard">
    <div
      class="imageRow"
      :style="{ backgroundImage: 'url(' + require('../assets/images/'+imgURL+'') + ')' }"
    >
      <!-- <i class="fas fa-laptop" /> -->
    </div>
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
            style="margin-right: 5px;"
          />
          <i v-if="number === 'B'" class="devicon-python-plain colored" style="margin-right: 5px;" />
          <i v-if="number === 'C'" class="devicon-nodejs-plain colored" style="margin-right: 5px;" />
          <i
            v-if="number === 'D'"
            class="devicon-javascript-plain colored"
            style="margin-right: 5px;"
          />
          <i v-if="number === 'E'" class="devicon-swift-plain colored" style="margin-right: 5px;" />
          <i v-if="number === 'F'" class="devicon-vuejs-plain colored" style="margin-right: 5px;" />
          <i v-if="number === 'G'" class="devicon-css3-plain colored" style="margin-right: 5px;" />
          <i v-if="number === 'H'" class="devicon-html5-plain colored" style="margin-right: 5px;" />
          <i
            v-if="number === 'I'"
            class="devicon-android-plain colored"
            style="margin-right: 5px;"
          />
        </div>
      </div>
      <div class="col-3 rightCol" style="font-size: 2.5em;">
        <i class="fab fa-github githubLogo" />
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
    imgURL: {
      type: String,
      default: "kang.jpg"
    },
    icons: {
      type: Array,
      default: []
    },
    projectTitle: {
      type: String,
      default: "Title Unavailable"
    },
    bodyText: {
      type: String,
      default: "Description Unavailable"
    }
  }
};
</script>

<style scoped>
.projectCard {
  width: 100%;
  height: 550px;
  background: white;
  border-radius: 7px;
  transition: box-shadow 0.5s ease-out;
  box-shadow: 5px 5px 20px rgba(128, 128, 128, 0.2);
  font-family: "Lato", sans-serif;
}
.projectCard:hover {
  box-shadow: 8px 8px 25px rgba(128, 128, 128, 0.3);
}

.imageRow {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 220px;
}
.textRow {
  height: 270px;
  width: 100%;
  padding: 25px;
}
.iconRow {
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0px 25px 15px 25px;
}

.headingThree {
  line-height: 25pt;
  font-size: 25pt;
  color: #222;
  font-weight: 400;
}
.regText {
  line-height: 14pt;
  font-size: 12pt;
  color: #222;
  font-weight: 300;
}

.leftCol {
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  height: 100%;
  filter: saturate(0);
  transition: filter 0.3s ease-out;
  align-items: center;
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
  color: #aaa;
}
.projectCard:hover .githubLogo {
  color: #222;
}
</style>
 