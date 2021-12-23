<template>
  <div id="container">
    <canvas
      id="canvasDom"
      type="2d"
      ref="canvasDom"
      class="canvas-box"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";
interface BallInterface {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
  minRadius: number;
}
interface MouseInterface {
  x: number;
  y: number;
}
const canvasDom = ref<HTMLCanvasElement | null>(null);
let originX: number;
let originY: number;
let ctx: CanvasRenderingContext2D | null;
let ballArr: Array<any>;
let mouse: MouseInterface;
let maxRadius = 40;
const init = function () {
  canvasDom!.value!.width = window.innerWidth;
  canvasDom!.value!.height = window.innerHeight;

  ctx = canvasDom!.value!.getContext("2d");
  ballArr = [];
  mouse = { x: -100, y: -100 };
  const colorArr = ["#C11522", "#B5B5D6", "#DBC78A", "#F08805", "#D64E30"];
  window.addEventListener("mousemove", function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    originX = event.clientX;
    originY = event.clientY;
    console.log(mouse);
  });

  setInterval(() => {
    // 每隔3秒回去检查鼠标有没有移动如果没有移动那么就不显示放大气泡（既将鼠标的点移入到屏幕外）
    if (originY == mouse.y && originX == mouse.x) {
      mouse.x = -100;
      mouse.y = -100;
    }
  }, 2000);
  window.addEventListener("resize", function (event) {
    canvasDom.value!.width = window.innerWidth;
    canvasDom.value!.height = window.innerHeight;
  });
  for (let i = 0; i < 300; i++) {
    let radius = Math.random() * 4 + 3;
    let x = Math.random() * (canvasDom.value!.width - 2 * radius) + radius;
    let y = Math.random() * (canvasDom.value!.height - 2 * radius) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    ballArr.push(
      new Ball(x, y, dx, dy, radius, colorArr[Math.floor(Math.random() * 5)])
    );
  }
  animate();
};

class Ball implements BallInterface {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;
  minRadius: number;
  constructor(
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = color;
  }

  draw() {
    ctx!.beginPath();
    ctx!.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx!.fillStyle = this.color;
    ctx!.fill();
    ctx!.closePath();
  }
  update() {
    // 如果小球移动到了canvas边缘，那么就要
    if (
      this.x + this.radius > canvasDom.value!.width ||
      this.x - this.radius < 0
    ) {
      this.dx = -this.dx;
    }
    if (
      this.y + this.radius > canvasDom.value!.height ||
      this.y - this.radius < 0
    ) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    // 鼠标移入的时候
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }
    this.draw();
  }
}

const animate = function () {
  requestAnimationFrame(animate);
  ctx!.clearRect(0, 0, canvasDom.value!.width, canvasDom.value!.height);
  ballArr.forEach((item) => {
    item.update();
  });
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.canvas-box {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9999;
}
</style>
