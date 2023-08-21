import { SidebarConfigArray } from "vuepress";

const sidebar: SidebarConfigArray = [
  {
    text: "vuepress",
    collapsible: true,
    // collapsable: true,
    children: [
      {
        text: "创建插件",
        link: "/documents/vuepress/CreatePlugin",
      },
    ],
  }
];
export default sidebar