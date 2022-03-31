<template>
  {{ msg }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Template",
  components: {},
  setup() {
    const msg = "Component: Template";
    return {
      msg,
    };
  },
});
</script>
