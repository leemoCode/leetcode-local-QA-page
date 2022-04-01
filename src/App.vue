<template>
  <div>
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
      page
    }
  }
});
</script>
