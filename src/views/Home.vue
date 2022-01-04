<template>
  <Header />
  <div class="pageone-container">
    <div class="bg-container">
      <CanvasDom />
    </div>

    <p class="text">{{ homeData.text || '好好学习、天天向上' }}</p>
  </div>
  <article>
    <h2>我的作品</h2>
    <section class="works-container">
      <div class="works-section">
        <div class="item">
          <h3>PB-UI</h3>
          <p>学习、模拟 ElementUI 的组件库、功能不全</p>
          <p>技术栈： Vue2</p>
        </div>
        <p class="link">
          <n-icon size="40">
            <LogoGithub />
          </n-icon>
        </p>
      </div>
      <div class="works-section">
        <div class="item">
          <h3>个人博客</h3>
          <p>个人博客</p>
          <p>技术栈： Vue3、TS、NodeJS、egg</p>
        </div>
        <p class="link">
          <n-icon size="40">
            <LogoGithub />
          </n-icon>
        </p>
      </div>
      <div class="works-section">
        <div class="item">
          <h3>个人博客</h3>
          <p>个人博客</p>
          <p>技术栈： Vue3、TS、NodeJS、egg</p>
        </div>
        <p class="link">
          <n-icon size="40">
            <LogoGithub />
          </n-icon>
        </p>
      </div>
      <div class="works-section">
        <p class="t-c more">More...</p>
      </div>
    </section>
    <h2>文章</h2>
    <section class="blog-container">
      <div class="blog-item" v-for="item in articleList" :key="item.title">
        <div class="item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.info }}</p>
        </div>
        <p class="item-img">
          <img src="@/assets/images/no-data2.png" />
        </p>
      </div>
      <div class="blog-item" @click="linkToArticle">
        <p class="t-c more">More...</p>
      </div>
    </section>
    <h2>个人简历</h2>
    <section class="resume-container">
      <p>昵称： 纸人</p>
      <p>坐标：成都</p>
      <p>学历： 本科（2015.09~2019.06）</p>
      <p>职位： 前端开发工程师</p>
      <p>座右铭： 生活至简、思想至行</p>
      <p>
        工作经历：
        <li>2019-08 ~ 2021~10，成都，四川咖范网络科技有限公司，前端开发</li>
        <li>2021-10 ~ 至今，成都，成都购商云汇信息技术有限公司，前端开发</li>
      </p>
      <p>
        技术栈：
        <li>前端：Vue全家桶、JQ、sass</li>
        <li>服务端： Koa2、nuxt</li>
        <li>其他： webpack、Typescript</li>
      </p>
    </section>
    <h2>联系我</h2>
    <div>
      <p>邮箱： 314709923@qq.com</p>
      <p>微信： wx314709923</p>
    </div>
  </article>
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
import Header from '@/components/header/index.vue'
export default defineComponent({
  name: "Home",
  components: {
    CanvasDom,
    LogoGithub,
    Header
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
    return {
      homeData,
      articleList,
      linkToArticle
    };
  },
});
</script>
<style lang="scss" scoped>
$container-width: 1260px;

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
  .text {
    font-size: 34px;
    font-weight: 600;
    z-index: 999;
  }
}
article {
  width: $container-width;
  margin: 0 auto;
  padding: 20px 0;
  h2 {
    margin-bottom: 20px;
    font-size: 26px;
  }
  .works-container,
  .blog-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .works-section,
    .blog-item {
      min-width: 600px;
      background-color: #f8f8f8;
      padding: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .item-img {
        width: 100px;
        height: 140px;
        background-color: #eee;
        img {
          width: 100%;
          margin-top: 20px;
        }
      }
      h3 {
        font-size: 22px;
        font-weight: 600;
      }
      .link {
        cursor: pointer;
      }
      .more {
        width: 100%;
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
  .resume-container {
    margin-bottom: 20px;
    font-size: 18px;
    // margin-left: 100px;
    p {
      line-height: 30px;
    }
  }
}

footer {
  height: 80px;
  margin-top: 40px;
}
</style>
