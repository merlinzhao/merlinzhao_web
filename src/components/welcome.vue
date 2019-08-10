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
        <h class="headingOne">Merlin Zhao</h>
        <div style="height: 3%; width: 100%;" />
        <h class="headingThree">software developer</h>
        <h class="headingThree">graphic designer</h>
        <h class="headingThree">chipotle lover</h>
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

      selectFas: ""
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
    rgba(16, 153, 195, 1) 100%
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
  margin: 0px 15px 0px 10px;
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

