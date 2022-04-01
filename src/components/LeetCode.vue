<template>
  <div class="question-list">
    <div class="question-item" v-for="item in questionList" :key="item.id">
      <h3 class="title" @click.stop="goLeetCode(item.url)">
        {{ item.id }}. {{ item.title }}
      </h3>
      <h4 class="description">{{ item.description }}</h4>
      <div class="divider"></div>
      <h5>Solution:</h5>
      <h5 class="solution">{{ item.solution }}</h5>
      <div class="divider"></div>
      <h5>Code:</h5>
      <div class="code">
        <pre v-highlight><code class="TypeScript">{{ item.code }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLeetCodeData } from '../data/index';

export default defineComponent({
  name: 'LeetCode',
  components: {},
  setup() {
    const { questionList } = useLeetCodeData();

    const goLeetCode = (url: string) => {
      window.open(url);
    };

    return {
      questionList,

      goLeetCode,
    };
  },
});
</script>
<style lang="scss" scoped>
.question-list {
  display: flex;
  justify-content: center;
  align-items: center;
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

  .title {
    cursor: pointer;
  }

  .code {
    max-width: 70%;
  }
}
</style>
