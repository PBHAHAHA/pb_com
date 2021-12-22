<template>
  <canvas id="canvasDom" ref="canvasDom" class="canvas-box"></canvas>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from "vue";

const canvasDom = ref<HTMLCanvasElement | null>(null);
const init = function () {
  nextTick(() => {

    canvasDom.value!.width = window.innerWidth;

    console.log(canvasDom!.value!);
    let ctx = canvasDom!.value!.getContext("2d");
    console.log(ctx);
    // ctx!.beginPath();
    ctx!.arc(20, 10, 10, 0, 2 * Math.PI, false);
    ctx!.stroke();
  })

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