<template>
  <div class="background">
    <div class="highCenter row">
      <div class="halfTop" />
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
        <div class="highLightCard highCard2" id="card2">
          <div class="photoBox2" />
          <div class="infoBox">
            <p class="headingThree">MenloLab Inc.</p>
            <p class="regText" style="color: #737780">Front End Developer Intern</p>
            <p class="regText" style="color: #737780">Hover to read more</p>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
        <div class="highLightCard highCard1" id="card1">
          <div class="photoBox1" />
          <div class="infoBox">
            <p class="headingThree">Advance Micro Devices</p>
            <p class="regText" style="color: #737780">PCIE Design and Validation Intern</p>
            <p class="regText" style="color: #737780">Hover to read more</p>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
        <div class="highLightCard highCard3" id="card3">
          <div class="photoBox3" />
          <div class="infoBox">
            <p class="headingThree">NavText</p>
            <p class="regText" style="color: #737780">Second place overall at Hack Western 5</p>
            <p class="regText" style="color: #737780">Hover to read more</p>
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
    };
  },

  mounted() {
    window.addEventListener("scroll", this.getScroll);
    this.card1 = document.getElementById("card1");
    this.card2 = document.getElementById("card2");
    this.card3 = document.getElementById("card3");

    this.screenHeight = window.innerHeight;
  },
  methods: {
    getScroll(event) {
      this.scrollPosition = window.top.scrollY;
      this.screenHeight = window.innerHeight;

      if (this.scrollPosition > this.screenHeight * 0.65) {
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
  transition: background 0.5s ease-out;

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
}

.photoBox2 {
  height: 100%;
  width: 100%;
  background: #fe875d;
  background-color: rgb(201, 66, 66);
  background-image: url("../assets/images/MenloPic.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.4s ease-out;
  z-index: 800;
  position: absolute;
}

.highCard2:hover .photoBox2 {
  height: 40%;
}
.highCard2:hover .infoBox {
  opacity: 1;
}

.highCard2:hover .descriptionBox {
  visibility: initial;
  height: 100%;
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
  position: absolute;
  top: 40%;
  width: calc(100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: all 0.5s ease-out;
  opacity: 0;
}

.highCard1:hover .photoBox1 {
  height: 40%;
}
.highCard1:hover .infoBox {
  opacity: 1;
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

.highCard3:hover .photoBox3 {
  height: 40%;
}
.highCard3:hover .infoBox {
  opacity: 1;
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
</style>