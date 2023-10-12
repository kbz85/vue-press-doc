<template>
    <div class="home-layout" v-if="isHome">
        <div class="top">
            <Navbar></Navbar>
        </div>
        <div class="bottom">
            <Home></Home>
        </div>
    </div>
    <div class="base-layout" v-else>
        <ConfigProvider :theme="antTheme">
            <div class="top">
                <Navbar ref="NavbarRef"></Navbar>
            </div>
            <div class="bottom">
                <div class="left">
                    <Sidebar v-if="hasSidebar"></Sidebar>
                </div>
                <div class="center">
                    <div class="content" id="content" :key="inChangeRoute">
                        <Content></Content>
                        <PageMeta></PageMeta>
                    </div>
                </div>
                <div class="right">
                    <Toc></Toc>
                </div>
            </div>
        </ConfigProvider>
    </div>
</template>
<script lang='ts' setup>
import Navbar from '@theme/Navbar.vue'
import Sidebar from '@theme/Sidebar.vue'
import PageMeta from '@theme/PageMeta.vue'
import Home from './Home.vue'
import Toc from './Toc.vue';
import { computed } from 'vue'
import { usePageFrontmatter, useRouteLocale, usePageData } from '@vuepress/client'
import { theme, ConfigProvider } from 'ant-design-vue';
import { useStorage } from '@vueuse/core';
import { useThemeData } from '@vuepress/plugin-theme-data/client'

const pageFormatter = usePageFrontmatter()
const isHome = computed(() => {
    return pageFormatter.value.home
})


const darkStorage = useStorage('vuepress-color-scheme', 'auto');
const antTheme = computed(() => {
    if (darkStorage.value === 'dark') {
        return {
            algorithm: theme.darkAlgorithm
        }
    } else {
        return {
            algorithm: theme.defaultAlgorithm
        }
    }
})
const themeData = useThemeData()
const pageData = usePageData()

// 是否包含侧边栏
const hasSidebar = computed(() => {
    const basePath = pageData.value.path.split('/')[1]
    // console.log(basePath, pageData.value, themeData.value);
    const sidebars = themeData.value.sidebar
    const currentSidebar = Object.keys(sidebars).find((key) => {
        return key === `/${basePath}/`
    })
    if (currentSidebar) {
        const len = sidebars[currentSidebar].length
        if (len > 0) return true
    }
    return false
})

const route = useRouteLocale()
const inChangeRoute = computed(() => {
    console.log(123123, pageData.value.path);
    return pageData.value.path
})
// const  = useRouteLocale()
// console.log(themeData.value, routeData.value)
</script>
<style lang='scss' scoped>
.home-layout {
    width: 100%;
    height: 100%;

    .top {
        width: 100%;
        height: 60px;
    }

    .bottom {
        width: 100%;
        height: calc(100% - 60px);
    }
}

.base-layout {
    width: 100%;
    height: 100%;

    .top {
        width: 100%;
        height: 60px;
    }

    .bottom {
        width: 100%;
        height: calc(100% - 60px);

        .left {
            width: 240px;
            height: 100%;
            float: left;
        }

        .center {
            width: calc(100% - 240px - 210px - 20px);
            height: 100%;
            float: left;
            padding: 40px 0;
            margin-right: 20px;

            .content {
                width: 100%;
                height: 100%;
                overflow-y: auto;
                padding: 0 60px;
            }
        }

        .right {
            width: 200px;
            height: 100%;
            float: left;
            padding: 60px 0;
            margin-right: 10px;
            position: fixed;
            top: 60px;
            right: 0;
        }
    }

}
</style>