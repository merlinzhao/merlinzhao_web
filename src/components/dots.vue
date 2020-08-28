<template>
  <div id="dots" style="height: 100%; width:100%" />
</template>
<script>
import * as THREE from "three";
import * as Stats from "stats";

export default {
  data() {
    return {
      SEPARATION: 100,
      AMOUNTX: 50,
      AMOUNTY: 50,
      container: null,
      stats: null,
      camera: null,
      scene: null,
      renderer: null,
      particles: 0,
      count: 0,
      particle: 0,
      mouseX: 0,
      mouseY: 0,
      windowHalfX: 0,
      windowHalfY: 0,
      PI2: 0,
      geometry: 0,
      material: 0,
      i: 0,
    };
  },
  mounted() {
    // GO HERE => https://github.com/mrdoob/three.js/blob/master/examples/canvas_particles_waves.html

    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.container = document.getElementById("dots");
    this.camera = new THREE.PerspectiveCamera(
      50,
      1920 / 1080, //window.innerWidth / window.innerHeight,
      1,
      10000
    );

    this.camera.position.z = 1000; // Good var to change
    this.scene = new THREE.Scene();
    this.particles = new Array();
    this.PI2 = Math.PI * 2;
    this.geometry = new THREE.Geometry();
    this.material = new THREE.SpriteMaterial({
      color: 0xffffff,
    });

    this.i = 0;
    for (var ix = 0; ix < this.AMOUNTX; ix++) {
      for (var iy = 0; iy < this.AMOUNTY; iy++) {
        this.particle = this.particles[this.i++] = new THREE.Sprite(
          this.material
        );
        this.particle.position.x =
          ix * this.SEPARATION - (this.AMOUNTX * this.SEPARATION) / 2;
        this.particle.position.z =
          iy * this.SEPARATION - (this.AMOUNTY * this.SEPARATION) / 2;
        this.scene.add(this.particle);

        if (this.i > 0) {
          this.geometry.vertices.push(this.particle.position);
        }
      }
    }

    // var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
    //   color: 0xffffff,
    //   opacity: 0.5,
    //   linewidth: 4
    // }));
    // scene.add( line );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
    //this.stats = new Stats();
    //this.container.appendChild(this.stats.dom);
    document.addEventListener("mousemove", this.onDocumentMouseMove, false);
    document.addEventListener("touchstart", this.onDocumentTouchStart, false);
    document.addEventListener("touchmove", this.onDocumentTouchMove, false);
    //
    window.addEventListener("resize", this.onWindowResize, false);

    this.animate();
  },

  methods: {
    onWindowResize() {
      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },

    onDocumentMouseMove(event) {
      this.mouseX = event.clientX - this.windowHalfX;
      this.mouseY = event.clientY - this.windowHalfY;
    },

    onDocumentTouchStart(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        this.mouseX = event.touches[0].pageX - this.windowHalfX;
        this.mouseY = event.touches[0].pageY - this.windowHalfY;
      }
    },

    onDocumentTouchMove(event) {
      if (event.touches.length === 1) {
        event.preventDefault();
        this.mouseX = event.touches[0].pageX - this.windowHalfX;
        this.mouseY = event.touches[0].pageY - this.windowHalfY;
      }
    },

    animate() {
      requestAnimationFrame(this.animate);
      this.render();
      //this.stats.update();
    },

    render() {
      this.renderer.setClearColor(0x07074e, 1);
      this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.008;
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.008;
      this.camera.lookAt(this.scene.position);
      var i = 0;
      for (var ix = 0; ix < this.AMOUNTX; ix++) {
        for (var iy = 0; iy < this.AMOUNTY; iy++) {
          this.particle = this.particles[i++];
          this.particle.position.y =
            Math.sin((ix + this.count) * 0.3) * 50 +
            Math.sin((iy + this.count) * 0.5) * 50;
          this.particle.scale.x = this.particle.scale.y =
            (Math.sin((ix + this.count) * 0.3) + 1) * 4 +
            (Math.sin((iy + this.count) * 0.5) + 1) * 4;
        }
      }
      this.renderer.render(this.scene, this.camera);
      this.count += 0.01;
    },
  },
};
</script>