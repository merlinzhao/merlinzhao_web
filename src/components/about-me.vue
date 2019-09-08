<template>
  <div class="background">
    <div class="absolute" />
    <div class="aboutCenter">
      <p
        class="headingTwo"
        style="background: -webkit-linear-gradient(-45deg, #b032ff 0%, #d97aff 29%, #54c8ff 64%, #00ffd8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;"
      >
        Front end developer
        <br />Graphic designer
        <br />Chipotle lover
      </p>
      <p
        class="headingThree"
        style="color: white; margin: 3% 0% 2% 0%;"
      >Merlin (noun) - Mer·​lin | \ ˈmər-lən \</p>
      <p
        class="regText"
        style="color:#777"
      >Unfortunately, I do not have magical powers and I am unable to cast spells. Sorry for the inconvenience.</p>
      <div
        class="portrait"
        :style="{ backgroundImage: 'url(' + require('../assets/images/kang.jpg') + ')' }"
      />
      <div
        class="row"
        style="width: 100%; max-width: 1000px; display: flex; justify-content: center;
  align-items: center; margin-bottom: 25px; "
      >
        <div class="col-4">
          <p
            class="headingFour"
            style="color: #aaa; margin: 3% 0% 2% 0%; width: 100%; text-align: center;"
          >
            <i class="fas fa-graduation-cap" /> McMaster University
          </p>
        </div>
        <div class="col-4">
          <p
            class="headingFour"
            style="color: #aaa; margin: 3% 0% 2% 0%;width: 100%; text-align: center;"
          >
            <i class="fas fa-code"></i> Computer Engineering
          </p>
        </div>
        <div class="col-4">
          <p
            class="headingFour"
            style="color: #aaa; margin: 3% 0% 2% 0%;width: 100%; text-align: center;"
          >
            <i class="fas fa-hourglass-half"></i> Junior (Level 3)
          </p>
        </div>
      </div>
      <p class="regText" style="color: #777 ;  max-width: 850px;">
        Red Velvet (Hangul: 레드벨벳) is a South Korean girl group formed by SM Entertainment. The group debuted on August 1, 2014, with the digital single "Happiness" and four group members: Irene, Seulgi, Wendy, and Joy. In March 2015, Yeri was added into the group.
        Since their debut, Red Velvet has released two studio albums, one reissue album, and nine extended plays in Korean, with ten of them topping South Korea's Gaon Album Chart. Their singles "Happiness", "Ice Cream Cake", "Dumb Dumb", "Russian Roulette", "Rookie", "Peek-a-Boo", and "Bad Boy" have all charted in the top five on Gaon Digital Chart, while their singles "Red Flavor" and "Power Up" topped the chart upon release.
      </p>
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
  background: #222;
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
}
.absolute {
  height: 300px;
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, #131313, #222);
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
  background: red;
  height: 250px;
  width: 250px;
  border-radius: 125px;
  margin: 3% 0% 4% 0%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
}

.headlines {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.headingOne {
  line-height: 65pt;
  font-size: 65pt;
  font-weight: bolder;
}
.headingTwo {
  line-height: 55pt;
  font-size: 45pt;
  font-weight: 600;
}
.headingThree {
  line-height: 32pt;
  font-size: 25pt;
  font-weight: 400;
}
.headingFour {
  line-height: 25pt;
  font-size: 18pt;
  font-weight: 400;
}
.regText {
  line-height: 18pt;
  font-size: 12pt;
  font-weight: 400;
}
</style>