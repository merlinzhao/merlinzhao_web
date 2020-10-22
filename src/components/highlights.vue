<template>
  <div class="background">
    <div class="highCenter row">
      <div class="halfTop" />
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 cardPadding">
        <div
          class="highLightCard highCard2"
          id="card2"
          @click="scrollTo('AMDid')"
        >
          <!-- <div class="photoBox2" /> -->
          <div class="infoBox" id="infoBox2">
            <p class="headingFour">Highlight Experience</p>
            <p class="headingThree">Advanced Micro Devices</p>
            <p class="regText">PCIE Design and Validation Intern</p>
            <p class="regText">Hover to read more</p>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 cardPadding">
        <div
          class="highLightCard highCard1"
          id="card1"
          @click="scrollTo('Menloid')"
        >
          <!-- <div class="photoBox1" /> -->
          <div class="infoBox" id="infoBox1">
            <p class="headingFour">Highlight Experience</p>
            <p class="headingThree">Menlolab Inc.</p>
            <p class="regText">Front End Developer Intern</p>
            <p class="regText">Hover to read more</p>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 cardPadding">
        <div
          class="highLightCard highCard3"
          id="card3"
          @click="scrollTo('Navid')"
        >
          <!-- <div class="photoBox3" /> -->
          <div class="infoBox" id="infoBox3">
            <p class="headingFour">Highlight Project</p>
            <p class="headingThree">NavText</p>
            <p class="regText">Second place overall at Hack Western 5</p>
            <p class="regText">Hover to read more</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      screenHeight: 0,
      card1: null,
      card2: null,
      card3: null,
      infoBox1: null,
      infoBox2: null,
      infoBox3: null,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.getScroll);
    this.card1 = document.getElementById("card1");
    this.card2 = document.getElementById("card2");
    this.card3 = document.getElementById("card3");
    this.infoBox1 = document.getElementById("infoBox1");
    this.infoBox2 = document.getElementById("infoBox2");
    this.infoBox3 = document.getElementById("infoBox3");

    this.screenHeight = window.innerHeight;
  },
  methods: {
    getScroll(event) {
      this.scrollPosition = window.top.scrollY;
      this.screenHeight = window.innerHeight;

      let screenWidth = window.innerWidth;

      if (this.card1.getBoundingClientRect().y < this.screenHeight * 0.5) {
        this.infoBox1.style.opacity = "1";
        this.infoBox2.style.opacity = "1";
        this.infoBox3.style.opacity = "1";
      } else {
        this.infoBox1.style.opacity = "0";
        this.infoBox2.style.opacity = "0";
        this.infoBox3.style.opacity = "0";
      }
      if (this.scrollPosition > this.screenHeight * 0.65 && screenWidth > 767) {
        let move1 = (this.scrollPosition - this.screenHeight * 0.6) * -0.05;
        let move2 = (this.scrollPosition - this.screenHeight * 0.6) * -0.3;
        let move3 = (this.scrollPosition - this.screenHeight * 0.6) * -0.7;

        this.card1.style.transform = "translateY(" + String(move1) + "px)";
        this.card2.style.transform = "translateY(" + String(move2) + "px)";
        this.card3.style.transform = "translateY(" + String(move3) + "px)";
      } else {
        this.card1.style.transform = "translateY(0px)";
        this.card2.style.transform = "translateY(0px)";
        this.card3.style.transform = "translateY(0px)";
      }
    },
    scrollTo(event_id) {
      document.getElementById(event_id).scrollIntoView({ behavior: "smooth" });
      console.log(document.getElementById(event_id));
    },
  },
};
</script>

<style scoped>
.background {
  height: 550px;
  min-height: 500px;
  width: 100%;
  margin: 0;
  background: var(--bg-eee);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
  transition: background 0.3s ease-out;

  /* 
  -webkit-animation: introGradientTwo 3s ease-in-out;
  -moz-animation: introGradientTwo 3s ease-in-out;
  animation: shiftTitle 3s ease-in-out; */
}
.halfTop {
  position: absolute;
  margin: 0;
  height: 20%;
  width: 100%;
  background: var(--bg-e4e4e4);
  transition: background 0.5s ease-out;
}

