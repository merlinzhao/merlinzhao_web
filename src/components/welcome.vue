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
        <h class="headingThree" style="opacity: 0.9;">{{greeting}}!</h>
        <h class="headingOne">I'm Merlin.</h>
        <div style="height: 3%; width: 100%;" />
        <h class="headingThree" style="opacity: 0.9;">software developer</h>
        <h class="headingThree" style="opacity: 0.9;">graphic designer</h>
        <h class="headingThree" style="opacity: 0.9;">chipotle lover</h>
        <button class="projectBtn">View my Projects</button>
      </div>
      <div class="col-1 rightCol">
        <button class="btn" style="font-size: 4.3em;">
          <i class="fas fa-file-code"></i>
        </button>
        <button class="btn" style="font-size: 4.3em;">
          <i class="fas fa-file-alt"></i>
        </button>
        <button class="btn" style="font-size: 3.8em;">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
    <div class="row externalRow">
      <button class="btn2" style="font-size: 2.2em;">
        <i class="fab fa-linkedin"></i>
      </button>
      <button class="btn2" style="font-size: 2.2em;">
        <i class="fab fa-github"></i>
      </button>
      <button class="btn2" style="font-size: 2.2em;">
        <i class="fab fa-gitlab"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTime: "",
      selectFas: "",
      greeting: "여보세요"
    };
  },
  mounted() {
    this.currentTime = new Date();
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
    rgba(109, 0, 189, 1) 0%,
    rgb(14, 114, 180) 100%
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
  line-height: 70pt;
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
  line-height: 35pt;
  font-size: 25pt;
  color: white;
  font-weight: 400;
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
  height: 30px;
  width: 30px;
  border: none;
  background: transparent;
  padding: 0px;
  align-items: center;
  margin: 0px 25px 0px 0px;
}
.projectBtn {
  color: white;
  border-radius: 12px;
  font-size: 16pt;
  border: 3px rgba(255, 255, 255, 0.9) solid;
  background: transparent;
  height: 60px;
  width: 260px;
  margin: 5% 0px 0px 0px;
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

