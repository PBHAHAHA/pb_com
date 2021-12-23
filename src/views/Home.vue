<template>
  <div class="header-container">
    <header>
      <h1>Bloooooo</h1>
      <nav>
        <!-- <span>首页</span>
        <span>文章</span>
        <span>关于</span> -->
      </nav>
      <div class="com-handle-container">切换主题</div>
    </header>
  </div>
  <div class="pageone-container">
    <div class="bg-container">
      <CanvasDom />
    </div>

    <h2></h2>
    <!-- Merry Christmas -->
  </div>
</template>

<script lang="ts">
import CanvasDom from "@/components/canvas/index.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    CanvasDom,
  },
});
</script>
<style lang="scss" scoped>
$container-width: 1260px;
.header-container {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px #ccc;
  header {
    overflow: hidden;
    width: $container-width;
    margin: 0 auto;
    h1 {
      float: left;
    }
    nav {
      float: left;
      margin-left: 60px;
      span {
        font-size: 16px;
        margin-right: 20px;
      }
    }
    .com-handle-container {
      float: right;
    }
  }
}

.pageone-container {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 24px;
  .bg-container {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9;
  }
}
</style>
