<template>
  <Space direction="vertical">
    <Switch v-model:checked="checked" :disabled="disabled" />
    <Button type="primary" @click="onToggle">Toggle disabled</Button>
  </Space>
</template>

<script lang="ts" setup>
import { Space, Switch, Button} from 'ant-design-vue'
import { ref } from 'vue';
const checked = ref<boolean>(true);
const disabled = ref<boolean>(true);

const onToggle = () => {
  disabled.value = !disabled.value;
};
</script>
