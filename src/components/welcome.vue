<template>
  <div class="background">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <div class="row nameRow">
      <div class="col-11 leftCol">
        <p class="headingThree" style="opacity: 0.9;">{{greeting}}!</p>
        <p class="headingOne">I'm Merlin.</p>
        <div style="height: 5%; width: 100%;" />
        <p class="headingThree" style="opacity: 0.9;">software developer</p>
        <p class="headingThree" style="opacity: 0.9;">graphic designer</p>
        <p class="headingThree" style="opacity: 0.9;">chipotle lover</p>
        <p class="headingThree wiz" style="opacity: 0.9;">unfortunately, not a real wizard</p>
        <div style="height: 7%; width: 100%;" />
        <button class="projectBtn">View my Projects</button>
      </div>
      <div class="col-1 rightCol"></div>
    </div>
    <div class="row externalRow">
      <button class="btn2" style="font-size: 2.2em;">
        <i class="fas fa-file-code"></i>
      </button>
      <button class="btn2" style="font-size: 2.2em;">
        <i class="fas fa-file-alt"></i>
      </button>
      <button class="btn2" style="font-size: 2.2em;">
        <i class="fas fa-paper-plane"></i>
      </button>
      <div
        style="font-size: 3.2em; font-weight: 200; color:white; height: 50px ;margin: -15px 35px 0px 25px;"
      >|</div>
      <button
        class="btn2"
        onclick="window.open('https://www.linkedin.com/in/merlinzhao/')"
        style="font-size: 2.2em;"
      >
        <i class="fab fa-linkedin"></i>
      </button>
      <button
        class="btn2"
        onclick="window.open('http://www.github.com/merlinzhao')"
        style="font-size: 2.2em;"
      >
        <i class="fab fa-github"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { setTimeout, setInterval } from "timers";
export default {
  data() {
    return {
      currentTime: "",
      selectFas: "",
      greeting: "여보세요",
      greetingArr: [
        "여보세요",
        "hello",
        "hola",
        "こんにちは",
        "bonjour",
        "你好"
      ],
      greetingIndex: 0,

      testNum: 0
    };
  },
  mounted() {
    this.currentTime = new Date();
    setInterval(() => {
      if (this.greetingIndex < 5) {
        this.greetingIndex++;
      } else {
        this.greetingIndex = 0;
      }
      this.greeting = this.greetingArr[this.greetingIndex];
    }, 800);
  }
};
</script>


<style scoped>
.background {
  height: 100vh;
  width: 100vw;
  min-height: 600px;
  min-width: 800px;
  background: linear-gradient(
    0deg,
    rgb(157, 26, 250) 0%,
    rgb(5, 132, 216) 100%
  );
}
.nameRow {
  height: 85%;
  width: 80%;
  max-width: 1200px;
  margin: auto;
}
.externalRow {
  height: 15%;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  padding: 15px;
}
.leftCol {
  height: 100%;
  line-height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: left;
}
.headingOne {
  line-height: 65pt;
  font-size: 65pt;
  color: white;
  font-weight: 700;
}
.headingTwo {
  line-height: 50pt;
  font-size: 45pt;
  color: white;
  font-weight: 400;
}
.headingThree {
  line-height: 25pt;
  font-size: 25pt;
  color: white;
  font-weight: 400;
}

.wiz {
  color: rgba(156, 145, 255, 0.664);
}
.rightCol {
  height: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.btn {
  height: 95px;
  width: 80px;
  border: none;
  padding: 0px;
  align-items: center;
  margin: 1vh 0px 1vh 0px;
}

.btn2 {
  height: 50px;
  width: 50px;
  border: none;
  background: transparent;
  padding: 0px;
  align-items: center;
  margin: 0px 10px 0px 0px;
}
.projectBtn {
  color: white;
  border-radius: 12px;
  font-size: 16pt;
  border: 3px rgba(255, 255, 255, 0.9) solid;
  background: transparent;
  height: 60px;
  width: 260px;
  transition: color 0.6s ease-out, border 0.6s ease-out;
}
.projectBtn:hover {
  border: 3px rgba(255, 255, 255, 0.5) solid;
  color: rgba(255, 255, 255, 0.5);
}
.fas {
  transition: color 0.3s ease-out;
  color: rgb(255, 255, 255, 0.9);
}
.fas:hover {
  color: rgb(255, 255, 255, 0.5);
}
.fab {
  transition: color 0.3s ease-out;
  color: rgb(255, 255, 255, 0.9);
}
.fab:hover {
  color: rgb(255, 255, 255, 0.5);
}
</style>

