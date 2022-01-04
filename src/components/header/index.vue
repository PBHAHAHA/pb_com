



<template>
  <div class="header-container">
    <header>
      <h1>{{ homeData.name || '纸人特工' }}</h1>
      <nav>
        <span>作品</span>
        <span>文章</span>
        <span>关于</span>
      </nav>
      <div class="com-handle-container">
        <span class="item">
          <svg-icon class="set-color" icon="color" />切换主题
        </span>
        <span class="item">
          <svg-icon class="set-color" icon="animate" />切换动画
        </span>
      </div>
    </header>
  </div>
</template>
<script setup lang="ts">
import { getHomeInfo, getArticalList } from "@/api/test";
import { defineComponent, onMounted, ref } from "vue";
let homeData = ref({});
onMounted(async () => {
  console.log("onMounted-----------------");
  const data = await getHomeInfo();
  homeData.value = data;
});
</script>

<style scoped lang="scss">
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
        cursor: pointer;
        .svg-icon {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>