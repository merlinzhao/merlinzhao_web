<template>
  <div class="background">
    <div class="highlightsRowOne centerAll">
      <div class="highlightsCenter centerAll">
        <p class="headingTwo hText">Highlights</p>
        <div class="row hRow">
          <div class="col leftCol"></div>
          <div class="col midCol"></div>
          <div class="col rightCol"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.centerAll {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.highlightsRowOne {
  min-height: 400px;
  height: 90vh;
  max-height: 1200px;
  width: 100%;
  background: #eee;
}
.highlightsCenter {
  width: 100%;
  max-width: 1200px;
}

.hText {
  width: 100%;
  text-align: left;
  font-weight: bold;
}

.hRow {
  width: 100%;
  height: 500px;
}

/* COLUMNS COLUMNS COLUMNS COLUMNS COLUMNS COLUMNS COLUMNS COLUMNS COLUMNS COLUMNS */
.leftCol {
  background: #ddd;
}
.midCol {
  background: #ccc;
}
.rightCol {
  background: #bbb;
}
</style>