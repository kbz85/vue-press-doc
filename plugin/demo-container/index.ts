import { getDirname, path } from "@vuepress/utils";
import demoBlockContainers from "./common/container";

const __dirname = getDirname(import.meta.url);
const demoContainerPlugin = (options) => {
  return {
    name: "vuepress-plugin-demo-container",
    clientConfigFile: path.resolve(__dirname, "./clientConfig.js"),
    // extendsMarkdownOptions: (markdownOptions, app) => {
    //   demoBlockContainers(markdownOptions);
    // },
    extendsMarkdown: (md) => {
      // const render = md.render;
      // console.log(789, render, typeof render.call(md, ''));

      // console.log(7878, typeof render.call(md, ''));

      // md.render = (...args) => {
      // let result = render.call(md, ...args);
      // console.log(999, result);

      //   // console.log(778899, args);
      //  return ''
      // }
    },
  };
};

export { demoContainerPlugin };
