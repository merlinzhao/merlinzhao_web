<template>
  <div class="background">
    <div class="highCenter row">
      <div class="halfTop" />

      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
        <div class="highLightCard highCard1"></div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
        <div class="highLightCard highCard2">
          <div class="highLightTitle" style="color: white;">
            <p class="headingThree highHeading">Highlights</p>
            <p class="regText subHeading">Cool things from me 😊</p>
          </div>
          <div class="projectBox">
            <div class="projectExpand"></div>
          </div>
          <div class="gitBox"></div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cardPadding">
        <div class="highLightCard highCard3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  height: auto;
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
  height: 30%;
  width: 100vw;
  background: var(--bg-e4e4e4);
  transition: background 0.5s ease-out;
}

.highCenter {
  width: 100vw;
  height: 800px;
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
  height: 500px;
  background: var(--bg-projectCard);
  box-shadow: 8px 12px 12px #0000002d;
}
.highLightTitle {
  height: 120px;
  width: calc(100% - 100px);
  background: rgb(52, 96, 107);
  left: 0px;
  position: absolute;
  top: -3px;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
  box-shadow: 8px 12px 12px #0000002d;
}

/* _____________________________________________ */
/* |_________________PROEJCT BOX_______________| */
.projectBox {
  height: 240px;
  width: calc(100% - 24px);

  position: absolute;
  top: 140px;
  margin: 0 12px 0 12px;
}
.projectExpand {
  position: absolute;
  right: 0;
  height: 100%;
  width: 180px;
  background: #ccc;
  transition: all 0.6s ease-in-out;
  box-shadow: 8px 12px 12px #0000002d;
}
.projectExpand:hover {
  width: 100%;
}

/* _____________________________________________ */
/* |______________________GIT BOX_______________| */
.gitBox {
  height: 120px;
  width: 200px;
  background: #aaa;
  position: absolute;
  margin: 6px 10px 0 10px;
  top: 400px;
  transition: all 0.6s ease-in-out;
}

.gitBox:hover {
  width: calc(100% - 30px);
  margin: 0;
  height: 200px;
}

.highCard2 {
  animation: shiftCard2 2s ease-in-out;
}
@-webkit-keyframes shiftCard2 {
  0% {
    /* font-size: 5em; */
    transform: translateY(45%);
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
    transform: translateY(45%);
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
    transform: translateY(45%);
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
  transform: translateY(30%);
  animation: shiftCard1 3s ease-out;
}

@-webkit-keyframes shiftCard1 {
  0% {
    /* font-size: 5em; */
    transform: translateY(80%);
    opacity: 0;
  }
  30% {
    opacity: 0;
  }

  100% {
    transform: translateY(30%);
    opacity: 1;
  }
}
@-moz-keyframes shiftCard1 {
  0% {
    /* font-size: 5em; */
    transform: translateY(80%);
    opacity: 0;
  }
  30% {
    opacity: 0;
  }

  100% {
    transform: translateY(30%);
    opacity: 1;
  }
}
@keyframes shiftCard1 {
  0% {
    /* font-size: 5em; */
    transform: translateY(80%);
    opacity: 0;
  }
  30% {
    opacity: 0;
  }

  100% {
    transform: translateY(30%);
    opacity: 1;
  }
}
/* =========================================================*/
/* ====================HIGH CARD 3=======================*/
/* =========================================================*/
.highCard3 {
  transform: translateY(45%);
  animation: shiftCard3 3s ease-out;
}

@-webkit-keyframes shiftCard3 {
  0% {
    /* font-size: 5em; */
    transform: translateY(95%);
    opacity: 0;
  }
  30% {
    opacity: 0;
  }

  100% {
    transform: translateY(45%);
    opacity: 1;
  }
}
@-moz-keyframes shiftCard3 {
  0% {
    /* font-size: 5em; */
    transform: translateY(95%);
    opacity: 0;
  }
  30% {
    opacity: 0;
  }

  100% {
    transform: translateY(45%);
    opacity: 1;
  }
}
@keyframes shiftCard3 {
  0% {
    /* font-size: 5em; */
    transform: translateY(95%);
    opacity: 0;
  }
  30% {
    opacity: 0;
  }

  100% {
    transform: translateY(45%);
    opacity: 1;
  }
}
</style>