<template>
  <div class="background">
    <!-- <div class="absolute" /> -->
    <div class="aboutCenter">
      <p class="headingTwo headlineText">
        Software Developer
        <br />Graphic designer
        <br />Chipotle lover
      </p>
      <p
        class="headingThree"
        style="color: var(--mer-lin); margin: 3% 0% 2% 0%; text-align: center;"
      >Merlin (noun) - Mer•lin | \ ˈmər-lən \</p>
      <!--eslint-disable-next-line/> -->
      <p
        class="regText"
        style="color:#6e737d; text-align: center;"
      >Unfortunately, I do not have magical powers and I am unable to cast spells. Sorry for the inconvenience.</p>
      <div
        class="portrait"
        :style="{ backgroundImage: 'url('+require('../assets/images/merlin.jpg')+')'}"
      />
      <div
        class="thatsme"
        :style="{ backgroundImage: 'url('+require('../assets/images/thatsme.png')+')'}"
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
            <i class="fas fa-hourglass-half"></i> 4th year undergrad
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
            <i class="devicon-swift-plain colored icon" style="margin-right: 10px;">
              <div class="tool regTextModal modalR">
                <p class="modalText">Swift</p>
                <i></i>
              </div>
            </i>
            <i class="devicon-vuejs-plain colored icon" style="margin-right: 10px;">
              <div class="tool regTextModal modalR">
                <p class="modalText">Vue.js</p>
                <i></i>
              </div>
            </i>
            <i class="devicon-react-plain colored icon" style="margin-right: 10px;">
              <div class="tool regTextModal modalR">
                <p class="modalText">React.js</p>
                <i></i>
              </div>
            </i>
            <i class="devicon-html5-plain colored icon" style="margin-right: 10px;">
              <div class="tool regTextModal modalR">
                <p class="modalText">HTML5</p>
                <i></i>
              </div>
            </i>
            <i class="devicon-css3-plain colored icon" style="margin-right: 10px;">
              <div class="tool regTextModal modalR">
                <p class="modalText">CSS3</p>
                <i></i>
              </div>
            </i>
            <i class="devicon-bootstrap-plain colored icon" style=" color: #D959FF;">
              <div class="tool regTextModal modalR">
                <p class="modalText">Bootstrap</p>
                <i></i>
              </div>
            </i>
          </div>
          <div class="devCol">
            <i class="devicon-python-plain colored icon" style="margin-right: 10px;" />
            <i class="devicon-javascript-plain colored icon" style="margin-right: 10px;" />
            <i class="devicon-c-plain colored icon" style="margin-right: 10px;" />
            <i class="devicon-cplusplus-plain colored icon" style="margin-right: 10px;" />
            <i class="devicon-java-plain colored icon" />
          </div>
          <div class="devCol">
            <i class="devicon-mongodb-plain colored icon" style="margin-right: 10px;" />
            <i class="devicon-docker-plain colored icon" style="margin-right: 10px;" />
            <i class="devicon-git-plain colored icon" />
          </div>
          <div>
            <i class="devicon-photoshop-plain colored icon" style="margin-right: 10px;" />
            <i class="devicon-illustrator-plain colored icon" />
          </div>
        </div>
        <p
          class="headingFour"
          style="margin: 3% 0% 2% 0%; width: 100%; text-align: center;"
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
      <div style="display: flex; flex-direction: column;" class="summaryRow">
        <p
          class="headingFour"
          style="margin: 3% 0% 1% 0%; width: 100%; text-align: center;"
        >Get in touch</p>
        <a
          href="mailto:zhaom21@mcmaster.ca"
          class="regText"
          style=" width: 100%; text-align: center; color: #737780;"
        >
          <i class="fas fa-envelope" style="margin-right: 8px;"></i>zhaom21@mcmaster.ca
        </a>

        <a
          href="tel:647-993-6121"
          class="regText"
          style=" width: 100%; text-align: center; color: #737780;"
        >
          <i class="fas fa-phone" style="margin-right: 8px;"></i>(647) 993 6121
        </a>
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
  background: var(--bg-eee);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
  transition: background 0.5s ease-out;
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
  color: var(--summary-row);
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
  margin: 3% 0% 0% 0%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.thatsme {
  height: 70px;
  width: 120px;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  left: 170px;
  bottom: 280px;
  z-index: 20;
  filter: invert(var(--thatsme));
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
  font-size: 13pt;
  font-weight: 400;
}

.regTextModal {
  line-height: 18pt;
  font-size: 13pt;
  color: white;
  font-weight: 200;
}

.devCol {
  margin-right: 30px;
}
/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODA */
/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODA */
/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODA */
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