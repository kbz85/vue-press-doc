<template>
    <ClientOnly>
        <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
        <p text="sm" v-html="decodedDescription" />
        <div class="example">
            <Example :file="path" :demo="formatPathDemos[path]" />
            <Transition :duration="550">
                <SourceCode :source="source" v-show="visibleCode"></SourceCode>
            </Transition>
            <div class="hidden-code" :class="[visibleCode ? 'is-hidden' : 'is-show']">
                <div class="show-code" @click="changeVisibleCode">{{ visibleCodeLabel }}</div>
                <CopyCode :code="rawSource"></CopyCode>
            </div>
        </div>
    </ClientOnly>
</template>
<script lang='ts' setup>
import Example from './components/example.vue';
import SourceCode from './components/SourceCode.vue';
import CopyCode from './components/CopyCode.vue';
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
    if (props.demos != null) {
        Object.keys(props.demos).forEach((key) => {
            demos[key.replace('../../../examples/', '').replace('.vue', '').toLowerCase()] =
                props.demos[key].default
        })
    }

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
        display: flex;

        .show-code {
            margin-right: 16px;
        }

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
.example:not(.dark) {
  --prism-background: #fff;
  --prism-foreground: #fff;
  --prism-selection-background: #dfe2f1;
  --prism-variable: #e90;
  --prism-function: #f81d22;
  --prism-builtin: #f81d22;
  --prism-keyword: #008dff;
  --prism-keyword: #008dff;
  --prism-number: #f81d22;
  --text-color: black;
  --border-color: #ccc;
}

.example.dark {
  --prism-background: #22272e;
  --prism-foreground: #22272e;
  --prism-selection-background: #dfe2f1;
  --prism-variable: #e90;
  --prism-function: #f81d22;
  --prism-builtin: #f81d22;
  --prism-keyword: #008dff;
  --prism-keyword: #008dff;
  --prism-number: #f81d22;
  --prism-property: #0b8235;
  --prism-string: #0b8235;
  --text-color: rgba(255, 255, 255, 0.85);
  --border-color: #4c4d4f;
}
</style>