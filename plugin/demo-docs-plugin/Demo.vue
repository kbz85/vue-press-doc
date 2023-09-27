<template>
    <ClientOnly>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <p text="sm" v-html="decodedDescription" />
        <div class="example">
            <Example :file="path" :demo="formatPathDemos[path]" />
            <SourceCode :source="source"></SourceCode>
            <div class="hidden-code">隐藏密码</div>
        </div>
       
    </ClientOnly>
</template>
<script lang='ts' setup>
import Example from './components/example.vue';
import SourceCode from './components/SourceCode.vue';
import { computed, onMounted } from 'vue'
const props = defineProps<{
    demos: Object,
    path: string,
    source: string,
    rawSource: string,
    description: string
}>()
const formatPathDemos = computed(() => {
    const demos = {}
    Object.keys(props.demos).forEach((key) => {
        demos[key.replace('../../../examples/', '').replace('.vue', '')] =
            props.demos[key].default
    })
    return demos
})

const decodedDescription = computed(() =>
    decodeURIComponent(props.description!)
)
onMounted(async () => {
    console.log(props.description);
})
</script>
<style lang='less'>
.example {
    border: 1px solid var(--border-color);
    border-radius: var(--el-border-radius-base);

    &-showcase {
        border-bottom: 1px solid var(--border-color);
    }
}
</style>