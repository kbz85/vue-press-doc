<template>
    <div class="toc-wrapper" ref="container">
        <Anchor :items="headers" :getContainer="getContainer" :offsetTop="10"></Anchor>
    </div>
</template>
<script lang='ts' setup>
import { usePageData } from '@vuepress/client'
import { ref, computed } from 'vue'
import { Anchor } from 'ant-design-vue'
const data = usePageData()

const headers = computed(() => {
    return data.value.headers.map((item) => {
        return {
            key: item.title,
            href: item.link,
            title: item.title
        }
    })
})

function getContainer() {
    return document.getElementById('content') as HTMLDivElement
}

</script>
<style lang='scss'>
.toc-wrapper {
    width: 100%;
    height: 100%;

    .toc-items {
        // list-style: none;
        // padding: 0;
        // margin: 12px 0 0;
        // line-height: 1.2;

        // .toc-item {
        //     margin-top: 10px;
        //     font-size: 11px;
        //     color: var(--text-color-lighter);
        //     text-overflow: ellipsis;
        //     overflow: hidden;
        //     white-space: nowrap;
        //     color: inherit;

        //     .toc-link {
        //         display: inline-block;
        //         position: relative;
        //         color: var(--text-color-lighter);
        //         transition: color var(--el-transition-duration);

        //         &.active {
        //             color: var(--brand-color);
        //         }
        //     }

        //     &.subitem {
        //         padding-left: 1rem;
        //     }
        // }
    }
}
</style>