import { SidebarConfigArray } from "vuepress";

const sidebar: SidebarConfigArray = [
  {
    text: "通用",
    collapsible: true,
    // collapsable: true,
    children: [
      {
        text: "Button 按钮",
        link: "/components/ant-ui/button/Button",
      },
    ],
  }
];
export default sidebar