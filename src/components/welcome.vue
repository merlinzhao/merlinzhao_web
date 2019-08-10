<template>
  <div class="background">
    <div class="row nameRow">
      <div class="col-11 leftCol" style="background: grey; height: 100%;">
        <h class="headingOne">Merlin Zhao</h>
        <div style="height: 3%; wigth: 100%;" />
        <h class="headingThree">software developer</h>
        <h class="headingThree">graphic designer</h>
        <h class="headingThree">chipotle lover</h>

          

        </h>
      </div>
      <div class="col-1 rightCol" style="background: rgb(255,255,255,0.2); height: 100%;">
        <button class="btn">
          <font-awesome-icon icon="laptop-code" size="3x" style="color:white;" />
        </button>
         <button class="btn">
          <font-awesome-icon icon="file-alt" size="4x" style="color:white;" />
        </button>
         <button class="btn">
          <font-awesome-icon icon="linkedin" size="4x" style="color:white;" />
        </button>
         <button class="btn">
          <font-awesome-icon icon="github" size="4x" style="color:white;" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentTime: ""
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
  height: 100%;
  width: 80%;
  max-width: 1200px;
  margin: auto;
  background: rgba(255, 255, 255, 0.247);
}
.leftCol {
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
  padding: 0px;
   display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.btn {
  height: 80px;
  width: 80px;
  background: rgba(251, 251, 253, 0.226);
  border: none;
  align-items: center;
  margin: 2vh 0px 2vh 0px;
}
.fa {
  color: white;
}
</style>

