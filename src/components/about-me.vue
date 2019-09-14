<template>
  <div class="background">
    <!-- <div class="absolute" /> -->
    <div class="aboutCenter">
      <p class="headingTwo headlineText">
        Front end developer
        <br />Graphic designer
        <br />Chipotle lover
      </p>
      <p
        class="headingThree"
        style="color: white; margin: 3% 0% 2% 0%; text-align: center;"
      >Merlin (noun) - Mer·​lin | \ ˈmər-lən \</p>
      <p
        class="regText"
        style="color:#6e737d; text-align: center;"
      >Unfortunately, I do not have magical powers and I am unable to cast spells. Sorry for the inconvenience.</p>
      <div
        class="portrait"
        :style="{ backgroundImage: 'url('+require('../assets/images/merlin.jpg')+')'}"
      />
      <div class="row summaryRow">
        <div class="col">
          <p class="headingFour Mac" style="margin: 3% 0% 2% 0%; width: 100%; text-align: left;">
            <i class="fas fa-graduation-cap" /> McMaster University
          </p>
        </div>
        <div class="col">
          <p class="headingFour" style=" margin: 3% 0% 2% 0%; width: 100%; text-align: center;">
            <i class="fas fa-code"></i> Computer Engineering
          </p>
        </div>
        <div class="col">
          <p class="headingFour Year" style=" margin: 3% 0% 2% 0%; width: 100%; text-align: right;">
            <i class="fas fa-hourglass-half"></i> Junior (Level 3)
          </p>
        </div>
      </div>
      <p
        class="regText"
        style="color: #737780 ;  max-width: 850px;"
      >Hey there! My name is Merlin Zhao. I am currently a third year Computer Engineering student at McMaster University. Im originally from New York, New York but (for now), I am happily settled in Canada. Ive had a long passion for technology, especially how it can be utilized to enhance the everyday lives of people. I cant wait to be a part of the technological advances of the future. I also hope you are enjoying the site!</p>
      <div class="row summaryRow">
        <p
          class="headingFour"
          style=" margin: 3% 0% 2% 0%; width: 100%; text-align: center;"
        >What do I know?</p>
        <div
          class="devIcons"
          style="margin-bottom: 20px; font-size:16pt; align-items: center; justify-content:center; display: flex; flex-direction: row; width: 100%; "
        >
          <div class="devCol">
            <i class="devicon-swift-plain colored" style="margin-right: 10px;" />
            <i class="devicon-vuejs-plain colored" style="margin-right: 10px;" />
            <i class="devicon-react-plain colored" style="margin-right: 10px;" />
            <i class="devicon-html5-plain colored" style="margin-right: 10px;" />
            <i class="devicon-css3-plain colored" style="margin-right: 10px;" />
            <i class="devicon-bootstrap-plain colored" style=" color: #D959FF;" />
          </div>
          <div class="devCol">
            <i class="devicon-python-plain colored" style="margin-right: 10px;" />
            <i class="devicon-javascript-plain colored" style="margin-right: 10px;" />
            <i class="devicon-c-plain colored" style="margin-right: 10px;" />
            <i class="devicon-cplusplus-plain colored" style="margin-right: 10px;" />
            <i class="devicon-java-plain colored" />
          </div>
          <div class="devCol">
            <i class="devicon-mongodb-plain colored" style="margin-right: 10px;" />
            <i class="devicon-docker-plain colored" style="margin-right: 10px;" />
            <i class="devicon-git-plain colored" />
          </div>
          <div>
            <i class="devicon-photoshop-plain colored" style="margin-right: 10px;" />
            <i class="devicon-illustrator-plain colored" />
          </div>
        </div>
        <p
          class="headingFour"
          style=" margin: 3% 0% 2% 0%; width: 100%; text-align: center;"
        >Chill Times</p>
        <div class="row" style="font-size:16pt; align-items: center, justify-content: center;">
          <i class="fas fa-dumbbell" style="margin-right: 15px;"></i>
          <i class="fas fa-baseball-ball" style="margin-right: 15px;"></i>
          <i class="fas fa-code" style="margin-right: 15px;"></i>
          <i class="fas fa-camera" style="margin-right: 15px;"></i>
          <i class="fas fa-headphones-alt" style="margin-right: 15px;"></i>
          <i class="fas fa-plane" style="margin-right: 15px;"></i>
          <i class="fas fa-hands-helping"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  height: auto;
  min-height: 500px;
  width: 100%;
  background: #181818;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
}

.headlineText {
  background: -webkit-linear-gradient(
    -45deg,
    #b032ff 0%,
    #d97aff 29%,
    #54c8ff 64%,
    #00ffd8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.summaryRow {
  width: 100%;
  max-width: 880px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  color: #bbb;
}
.aboutCenter {
  width: 95%;
  max-width: 1250px;
  height: 100%;
  padding: 10% 0% 10% 0%;
  background: transparent;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;

  z-index: 1;
}
.portrait {
  background: #333;
  height: 250px;
  width: 250px;
  border-radius: 125px;
  margin: 3% 0% 4% 0%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.headingOne {
  line-height: 65pt;
  font-size: 65pt;
  font-weight: bolder;
}
.headingTwo {
  line-height: 55pt;
  font-size: 45pt;
  font-weight: 500;
}
.headingThree {
  line-height: 30pt;
  font-size: 25pt;
  font-weight: 400;
}
.headingFour {
  line-height: 23pt;
  font-size: 16pt;
  font-weight: 400;
}
.regText {
  line-height: 18pt;
  font-size: 12pt;
  font-weight: 400;
}

.devCol {
  margin-right: 30px;
}

/* ======================================================================== */
/* ================ 555px 555px 555px 555px 555px 555px =================== */
/* ======================================================================== */

@media only screen and (max-width: 555px) {
  .summaryRow {
    display: flex;
    flex-direction: column;
  }

  .headingTwo {
    line-height: 30pt;
    font-size: 26pt;
    font-weight: 500;
  }
  .headingThree {
    line-height: 24pt;
    font-size: 19pt;
    font-weight: 400;
  }
  .portrait {
    height: 180px;
    width: 180px;
  }
  .devIcons {
    flex-direction: column !important;
  }

  .devCol {
    margin-right: 0px;
  }
}

@media only screen and (max-width: 833px) {
  .Mac {
    text-align: center !important;
  }
  .Year {
    text-align: center !important;
  }
}
</style>