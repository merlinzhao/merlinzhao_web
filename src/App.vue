<template>
  <div id="app" class="app">
    <router-view />
    <link
      href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato&display=swap"
      rel="stylesheet"
    />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
:root {
  --bg-eee: #eee;
  --bg-e4e4e4: #e4e4e4;

  /* main.vue colors */
  --hello: #999;
  --summary-row: #444;

  /* about me colors */
  --mer-lin: #444;
  --thatsme: 80%;

  /* project Card colors */
  --bg-projectCard: white;
  --bg-projectCard-hover: rgb(245, 245, 245);
  --PC-subhead: #333;
  --gitHub-logo: #16166;

  /* menu box colors */
  --open-nav: #444;
  --side-nav: #666;
  --side-nav-hover: #444;

  --bg-mobile-menu-neutral: rgba(155, 155, 155, 0.3);
  --bg-mobile-menu: rgba(220, 220, 220, 0.7);
  --open-nav: rgba(50, 50, 50, 0.7);

  /* SUBHEADING */
  --sub-one: #fe875d;
  --sub-two: #c94242;

  --sub-three: #356288;
  --sub-four: #76bed8;

  /* blurs */
  --blur-one: rgba(180, 180, 180, 0);
  --blur-one-hover: rgba(180, 180, 180, 0.3);

  /* GENERIC */
  --white: white;
  --black: black;
}

/* ==================================== */
/* ==================================== */
[data-theme="dark"] {
  --bg-eee: #181818;
  --bg-e4e4e4: #111;

  /* main.vue colors */
  --hello: #ddd;
  --summary-row: #bbb;
  /* about me colors */
  --mer-lin: #ddd;
  --thatsme: 0%;

  /* project Card colors */
  --bg-projectCard: #333;
  --bg-projectCard-hover: #444;
  --PC-subhead: #aaa;
  --gitHub-logo: #aaa;

  /* menu box colors */
  --open-nav: white;
  --side-nav: rgb(196, 196, 196);
  --side-nav-hover: white;

  --bg-mobile-menu-neutral: rgba(0, 0, 0, 0.3);
  --bg-mobile-menu: rgba(0, 0, 0, 0.7);
  --open-nav: rgba(255, 255, 255, 0.7);

  /* SUBHEADING */
  --sub-one: #356288;
  --sub-two: #aacfdd;

  --sub-three: #fe875d;
  --sub-four: #c94242;

  /* blurs */
  --blur-one: rgba(0, 0, 0, 0.4);
  --blur-one-hover: rgba(0, 0, 0, 0.7);

  /* GENERIC */
  --white: black;
  --black: white;
}

/* ==================================== */

#app {
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  min-width: 300px;
}
.headingOne {
  line-height: 65pt;
  font-size: 65pt;
  font-weight: bolder;
}

.headingOneHalf {
  line-height: 67pt;
  font-size: 60pt;
  font-weight: 500;
}
.headingTwo {
  line-height: 50pt;
  font-size: 45pt;
  font-weight: 500;
}
.headingThree {
  line-height: 30pt;
  font-size: 25pt;
  font-weight: 400;
}
.headingFour {
  line-height: 23pt;
  font-size: 16pt;
  font-weight: 400;
}

/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */
/* V NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */
/* NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV  */

.sidenav {
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  z-index: 10;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: var(--side-nav) !important;
  display: block;
}

.sidenav a:hover {
  text-decoration: none;
  color: var(--side-nav-hover) !important;
  cursor: !important;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 20pt;
  margin-left: 50px;
}

.openNavButton {
  font-size: 20pt;
  cursor: pointer;

  color: var(--open-nav);
  z-index: 10;
  margin-left: 10px;
  top: 5px;
  left: 5px;
}

.regText {
  line-height: 18pt;
  font-size: 13pt;
  font-weight: 400;
}
.openNavButton:hover {
  color: var(--black);
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
@supports (backdrop-filter: none) {
  .navBG {
    background: rgba(0, 0, 0, 0.85);
    -webkit-backdrop-filter: blur(10px) !important;
    backdrop-filter: blur(10px);
  }
}

@media only screen and (max-width: 576px) {
  .headingOneHalf {
    line-height: 40pt !important;
    font-size: 35pt !important;
  }
  .headingThree {
    line-height: 18pt;
    font-size: 16pt;
  }
  .headingTwo {
    line-height: 30pt;
    font-size: 26pt;
    font-weight: 500;
    margin: 0;
  }
  .regText {
    line-height: 15pt;
    font-size: 11pt;
    font-weight: 400;
  }
}
@media only screen and (min-width: 575px) and (max-width: 870px) {
  .headingOneHalf {
    line-height: 52pt;
    font-size: 45pt;
  }
  .headingThree {
    line-height: 24pt;
    font-size: 20pt;
  }
  .headingTwo {
    line-height: 40pt;
    font-size: 36pt;
    font-weight: 500;
  }
}
@supports not (backdrop-filter: none) {
  .navBG {
    background: rgba(17, 17, 17, 0.85);
  }
}
</style>
