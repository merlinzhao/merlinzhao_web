<template>
  <div class="projectCard">
    <div class="imageRow">
      <i class="fas fa-laptop fa-10x" />
    </div>
    <div class="textRow">
      <p class="headingThree">{{projectTitle}}</p>
      <p class="regText">{{bodyText}}</p>
    </div>
    <div class="iconRow">
      <div class="col-9 leftCol" style="font-size: 2.5em;"></div>
      <div class="col-3 rightCol" style="font-size: 2.5em;">
        <i class="fab fa-github" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectTitle: {
      type: String,
      default: "Title Unavailable"
    },
    bodyText: {
      type: String,
      default:
        "Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description Unavailable Description"
    }
  }
};
</script>

<style scoped>
.projectCard {
  margin: 50px;
  width: 30%;
  height: 700px;
  background: white;
  border-radius: 10px;
  transition: box-shadow 0.5s ease-out;
  box-shadow: 0px 0px 50px rgba(128, 128, 128, 0.1);
}
.projectCard:hover {
  box-shadow: 0px 0px 50px rgba(128, 128, 128, 0.3);
}

.imageRow {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 250px;
}
.textRow {
  height: 350px;
  width: 100%;
  padding: 25px;
}
.iconRow {
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 25px;
}

.headingThree {
  line-height: 25pt;
  font-size: 25pt;
  color: #222;
  font-weight: 400;
}
.regText {
  line-height: 18pt;
  font-size: 16pt;
  color: #222;
  font-weight: 300;
}

.leftCol {
  background: blue;
  height: 100%;
}
.rightCol {
  padding: 0;
  display: flex;
  justify-content: flex-end;
  height: 100%;
}
</style>
 