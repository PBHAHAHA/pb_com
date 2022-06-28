<template>
  <div>
    <canvas ref="mainRef" id="main"></canvas>
  </div>
</template>

<script setup>
import {
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  AmbientLight,
  Mesh,
  TextureLoader,
} from "three";
import { OrbitControls } from "../../node_modules/three/examples/jsm/controls/OrbitControls";
import { RoundedBoxGeometry } from "../../node_modules/three/examples/jsm/geometries/RoundedBoxGeometry";
// import {TextureLoader} from "../../node_modules/three/examples/jsm/loaders/Tex"
import { onMounted, ref, render } from "vue";

// const imgTexture = require("/assets/texture/diagmonds-light.png")
const scene = new Scene();
const mainRef = ref(null);
console.log(window.innerHeight);
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
let camera;
function setCamera() {
  camera = new PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 1000);
  camera.position.z = 5;
  scene.add(camera);
}
function setControls() {
  const controls = new OrbitControls(camera, renderer.domElement);
  // scene.add(controls)
  controls.update();
}
let renderer;
function setRender() {
  renderer = new WebGLRenderer({
    canvas: mainRef.value,
    alpha: true,
  });
  renderer.setSize(sizes.width, sizes.height);
}

//player
let player, geometry, material;
function Player() {
  geometry = new RoundedBoxGeometry(2.4, 4, 0.8, 1);
  material = new MeshBasicMaterial({
    color: "#eef3f7",
    map: texture,
    normalMap: normalTexture,
  });
  player = new Mesh(geometry, material);
  console.log(player);
  scene.add(player);
}
// setLight
function setLight() {
  if (scene) {
    let ambientLight = new AmbientLight(0xffffff); // 环境光
    scene.add(ambientLight);
  }
}

// 纹理
let texture,normalTexture;
function setTexture() {
  texture = new TextureLoader().load("../src/assets/texture/StoneMarbleCalacatta004_COL_2K.jpg");
  normalTexture = new TextureLoader().load("../src/assets/texture/StoneMarbleCalacatta004_NRM_2K.jpg")
}

function animate() {
  renderer.render(scene, camera);
  window.requestAnimationFrame(animate);
}

onMounted(() => {
  setLight();
  setCamera();
  setRender();
  setControls();
  setTexture();
  Player();
  animate();
});
</script>

<style lang="scss" scoped></style>
