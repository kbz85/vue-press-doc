<template>
    <ClientOnly>
        <div class="example">
            123123
            <!-- <Example :file="path" :demo="formatPathDemos[path]" /> -->
        </div>
    </ClientOnly>
</template>
<script lang='ts' setup>
import Example from './components/example.vue';
import { computed } from 'vue'
const props = defineProps<{
    demos: Object,
    path: string
}>()
console.log(787878, props.demos, props.path);
const text = require('../../examples/' + props.path)
console.log(text);

// const formatPathDemos = computed(() => {
//   const demos = {}

//   Object.keys(props.demos).forEach((key) => {
//     demos[key.replace('../../examples/', '').replace('.vue', '')] =
//       props.demos[key].default
//   })

//   return demos
// })
</script>
<style lang='less'></style>