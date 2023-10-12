import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { navbar, sidebar } from "./config/index";
import { palettePlugin } from "@vuepress/plugin-palette"
import { demoPlugin } from "../../plugin/demo-docs-plugin"
import { tmLayoutPlugin } from "../../plugin/tm-layout-plugin"
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
    themePlugins: {
      activeHeaderLinks: true,
      backToTop: true,
      container: {
        tip: true,
        warning: true,
        danger: true,
        details: true,
        codeGroup: true,
        codeGroupItem: true
      },
      externalLinkIcon: true,
      mediumZoom: true,
      nprogress: true,
    },
  }),
  plugins: [
    palettePlugin({ preset: "sass" }),
    tmLayoutPlugin(),
    demoPlugin(),
  ],
  port: 8090,
});
