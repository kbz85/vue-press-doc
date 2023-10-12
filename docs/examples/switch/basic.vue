<template>
  <Switch v-model:checked="checked" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Switch } from 'ant-design-vue'
const checked = ref<boolean>(false);
</script>
