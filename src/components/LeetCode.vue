<template>
  <div class="question-list">
    <div class="question-item" v-for="item in questionList" :key="item.id">
      <h3 class="title" @click.stop="goLeetCode(item.url)">
        {{ item.id }}. {{ item.title }}
      </h3>
      <div
        class="description"
        v-for="item in transMultiLines(item.description)"
        :key="item.description"
      >
        {{ item }}
      </div>
      <div class="divider"></div>
      <h4>Example:</h4>
      <div class="io" v-for="item in transMultiLines(item.io)" :key="item.io">
        {{ item }}
      </div>
      <div class="divider"></div>
      <h4>Solution:</h4>
      <div
        class="solution"
        v-for="item in transMultiLines(item.solution)"
        :key="item.solution"
      >
        {{ item }}
      </div>
      <div class="divider"></div>
      <h4 v-if="item.code && item.code.length === 1">Code:</h4>
      <div v-for="(codeItem, index) in item.code" :key="codeItem.code">
        <h4 v-if="item.code && item.code.length > 1">Code {{ index + 1 }} :</h4>
        <pre v-highlight><code class="code">{{ codeItem }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLeetCodeData } from '../data/index';
import 'highlight.js/styles/brown-paper.css'; //导入代码高亮样式

export default defineComponent({
  name: 'LeetCode',
  components: {},
  setup() {
    const { questionList } = useLeetCodeData();

    const goLeetCode = (url: string) => {
      window.open(url);
    };

    const transMultiLines = (txt: string) => {
      return txt.split('\n');
    };

    return {
      questionList,

      goLeetCode,
      transMultiLines,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '../assets/css/code.scss';

.question-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: #eeeeec;
}
.divider {
  width: 100%;
  border: 1px solid #e9e8e8;
  margin: 3px 0;
}
.question-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;

  margin: 10px 0;
  padding: 10px;

  border: 3px solid #e9e8e8;
  border-radius: 6px;

  .title {
    cursor: pointer;
  }

  .description {
    margin-bottom: 10px;
  }

  .io {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .solution {
    margin-bottom: 10px;
  }

  .code {
    max-width: 70%;
    border-radius: 6px;
  }
}
</style>
