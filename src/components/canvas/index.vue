<template>
  <canvas id="canvasDom" ref="canvasDom" class="canvas-box"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
const canvasDom = ref<HTMLCanvasElement | null>(null);

const init = function () {
  console.log(canvasDom.value);
  let ctx = canvasDom!.value!.getContext("2d");
  console.log(ctx);
  ctx!.arc(300, 300, 100, 0, 2 * Math.PI, false);
  ctx!.stroke();
};
onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped>
.canvas-box {
  width: 100%;
  height: 100%;
}
</style>