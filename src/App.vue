<template>
  <div>
    <Template />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Template from './components/Template.vue';

export default defineComponent({
  name: 'App',
  components: {
    Template,
  },
});
</script>