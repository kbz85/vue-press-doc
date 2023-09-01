<script setup lang="ts">
// defineProps({
//   file: {
//     type: String,
//     required: true,
//   },
//   demo: {
//     type: Object,
//     required: true,
//   },
// })
import { Button } from 'ant-design-vue'
</script>

<template>
  <div class="example-showcase">
    <ClientOnly>
      <Button type="primary"></Button>
      <!-- <component :is="demo" v-if="demo" v-bind="$attrs" /> -->
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
  background-color: var(--bg-color);
}
</style>
