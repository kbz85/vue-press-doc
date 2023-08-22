import { getDirname, path } from "@vuepress/utils";
import { default as shiki } from '@vuepress/plugin-shiki'
import { demoblock } from "./common/container";

// 了解 Markdown 语法： 首先，你需要对 Markdown 的基本语法有一定的了解，特别是自定义代码块的语法。在 VuePress 中，::: 被用作自定义代码块的开始和结束标记。
// 分析解析流程： 确定解析过程的流程，包括如何识别 ::: 自定义代码块的开始和结束，以及如何提取其中的内容。你可以使用正则表达式或字符串匹配等方法进行内容的提取。
// 定义解析规则： 根据你的需求，确定在 ::: 自定义代码块中应该解析的内容类型。例如，你可能希望解析 Vue 组件、HTML 代码、纯文本等。
// 解析内容： 根据解析规则，将提取到的内容进行相应的处理。如果你要解析 Vue 组件，你可能需要将组件名称转换为实际的 Vue 组件，并进行渲染。
// 生成输出： 将解析后的内容生成最终的输出，可以是 HTML 格式或其他格式，用于在文档中渲染。
// 插件化： 如果你希望将这个功能做成一个插件，需要考虑如何将解析器集成到 VuePress 的插件系统中，以便在文档中使用。

const __dirname = getDirname(import.meta.url);
const demoContainerPlugin = ({
  theme = 'css-variables',
  langs,
}) => {
  return {
    name: "vuepress-plugin-demo-container",
    clientConfigFile: path.resolve(__dirname, "./clientConfig.js"),
    extendsMarkdown: async (md) => {
      await (shiki({ theme, langs }) as any).extendsMarkdown(md)
      md.use(demoblock, {})
    },
  };
};

export { demoContainerPlugin };
