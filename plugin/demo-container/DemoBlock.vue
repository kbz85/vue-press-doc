<template>
    <div :class="['demo-block', customClass ? customClass : '']">
        <div class="demo-content">
            <!-- {{  sourceCode }} -->
            <slot>i</slot>
        </div>
        <div class="meta" ref="meta">
            <div class="description" v-if="$slots.description">
                <slot name="description"></slot>
            </div>
            <div class="code-content">
                <slot name="highlight"></slot>
            </div>
        </div>
        <div class="">
            <div class="control-button-wrap">
                <span @click.stop="handleCopy">复制代码</span>  
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { useClipboard } from '@vueuse/core'
import { message } from 'ant-design-vue'
const props = defineProps<{
    customClass: string
    sourceCode: string
}>()
//  复制代码
const { copy } = useClipboard()
const handleCopy = async () => {
    try {
        copy(props.sourceCode)
        message.success('复制成功')
    } catch (error) {
        console.log(error);
        
    }
}
</script>
<style lang="css" scoped>
.demo-block {
    border: solid 1px #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    margin-top: 15px;
    margin-bottom: 15px;
}

.demo-block:hover,
.demo-block:active {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}

.demo-block .demo-content {
    padding: 24px;
}
</style>
