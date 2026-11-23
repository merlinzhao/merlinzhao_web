<template>
  <div class="experienceBg" ref="bg">
    <div class="deviceOut">
      <p class="headingOneHalf experienceHead">Experiences & Projects</p>
      <p class="headingThree experienceSub">
        Explore my works throughout the years.
      </p>
      <div class="deskTopDevice" ref="device" />
    </div>

    <div class="experienceCenter">
      <expCard
        v-for="(card, index) in cards"
        :key="index"
        :imgURL="card.imgURL"
        :backgroundColor="card.backgroundColor"
        :backgroundGradient="card.backgroundGradient"
        :projectTitle="card.projectTitle"
        :subHeading="card.subHeading"
        :bodyText="card.bodyText"
        :thisId="`expCard${index}`"
        :externalLink="card.externalLink"
        :linkName="card.linkName"
        :icons="card.icons"
        :photoLeft="card.photoLeft"
        :photoCover="card.photoCover"
        :gitLink="card.gitLink"
      />
      <expCard
        :photoLeft="true"
        :imgURL="'NavTextPic.png'"
        :projectTitle="'NavText'"
        :subHeading="'Second Place Overall at Hack Western 5 '"
        :bodyText="'NavText is a SMS based navigation application that sends directions, store and landmark information through text messages. This project was aimed to help people without overpriced data plans get directions. Fact: Canada has one of the most expensive mobile data plans among developed countries.'"
        :icons="['Bootstrap', 'Javascript', 'Swift']"
        :backgroundColor="'#9ab8c3'"
        :gitLink="'https://github.com/merlinzhao/NavText'"
        :externalLink="[
          'https://devpost.com/software/navtext-15tgmj',
          'View on Devpost',
        ]"
        :thisId="'Navid'"
        :linkName="'View on Devpost'"
      />
      <div class="gitBox" onclick="window.open('http://www.github.com/merlinzhao')">
        <p class="headingThree proof1">The proof is in the...</p>
        <p class="headingTwo proof2"><i class="fab fa-github"></i> GitHub</p>
        <p class="regText proof3">
          /merlinzhao<br />
          View the projects above along with more, over on my Github.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import expCard from "./experience-card.vue";

