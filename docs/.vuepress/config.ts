import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import {
  navbar,
  sidebar
} from './config/index'
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { demoPlugin } from "../../plugin/demo-docs-plugin"
// import './styles/index.scss'
export default defineUserConfig({
  lang: "zh-CN",
  title: "Trustmo UI",
  description: "前端文档组件库",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href: "/images/hero.png",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  theme: defaultTheme({
    // 导航栏
    navbar: navbar,
    sidebar: sidebar,
  }),
  plugins: [
    backToTopPlugin(),
    nprogressPlugin(),
    activeHeaderLinksPlugin(),
    demoPlugin()
    // shikiPlugin()
    // demoContainerPlugin({}),
    // demoblockPlugin()
  ],
  port: 8090
});
