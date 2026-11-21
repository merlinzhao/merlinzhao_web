<template>
  <div class="background">
    <div class="aboutCenter" id="scroll_about">
      <p class="headingTwo headlineText">
        Software Engineer
        <br />Chipotle Lover
      </p>
      <p
        class="headingThree"
        style="color: var(--mer-lin); margin: 3% 0% 2% 0%; text-align: center"
      >
        Merlin (noun) - Mer•lin | \ ˈmər-lən \
      </p>
      <p class="regText" style="color: #6e737d; text-align: center">
        Unfortunately, I do not have magical powers and I am unable to cast
        spells. Sorry for the inconvenience.
      </p>
      <div
        class="portrait"
        :style="{
          backgroundImage:
            'url(' + require('../assets/images/merlin.jpg') + ')',
        }"
      />
      <div
        class="thatsme"
        :style="{
          backgroundImage:
            'url(' + require('../assets/images/thatsme.png') + ')',
        }"
      />
      <div class="row summaryRow">
        <div class="col">
          <p
            class="headingFour Mac"
            style="margin: 3% 0% 2% 0%; width: 100%; text-align: left"
          >
            <i class="fas fa-graduation-cap" /> McMaster University
          </p>
        </div>
        <div class="col">
          <p
            class="headingFour"
            style="margin: 3% 0% 2% 0%; width: 100%; text-align: center"
          >
            <i class="fas fa-code"></i> Bachelors of Computer Engineering
          </p>
        </div>
      </div>
      <p class="regText" style="color: #737780; max-width: 850px">
        I turn complex problems into software that feels effortless. Fast,
        reliable, and built to last, that's the standard I hold every project
        to. Behind every system I build are real people counting on it to just
        work, and that's what keeps me going. I'm always ready for the next big
        challenge.
        <br /><br />I hope you enjoy my website!
      </p>
      <div class="row summaryRow">
        <p
          class="headingFour"
          style="margin: 3% 0% 2% 0%; width: 100%; text-align: center"
        >
          What do I know?
        </p>
        <div
          class="devIcons"
          style="
            margin-bottom: 20px;
            font-size: 16pt;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: row;
            width: 100%;
          "
        >
          <div
            v-for="(group, g) in skillGroups"
            :key="g"
            :class="{ devCol: g < skillGroups.length - 1 }"
          >
            <i
              v-for="(skill, i) in group"
              :key="skill.icon"
              :class="`devicon-${skill.icon} colored icon`"
              :style="{ marginRight: i < group.length - 1 ? '10px' : '0' }"
            >
              <div class="tool regText modalR">
                <p class="modalText">{{ skill.name }}</p>
                <i></i>
              </div>
            </i>
          </div>
        </div>
        <p
          class="headingFour"
          style="margin: 3% 0% 2% 0%; width: 100%; text-align: center"
        >
          Chill Times
        </p>
        <div
          class="row"
          style="font-size:16pt; align-items: center, justify-content: center;"
        >
          <i class="fas fa-dumbbell" style="margin-right: 15px"></i>
          <i class="fas fa-baseball-ball" style="margin-right: 15px"></i>
          <i class="fas fa-code" style="margin-right: 15px"></i>
          <i class="fas fa-camera" style="margin-right: 15px"></i>
          <i class="fas fa-headphones-alt" style="margin-right: 15px"></i>
          <i class="fas fa-plane" style="margin-right: 15px"></i>
          <i class="fas fa-hands-helping"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Each inner array is one row of icons in "What do I know?"
      skillGroups: [
        [
          { icon: "vuejs-plain", name: "Vue.js" },
          { icon: "react-plain", name: "React" },
          { icon: "nodejs-plain", name: "Node.js" },
          { icon: "html5-plain", name: "HTML5" },
          { icon: "css3-plain", name: "CSS3" },
        ],
        [
          { icon: "python-plain", name: "Python" },
          { icon: "javascript-plain", name: "JavaScript" },
          { icon: "typescript-plain", name: "TypeScript" },
          { icon: "rust-plain", name: "Rust" },
          { icon: "c-plain", name: "C" },
          { icon: "java-plain", name: "Java" },
        ],
        [
          { icon: "mysql-plain", name: "MySQL" },
          { icon: "postgresql-plain", name: "PostgreSQL" },
          { icon: "dynamodb-plain", name: "DynamoDB" },
          { icon: "redis-plain", name: "Redis" },
          { icon: "amazonwebservices-plain-wordmark", name: "AWS" },
          { icon: "terraform-plain", name: "Terraform" },
          { icon: "docker-plain", name: "Docker" },
          { icon: "kubernetes-plain", name: "Kubernetes" },
          { icon: "githubactions-plain", name: "GitHub Actions" },
          { icon: "jenkins-plain", name: "Jenkins" },
          { icon: "git-plain", name: "Git" },
        ],
      ],
    };
  },
};
</script>

