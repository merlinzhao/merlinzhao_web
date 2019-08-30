<template>
  <div class="landing">
    <div class="row firstRow">
      <div class="col-6 leftCol">
        <div style="height: 15%; width: 100%;" />
        <div class="nameBG">
          <p class="headingThree">HELLO! I'M</p>
          <p class="headingOne">MERLIN.</p>
        </div>
        <div style="height: 5%; width: 100%;" />
        <p class="headingThree" style="opacity: 0.9; color: #333;">software developer</p>
        <p class="headingThree" style="opacity: 0.9;  color: #333;">graphic designer</p>
        <p class="headingThree" style="opacity: 0.9;  color: #333;">chipotle lover</p>
        <p class="headingThree" style="opacity: 0.9;  color: #888;">
          unfortunately, not a real wizard
          <i class="far fa-sad-tear" />
        </p>
      </div>
      <div class="col-6 rightCol"></div>
    </div>
    <div class="row secondRow">
      <!-- <div class="row menuBar">
        <div class="col-3">
          <button class="menuButton menuText">
            <i class="fa fa-code" />
            <p id="menuTitle">EXPERIENCE</p>
          </button>
        </div>
        <div class="col-3">
          <button class="menuButton menuText">
            <i class="fab fa-github" />
            <p id="menuTitle">GITHUB</p>
          </button>
        </div>
        <div class="col-3">
          <button class="menuButton menuText">
            <i class="fab fa-linkedin" />
            <p id="menuTitle">LIKEDIN</p>
          </button>
        </div>
        <div class="col-3">
          <button class="menuButton menuText">
            <i class="fa fa-user-tie" />
            <p id="menuTitle">RESUME</p>
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing {
  background: #f4f4f4;
  height: 85vh;
  width: 100vw;
  min-width: 750px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;
}
.headingOne {
  line-height: 65pt;
  font-size: 65pt;
  font-weight: bolder;
}
.headingTwo {
  line-height: 45pt;
  font-size: 45pt;
  color: white;
  font-weight: 400;
}
.headingThree {
  line-height: 25pt;
  font-size: 25pt;
  font-weight: 400;
}
/* ======================================================================== */
/* TOP ROW ========= TOP TOP TOP TOP TOP TOP TOP =========== TOP ROW ITEMS  */
/* ======================================================================== */
.firstRow {
  height: 75%;
  width: 80%;
}

.leftCol {
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: left;
}
.rightCol {
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: left;
}

/* ======================================================================== */
/* SECOND ROW ====== SECOND SECOND SECOND SECOND ======== SECOND ROW ITEMS  */
/* ======================================================================== */
.secondRow {
  height: 25%;
  width: 80%;
}
.menuBar {
  padding: 0px 2% 0px 2%;
  height: 100px;
  width: 100%;
  background: white;
  border: #eee 1px solid;
  border-radius: 50px;
  box-shadow: 5px 5px 6px rgba(153, 153, 153, 0.1);
  transition: box-shadow 0.4s ease-out;
}

.menuBar:hover {
  box-shadow: 5px 5px 5px rgba(153, 153, 153, 0.25);
}

.menuButton {
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  flex-direction: row;
}

.menuText {
  color: orange;
  line-height: 18pt;
  font-size: 18pt;
  font-weight: 600;
  transition: color 0.3s ease-out;
}
.menuText:hover {
  color: lightcoral;
}
</style>