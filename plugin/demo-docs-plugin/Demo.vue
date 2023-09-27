<template>
    <ClientOnly>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <p text="sm" v-html="decodedDescription" />
        <div class="example">
            <Example :file="path" :demo="formatPathDemos[path]" />
            <Transition :duration="550">
                <SourceCode :source="source" v-show="visibleCode"></SourceCode>
            </Transition>
            <div class="hidden-code" :class="[visibleCode ? 'is-hidden' : 'is-show']" @click="changeVisibleCode">{{  visibleCodeLabel }}</div>
        </div>
    </ClientOnly>
</template>
<script lang='ts' setup>
import Example from './components/example.vue';
import SourceCode from './components/SourceCode.vue';
import { ref, computed, onMounted } from 'vue'
const props = defineProps<{
    demos: Object,
    path: string,
    source: string,
    rawSource: string,
    description: string
}>()

/**
 * @description: 获取当前md对应的所有组件 
 * @param {*} computed
 * @return {*}
 */
const formatPathDemos = computed(() => {
    const demos = {}
    Object.keys(props.demos).forEach((key) => {
        demos[key.replace('../../../examples/', '').replace('.vue', '')] =
            props.demos[key].default
    })
    return demos
})

/**
 * @description: 获取当前对应的描述
 * @param {*} computed
 * @return {*}
 */
const decodedDescription = computed(() =>
    decodeURIComponent(props.description!)
)

// 展示代码
const visibleCode = ref()
/**
 * @description: 是否展示代码
 * @return {*}
 */
const changeVisibleCode = () => {
    visibleCode.value = !visibleCode.value
}
const visibleCodeLabel = computed(() => {
    return visibleCode.value ? '隐藏代码' : '展示代码'
})
onMounted(async () => {
    console.log(props.description);
})
</script>
<style lang='scss'>
.example {
    border: 1px solid var(--border-color);
    border-radius: var(--el-border-radius-base);

    .hidden-code {
        height: 40px;
        cursor: pointer;
        line-height: 40px;
        padding-left: 20px;

        &.is-hidden {
            border-top: 0;
        }

        &.is-hidden {
            border-top: 1px solid var(--border-color);
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: height 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    height: 0;
    opacity: 0;
}
</style>