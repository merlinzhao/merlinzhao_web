<template>
  <div class="landing">
    <div class="row firstRow">
      <div class="col-6 leftCol"></div>
      <div class="col-6 rightCol"></div>
    </div>
    <div class="row secondRow"></div>
  </div>
</template>

<style scoped>
.landing {
  background: #f4f4f4;
  height: 100vh;
  width: 100vw;
  min-width: 750px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
/* ======================================================================== */
/* TOP ROW ========= TOP TOP TOP TOP TOP TOP TOP =========== TOP ROW ITEMS  */
/* ======================================================================== */
.firstRow {
  height: 80%;
  width: 80%;
  background: blue;
}

/* ======================================================================== */
/* SECOND ROW ====== SECOND SECOND SECOND SECOND ======== SECOND ROW ITEMS  */
/* ======================================================================== */
.secondRow {
  height: 20%;
  width: 80%;
  background: red;
}
</style>