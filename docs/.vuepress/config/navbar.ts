import { NavbarConfig } from "vuepress";
const navbar: NavbarConfig = [
  { text: "组件", link: "/components/" },
  { text: "文档", link: "/documents/" },
  {
    text: "工具箱",
    children: [
      {
        text: "在线编辑",
        children: [
          {
            text: "图片压缩",
            link: "https://tinypng.com/",
          },
        ],
      },
      {
        text: "在线服务",
        children: [
          {
            text: "阿里云",
            link: "https://www.aliyun.com/",
          },
          {
            text: "腾讯云",
            link: "https://cloud.tencent.com/",
          },
        ],
      },
      {
        text: "博客指南",
        children: [
          {
            text: "掘金",
            link: "https://juejin.im/",
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/",
          },
        ],
      },
    ],
  },
];
export {
  navbar
};
