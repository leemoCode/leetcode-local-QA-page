<template>
  <div class="moliar">
    <component :is="page"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeetCode from './components/LeetCode.vue';

import { useData } from './data/index';

export default defineComponent({
  name: 'App',
  components: {
    LeetCode,
  },

  setup() {
    const { page, Page, goPage } = useData();

    goPage(Page.LEET_CODE);

    return {
      page,
    };
  },
});
</script>
<style lang="scss" scoped>
// https://color.oulu.me/deta2.html
.moliar {
  background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
}
</style>
