<template>
  {{ msg }}

  <div v-highlight class="code-area">
    <pre>
        <code class="TypeScript">{{ testFunc }}</code>
    </pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeetCode',
  components: {},
  setup() {
    const msg = 'Component: LeetCode';

    const testFunc = () => {
      // 声明变量a
      const a = 1;
      const b = 2;
      console.log(a, b);
    };

    return {
      msg,

      testFunc,
    };
  },
});
</script>
