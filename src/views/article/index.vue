<template>
  <div class="header-container">
    <header>
      <h1>{{ homeData.name || '纸人特工' }}</h1>
      <nav>
        <span>文章</span>
      </nav>
      <div class="com-handle-container">
        <span class="item">切换主题</span>
        <span class="item">切换动画</span>
      </div>
    </header>
  </div>
  <div class="article-container">
    <article class="article-type-container">
      <p class="item">前端</p>
      <p class="item">后端</p>
      <p class="item">CSS</p>
    </article>
    <div class="article-detail-container">
      <div id="content" v-html="htmlContent"></div>
    </div>
  </div>
  <footer class="t-c">
    <p>备案号： 川123321321</p>
    <p>四川成都</p>
  </footer>
</template>

<script lang="ts">
import { LogoGithub } from "@vicons/ionicons5";
import CanvasDom from "@/components/canvas/index.vue";
import { getHomeInfo, getArticalList } from "@/api/test";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: "Home",
  components: {
    CanvasDom,
    LogoGithub,
  },
  setup() {
    let homeData = ref({});
    onMounted(async () => {
      console.log("onMounted-----------------");
      const data = await getHomeInfo();
      homeData.value = data;
    });

    let articleList = ref({});
    onMounted(async () => {
      console.log("onMounted-----------------2");
      const data = await getArticalList();
      articleList.value = data;
    });
    const router = useRouter()
    const linkToArticle = () => {
      router.push({
        name: "article"
      })
    }

    const htmlContent = `<h1>Hello world</h1>
    <p>这是我的第一篇文章、且看且珍惜</p>
    
    `
    return {
      homeData,
      articleList,
      linkToArticle,
      htmlContent
    };
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
.article-container {
  width: $container-width;
  margin: 0 auto;

  margin-top: 60px;
  position: relative;
  .article-type-container {
    background-color: #ccc;
    width: 100%;
    display: flex;
    .item {
      line-height: 60px;
      margin-right: 30px;
    }
  }
}
footer {
  height: 80px;
  margin-top: 40px;
}
</style>