.highCenter {
  width: 100vw;
  height: 100%;
  max-width: 1240px;
  font-size: 12em;
  margin: 0;

  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
}

.cardPadding {
  padding: 10px 15px 0px 15px;
  /* width: 33% !important; */
  /* min-width: 250px !important; */
  /* max-width: 33%; */
}

.FOCUS {
  font-size: 80px;
  line-height: 60px;
  font-family: "Roboto";
  font-weight: 700;
  width: 90%;
  padding: 15px 0 0 10px;
}
.FOCUStext {
  font-size: 40%;
  line-height: 50%;
}

.highHeading {
  margin: 0 0 0 40px;
  width: 100%;
  text-align: left;
}
.subHeading {
  margin: 0 0 0 40px;
  width: 100%;
  text-align: left;
}

.highLightCard {
  z-index: 999;
  height: 560px;
  background: var(--bg-projectCard);
  box-shadow: 8px 12px 12px #0000002d;
}

/*_________________________________________________________________________*/
/*_________________________DESCRIPTION BOX_________________________________*/

/* =========================================================*/
/* ====================HIGH CARD 2 =========================*/
/* =========================================================*/
.highCard2 {
  animation: shiftCard2 1s ease-out;
  color: var(--black);
  background-image: url("../assets/images/amd-white.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(201, 66, 66);
}

.highCard2:hover {
  cursor: pointer;
}

.photoBox2 {
  height: 250px;
  width: 100%;
  background: #fe875d;
  background-color: rgb(201, 66, 66);
  background-image: url("../assets/images/amd-white.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.4s ease-out;
  z-index: 800;
}

@-webkit-keyframes shiftCard2 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@-moz-keyframes shiftCard2 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes shiftCard2 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

/* =========================================================*/
/* ====================HIGH CARD 1=======================*/
/* =========================================================*/

.highCard1 {
  animation: shiftCard1 1.4s ease-out;

  color: var(--black);

  background-image: url("../assets/images/MenloPic.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.highCard1:hover {
  cursor: pointer;
}
.photoBox1 {
  height: 100%;
  width: 100%;
  background-color: rgb(201, 66, 66);
  background-image: url("../assets/images/amd-white.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: all 0.4s ease-out;
  z-index: 800;
  position: absolute;
}
.infoBox {
  top: 40%;
  height: 100%;
  width: calc(100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 1s ease-out;
  opacity: 0;
  background-color: var(--blur-one);
  backdrop-filter: blur(10px);
  text-align: center;
}
.infoBox:hover {
  background-color: var(--blur-one-hover);
}

@-webkit-keyframes shiftCard1 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@-moz-keyframes shiftCard1 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes shiftCard1 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
/* =========================================================*/
/* ====================HIGH CARD 3=======================*/
/* =========================================================*/
.highCard3 {
  animation: shiftCard3 1.9s ease-out;

  color: var(--black);
  background-image: url("../assets/images/NavTextPic.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #9ab8c3;
}

.highCard3:hover {
  cursor: pointer;
}

.photoBox3 {
  height: 100%;
  width: 100%;
  background-image: url("../assets/images/NavTextPic.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-color: #9ab8c3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transition: all 0.4s ease-out;
  z-index: 800;
  position: absolute;
}

@-webkit-keyframes shiftCard3 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@-moz-keyframes shiftCard3 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes shiftCard3 {
  0% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  20% {
    /* font-size: 5em; */
    transform: translateY(40%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@media only screen and (max-width: 768px) {
  .highCard3 {
    display: none;
  }
  .highLightCard {
    height: 450px;
  }
}

@media only screen and (max-width: 992px) {
  .highLightCard {
    height: 450px;
  }
  .cardPadding {
    padding: 10px 5px 0px 5px;
    /* width: 33% !important; */
    /* min-width: 250px !important; */
    /* max-width: 33%; */
  }
}
</style>