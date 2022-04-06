<template>
  {{ msg }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useData } from '../data/index';
import { useAbility } from '../ability/index';

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const msg = 'Component: Home';

    const { page } = useData();
    const { sayHello } = useAbility();

    return {
      msg,

      page,
      sayHello,
    };
  },
});
</script>
