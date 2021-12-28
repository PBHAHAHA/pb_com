<template>
  <n-form
    :model="formData"
    ref="formRef"
    label-placement="left"
    :label-width="160"
    :size="size"
    :style="{
      maxWidth: '640px',
    }"
  >
    <n-form-item label="标题" path="inputValue">
      <n-input placeholder="Input" v-model:value="formData.inputValue" />
    </n-form-item>
    <n-form-item label="描述" path="infoValue">
      <n-input placeholder="Input" v-model:value="formData.infoValue" />
    </n-form-item>
    <n-form-item label="文章类型" path="selectValue">
      <n-select
        v-model:value="formData.article_type_id"
        :options="article_type_options"
      />
    </n-form-item>
    <n-form-item label="文章标签" path="tagValue">
      <n-input placeholder="Input" v-model:value="formData.tagValue" />
    </n-form-item>
  </n-form>
  <div style="border: 1px solid #ccc; margin: 10px 30px">
    <!-- 工具栏 -->
    <Toolbar :editorId="editorId" style="border-bottom: 1px solid #ccc" />
    <!-- 编辑器 -->
    <Editor
      :editorId="editorId"
      :defaultConfig="editorConfig"
      :defaultContent="getDefaultContent"
      @onChange="handleChange"
      style="height: 500px"
    />
  </div>
  <div class="publish t-c">
    <n-button type="primary" @click="publish">立即发布</n-button>
  </div>
</template>

<script setup lang="ts">
import {
  Editor,
  Toolbar,
  getEditor,
  removeEditor,
} from "@wangeditor/editor-for-vue";
import { addArtical } from "@/api/test";
import { cloneDeep } from "lodash";
import { computed, onBeforeUnmount, ref } from "vue";

const formData = ref({
  inputValue: null,
  infoValue: null,
  article_type_id: null,
  tagValue: null,
});
let article_type_options = ref([
  {
    label: "前端",
    value: 0,
  },
  {
    label: "后端",
    value: 1,
  },
  {
    label: "CSS",
    value: 2,
  },
]);

// 定义一个编辑器 id ，要求：全局唯一且不变！！！
const editorId = "wangeEditor-1";
const defaultContent: any = [];
const getDefaultContent = computed(() => cloneDeep(defaultContent)); // 注意，深拷贝

// 编辑器配置
const editorConfig = {
  placeholder: "请输入内容...",
  MENU_CONF: {
    /* 菜单配置，下文解释 */
  },
};
// 回调函数
const handleChange = (editor: any) => {
  console.log(editor.getHtml());
  defaultContent.value = editor.getHtml();
  // console.log("change:", JSON.stringify(editor.txt.html()));
};
// 组件销毁时，及时销毁编辑器
onBeforeUnmount(() => {
  const editor = getEditor(editorId);
  if (editor == null) return;

  // 销毁，并移除 editor
  editor.destroy();
  removeEditor(editorId);
});

// 发布文章
const publish = async () => {
  console.log(defaultContent.value, getDefaultContent.value);
  const params = {
    title: formData.value.inputValue,
    info: formData.value.infoValue,
    content: defaultContent.value,
    article_type_id: formData.value.article_type_id,
  };
  const res = await addArtical(params);
  console.log(res);
};
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style></style>
