import { SidebarConfigArray } from "vuepress";

const sidebar: SidebarConfigArray = [
  {
    text: "文档",
    collapsible: true,
    // collapsable: true,
    children: [
      {
        text: "编写组件文档",
        link: "/documents/WriteComponent/",
      },
    ],
  }
];
export default sidebar