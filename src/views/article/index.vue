<template>
  <Header />
  <div class="type-nav">
    <article class="article-type-container">
      <p class="item">前端</p>
      <p class="item">后端</p>
      <p class="item">CSS</p>
      <p class="item title">文章分类</p>
    </article>
  </div>

  <div class="article-container">
    <div class="article-detail-container">
      <div id="content" v-html="htmlContent"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { LogoGithub } from "@vicons/ionicons5";
import Header from "@/components/header/index.vue";
import { getHomeInfo, getArticalList } from "@/api/test";
import { defineComponent, onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: "Home",
  components: {
    Header,
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
.type-nav {
  width: 100%;
  background-color: #f9f9f9;
  position: sticky;
  top: 60px;
  .article-type-container {
    position: relative;
    width: $container-width;
    margin: 0 auto;
    display: flex;
    .item {
      cursor: pointer;
      line-height: 60px;
      margin-right: 30px;
    }
    .title {
      position: absolute;
      right: 0;
      color: #bbb;
      margin-right: 0;
    }
  }
}

.article-container {
  width: $container-width;
  margin: 0 auto;

  margin-top: 60px;
  position: relative;
}
footer {
  height: 80px;
  margin-top: 40px;
}
</style>
