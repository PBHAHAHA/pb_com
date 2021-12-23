<template>
  <div class="header-container">
    <header>
      <h1>Bloooooo</h1>
      <nav>
        <span>首页</span>
        <span>文章</span>
        <span>关于</span>
      </nav>
      <div class="com-handle-container">
        <span class="item">切换主题</span>
        <span class="item">切换动画</span>
      </div>
    </header>
  </div>
  <div class="pageone-container">
    <div class="bg-container">
      <CanvasDom />
    </div>

    <p>Merry Christmas</p>
  </div>
  <article>
    <h2 class="t-c">works</h2>
    <section v-for="item in 3" :key="item">
      <div>
        <h3>pb-ui</h3>
        <p></p>
      </div>
      <p>github</p>
    </section>
    <h2 class="t-c">resume</h2>
    <section v-for="item in 3" :key="item">
      <div>
        <h3>pb-ui</h3>
        <p></p>
      </div>
      <p>github</p>
    </section>
  </article>
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
      .item {
        margin-left: 10px;
      }
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
article {
  width: $container-width;
  margin: 0 auto;
  padding: 20px 0;
  h2 {
    margin-bottom: 20px;
  }
  section {
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    padding: 20px 0;
    margin-bottom: 20px;
    &:hover {
      box-shadow: 0 0 10px #ccc;
    }
    // box-shadow: 0 0 10px #f0f0f0;
  }
}
</style>
