<template>
  <div class="background">
    <div class="row nameRow">
      <div class="col-11 leftCol" style="background: grey; height: 100%;">
        <h class="headingOne">Merlin Zhao</h>
        <div style="height: 3%; wigth: 100%;" />
        <h class="headingThree">software developer</h>
        <h class="headingThree">graphic designer</h>
        <h class="headingThree">chipotle lover</h>
      </div>
      <div class="col-1 rightCol" style="background: white; height: 100%;">
        <button class="btn">
          <i class="fa fa-close"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
.btn {
  height: 80px;
  width: 80px;
  background: blue;
  border: none;
}
</style>

