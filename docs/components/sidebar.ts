import { SidebarConfigArray } from "vuepress";

const sidebar: SidebarConfigArray = [
  {
    text: "通用",
    collapsible: true,
    // collapsable: true,
    children: [
      // {
      //   text: "案例",
      //   link: "/components/",
      // },
      {
        text: "Button 按钮",
        link: "/components/ant-ui/Button",
      },
    ],
  }
];
export default sidebar