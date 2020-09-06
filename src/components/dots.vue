<template>
  <canvas id="dots" style="height: 100%; width:100%" />
</template>
<script>
import * as THREE from "three";
import Noise from "noise-library";

export default {
  data() {
    return {
      canvas: null,
      width: 1920,
      height: 1080,
      renderer: null,
      scene: null,
      camera: null,
      light: null,
      light2: null,
      geometry: null,
      vector: null,
      material: null,
      shape: null,
      i: 0,
      perlin: null,
      ratio: 0.5,
      mouse: null,
      mousemoveX: 1,
    };
  },
  mounted() {
    this.canvas = document.querySelector("#dots");
    this.width = this.canvas.offsetWidth;
    this.height = this.canvas.offsetHeight;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    this.renderer.setSize(this.width, this.height);

    this.renderer.setClearColor(0x000000, 0);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      100,
      this.width / this.height,
      0.1,
      10000
    );
    this.camera.position.set(120, 0, 300);

    this.light = new THREE.HemisphereLight(0xff00ff, 0x0000ff, 0.6);
    this.scene.add(this.light);

    this.light = new THREE.DirectionalLight(0xff0000, 0.2);
    this.light.position.set(200, 300, 900);
    this.scene.add(this.light);
    this.light2 = this.light.clone();
    this.light2.position.set(-200, 300, 400);
    this.scene.add(this.light2);

    this.geometry = new THREE.IcosahedronGeometry(120, 4);
    for (this.i = 0; this.i < this.geometry.vertices.length; this.i++) {
      this.vector = this.geometry.vertices[this.i];
      this.vector._o = this.vector.clone();
    }
    this.material = new THREE.MeshPhongMaterial({
      emissive: 0x0aefff,
      emissiveIntensity: 0.3,
      shininess: 0,
    });
    this.shape = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.shape);

    this.mouse = new THREE.Vector2(0.8, 0.5);

    requestAnimationFrame(this.render);
    window.addEventListener("mousemove", this.onMouseMove);
    var resizeTm;
    window.addEventListener("resize", function () {
      resizeTm = clearTimeout(resizeTm);
      resizeTm = setTimeout(this.onResize, 200);
    });
  },

  methods: {
    onResize() {
      this.canvas.style.width = "";
      this.canvas.style.height = "";
      this.width = this.canvas.offsetWidth;
      this.height = this.canvas.offsetHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    },
    onMouseMove(e) {
      //this.mousemoveX = (this.mousemoveX + e.offsetX) * 0.00001;
      // TweenMax.to(mouse, 0.8, {
      //   y: e.clientY / this.height,
      //   x: e.clientX / this.width,
      //   ease: Power1.easeOut,
      // });
    },
    updateVertices(a) {
      for (var i = 0; i < this.geometry.vertices.length; i++) {
        this.vector = this.geometry.vertices[i];
        this.vector.copy(this.vector._o);
        this.perlin = Noise.perlin3(
          this.vector.x * 0.009 + a * 0.0001,
          this.vector.y * 0.006 + a * 0.0002,
          this.vector.z * 0.015
        );
        this.ratio = this.perlin * 0.4 * (this.mouse.y + 0.1) + 0.8;
        this.vector.multiplyScalar(this.ratio);
      }
      this.geometry.verticesNeedUpdate = true;
    },

    render(a) {
      requestAnimationFrame(this.render);
      this.updateVertices(a);
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>