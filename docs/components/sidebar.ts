import { SidebarConfigArray } from "vuepress";

const sidebar: SidebarConfigArray = [
  {
    text: "通用",
    collapsible: true,
    // collapsable: true,
    children: [
      {
        text: "Button 按钮",
        link: "/components/ant-ui/Button",
      },
      {
        text: "Switch 开关",
        link: "/components/ant-ui/Switch",
      },
    ],
  }
];
export default sidebar