<style scoped>
.background {
  height: auto;
  min-height: 500px;
  width: 100%;
  background: var(--bg-eee);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
  transition: background 0.3s ease-out;
}

.headlineText {
  background: -webkit-linear-gradient(
    -45deg,
    var(--sub-one) 0%,
    var(--sub-two) 60%,
    var(--sub-one) 120%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-out;

  text-align: center;
}

.summaryRow {
  width: 100%;
  max-width: 880px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  color: var(--summary-row);
}
.aboutCenter {
  width: 95%;
  max-width: 1250px;
  height: 100%;
  padding: 7% 0% 7% 0%;
  background: transparent;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;

  z-index: 1;
}
.portrait {
  background: #333;
  height: 250px;
  width: 250px;
  border-radius: 125px;
  margin: 3% 0% 0% 0%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.thatsme {
  height: 70px;
  width: 120px;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  left: 170px;
  bottom: 280px;
  z-index: 20;
  filter: invert(var(--thatsme));
}

.regTextModal {
  line-height: 18pt;
  font-size: 13pt;
  color: white;
  font-weight: 200;
}

.regText {
  color: white;
}

.devCol {
  margin-right: 30px;
}
/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODA */
/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODA */
/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODA */
.modalR {
  visibility: visible;
}

.modalText {
  margin: 0px;
  overflow: hidden;
  white-space: nowrap;
}

/* Anchor each hover label to its own icon, centered just above it */
.icon {
  position: relative;
}

.icon .tool {
  min-width: 100px;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  background-color: #777;
  font-weight: 400;
  font-size: 11pt;
  border-radius: 5px;
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s;
  padding: 5px;
  text-align: center;
  font-family: "Roboto";
}

@media (hover: hover) and (pointer: fine) {
  .icon:hover .tool {
    position: absolute;
    visibility: visible;
    opacity: 0.95;
  }

  .icon .tool i {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -12px;
    width: 24px;
    height: 12px;
    overflow: hidden;
  }

  .icon .tool i::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: #777;
    box-shadow: 0 1px 8px transparent;
  }
}

/* ======================================================================== */
/* ================ 555px 555px 555px 555px 555px 555px =================== */
/* ======================================================================== */

@media only screen and (max-width: 555px) {
  .summaryRow {
    display: flex;
    flex-direction: column;
  }

  .headingTwo {
    line-height: 30pt;
    font-size: 26pt;
    font-weight: 500;
  }
  .headingThree {
    line-height: 24pt;
    font-size: 19pt;
    font-weight: 400;
  }
  .portrait {
    height: 180px;
    width: 180px;
  }
  .devIcons {
    flex-direction: column !important;
  }

  .devCol {
    margin-right: 0px;
  }
  .thatsme {
    visibility: hidden;
    position: fixed;
  }
}

@media only screen and (max-width: 833px) {
  .Mac {
    text-align: center !important;
  }
  .Year {
    text-align: center !important;
  }
  .devIcons {
    flex-direction: column !important;
  }

  .devCol {
    margin-right: 0px;
  }
}
</style>