export default {
  components: {
    expCard,
  },
  data() {
    return {
      cards: [
        {
          photoLeft: true,
          imgURL: 'bubble.png',
          // Soft peach-to-lavender wash, inspired by bubble.io's homepage
          backgroundColor: '#fcf4ea',
          backgroundGradient:
            'radial-gradient(ellipse 70% 90% at 100% 35%, rgba(212, 168, 222, 0.95), rgba(212, 168, 222, 0) 70%), ' +
            'radial-gradient(ellipse 60% 45% at 55% 105%, rgba(196, 186, 236, 0.75), rgba(196, 186, 236, 0) 70%), ' +
            'radial-gradient(ellipse 75% 100% at 0% 50%, rgba(246, 209, 162, 1), rgba(246, 209, 162, 0) 70%)',
          projectTitle: 'Bubble',
          subHeading: 'Senior Software Engineer',
          bodyText: 'Led the design and rollout of GEMS, a globally exclusive metadata service built in Rust on DynamoDB across 20 AWS regions and serving up to 100,000 requests per second. Also strengthened the platform with tenant-isolated plugin sandboxing, AI-driven abuse detection, and enterprise app migrations that went from an hour to 15 minutes.',
          externalLink: ['https://bubble.io/','Bubble'],
          linkName: 'bubble.io',
          icons: ['NodeJS', 'AWS', 'Typescript', 'Redis', 'Rust', 'PostgreSQL']
        },
        {
          imgURL: 'zoom.png',
          backgroundColor: 'rgb(32, 92, 243)',
          projectTitle: 'Zoom',
          subHeading: 'Software Engineer',
          bodyText: 'Implmented new features for the Zoom Phone product line, bringing VoIP services deeper into the enterprise telecommunications market.',
          externalLink: ['https://zoom.us/','Zoom'],
          linkName: 'zoom.us',
          icons: ['Python', 'NodeJS', 'Jenkins', 'AWS', 'Typescript']
        },
        {
          photoLeft: true,
          imgURL: 'ibm.png',
          backgroundColor: 'rgb(0,0,0)',
          projectTitle: 'IBM',
          subHeading: 'Software Developer',
          bodyText: 'Played a critical role in overhauling and scaling CI/CD pipelines, guaranteeing code quality and stability. Implmented new elements in order to display Cognos analytical and financial data to customers when they need it the most.',
          externalLink: ['https://www.ibm.com/products/cognos-analytics','IBM'],
          linkName: 'IBM Cognos Analytics',
          icons: ['Javascript', 'CSS3', 'React', 'Jenkins', 'Docker', 'Kubernetes', 'Typescript']
        },
        {
          imgURL: 'amd-white.png',
          backgroundColor: 'rgb(201, 66, 66)',
          projectTitle: 'Advanced Micro Devices',
          subHeading: 'Software Engineer',
          bodyText: 'Build, managed, and administered internal scalable tooling systems, greatly assisting RTL designers in the silicon designing process.',
          externalLink: ['https://www.amd.com','AMD'],
          linkName: 'amd.com',
          icons: ['NodeJS', 'Javascript', 'MySQL', 'React', 'GCP']
        },
        {
          photoLeft: true,
          projectTitle: 'Menlolab Inc.',
          bodyText: 'Focused on interactive web elements in order to display large amounts of analytics and computing data in real time.',
          subHeading: 'Front End Developer Intern',
          icons: ['Javascript', 'VueJS', 'CSS3', 'HTML5', 'Java'],
          imgURL: 'MenloPic.png',
          externalLink: ['https://menlolab.com', 'View on web'],
          linkName: 'menlolab.com',
          backgroundColor: 'orange',
          photoCover: true,
        },
        {
          imgURL:'MerlinWebPic.png',
          projectTitle:'merlinzhao.me',
          bodyText:'My portfolio website coded and personally designed using Vue.js. I encorperated resuable components with props for increased flexibility. This project was a great way for me to dive deeper into web development!',
          icons: ['Javascript', 'VueJS', 'CSS3', 'HTML5', 'GCP'],
          gitLink:'https://github.com/merlinzhao/merlinzhao_web',
          externalLink:['http://www.merlinzhao.me', 'View on web'],
          linkName:'merlinzhao.me',
          backgroundColor:'#222',
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.getScroll);
  },
  methods: {
    // Zooms the device image as the user scrolls past it, then fades it out
    // into a dark background.
    getScroll() {
      const device = this.$refs.device;
      const bg = this.$refs.bg;
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      let devicePosition = screenHeight * 0.5 + 1340;
      let scaleFactor = 0.008 * 0.9;
      if (screenWidth < 576) {
        devicePosition = screenHeight * 0.5 + 1540;
        scaleFactor = 0.008;
      } else if (screenWidth < 767) {
        devicePosition += 400;
        scaleFactor = 0.008 * 0.8;
      } else {
        devicePosition += 480;
      }
      const offset = window.scrollY - devicePosition;
      const scale = offset * scaleFactor;
      const deviceTop = device.getBoundingClientRect().y;

      if (deviceTop <= screenHeight && scale > 1 && scale < 8.5) {
        device.style.transform = `scale(${scale})`;
        if (offset > 300) device.style.top = `${offset}px`;
      } else {
        device.style.transform = "scale(1)";
      }

      if (scale >= 6) {
        device.style.opacity = 0;
        if (scale >= 8.5) device.style.display = "none";
        bg.style.transition = "background 0s";
        bg.style.background = "#111";
      } else {
        device.style.display = "initial";
        device.style.opacity = 1;
        bg.style.transition = "background 0.3s ease-out";
        bg.style.background = "var(--bg-eee)";
      }
    },
  },
};
</script>
<style scoped>
.experienceBg {
  min-width: 300px;
  /* height grows with the number of cards; 100px gap below the last one */
  padding-bottom: 100px;
  width: 100%;
  background: var(--bg-eee);
  display: flex;
  flex-direction: row;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: flex-start;
  transition: background 0.3s ease-out;

  position: relative;
}
.experienceCenter {
  width: 95%;
  max-width: 940px;
  margin-top: 1600px;

  position: relative;

  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  justify-content: center;
  align-items: center;

  transition: 0.3s all ease-out;
}
.experienceHead {
  position: absolute;
  top: 100px;
  color: var(--black);
  text-align: center;
  background: -webkit-linear-gradient(
    45deg,
    var(--sub-three) 0%,
    var(--sub-four) 60%,
    var(--sub-three) 120%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.experienceSub {
  position: absolute;
  text-align: center;
  top: 190px;
  color: var(--mer-lin);
}

.deviceOut {
  width: 100%;
  height: 90%;
  position: absolute;

  display: flex;
  overflow: hidden;
  justify-content: center;
}
.deskTopDevice {
  position: sticky !important;
  height: 600px;
  width: 800px;

  transition: width 0.2s, height 0.2s, opacity 0.5s ease-out;
  background-image: url("../assets/images/iPad-bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;

  top: 330px;
}

.gitBox {
  width: 100%;
  height: 400px;
  background: #356288;
  margin-top: 100px;
  padding: 30px;
  transition: background 0.3s ease-out;
}

.gitBox:hover {
  background: #437caa;
  cursor: pointer;
}
.proof1 {
  color: white;
  margin: 0;
}
.proof2 {
  color: white;
}
.proof3 {
  color: white;
  position: absolute;
  bottom: 30px;
}

@media only screen and (max-width: 576px) {
  .headingOneHalf {
    line-height: 30pt !important;
    font-size: 26pt !important;
    margin: 0px !important;
    width: 80%;
  }
  .experienceSub {
    top: 190px;
  }
  .gitBox {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 650px) and (min-width: 576px) {
  .headingOneHalf {
    line-height: 40pt !important;
    font-size: 35pt !important;
    margin: 0px !important;
  }
}
</style>