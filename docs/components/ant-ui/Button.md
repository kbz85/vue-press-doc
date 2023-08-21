<Button type="primary">123123</Button>
<DemoBlock></DemoBlock>

<script lang='ts' setup>
import { Button } from 'ant-design-vue'
</script>

## 介绍
Demo Container 是一个基于 Vuepress 的插件，它可以帮助你在编写文档的时候增加 Vue 示例，它的诞生初衷是为了降低编写组件文档时增加一些相关示例的难度。

使用 Vuepress 编写组件示例有以下尴尬之处：

组件示例和示例代码本质上一样，却需要写两遍；

Vuepress 无法渲染 Markdown 中多个 export default {} 代码块；

Demo Container 参考了 Element UI 的文档渲染，实现了和它一样的，可在 Markdown 中直接编写示例的语法。

Element UI ColorPicker 组件的文档编写示例，点此查看
Element UI ColorPicker 组件的文档示例预览，点此查看。
#它是如何工作的？
Demo Container 使用 Vuepress 的 chainMarkdown、extendMarkdown API 拓展了其内部的 markdown 对象，并做了以下操作：

基于 markdown-it-container 构建了一个识别以下代码块的插件
:::demo xxx
xxx
:::
为其包裹 组件，并拾取示例代码使用 <!--pre-render-demo:${content}:pre-render-demo--> 注释的方式缓存，等待后续读取，具体实现 点此查看;

拓展 markdown.render 方法，在其渲染结果的基础上，读取 pre-render-demo 注释的示例代码，使用 vue-template-compiler 将其编译成 Redner Function，并作为整个示例页面的子组件引入，拓展后的方法输出的内容为符合 Vue Template 语法的代码块，具体实现 点此查看;

示例页面代码后续将被 vue-loader 处理，编译为最终文档。

## 渲染效果是？
以下是使用 Demo Container 插件渲染的一个组件示例

其展示效果参照了 Element UI 文档组件 demo-block.vue 的实现

Change the repo name and press enter, such as vuejs/vue.
Latest Commits
 master dev
calebman/vuepress-plugin-demo-container@master

d049d00 - Merge pull request #6 from calebman/dependabot/npm_and_yarn/prismjs-1.21.0
by chenjianhui at 2020-08-27 00:55:24
5a6d967 - Merge pull request #8 from calebman/dependabot/npm_and_yarn/elliptic-6.5.3
by chenjianhui at 2020-08-27 00:55:12
4f9a571 - build(deps): bump prismjs from 1.20.0 to 1.21.0
by dependabot[bot] at 2020-08-19 01:23:02
这个例子参考了 Vue 官方文档示例中 GitHub 提交 实现，使用 Github API 获取仓库最新的提交数据，并且以列表形式将它们展示了出来。

:::tip
6666
:::

复制
## 为什么不是...?
有没有其他的选择

笔者在创造 Demo Container 之前尽可能的搜索了符合上述需求的插件，找到了以下几款有用的插件，如果有其他的可用插件被笔者遗漏了，可通过提 Issus 的方式补充，十分感谢。

## vuepress-plugin-demo-block
仓库地址 点此查看，该插件的使用方式和笔者理想方式完全一致，其实现原理是：

通过 Vuepress clientRootMixin API 混入页面的 mounted、updated 生命周期，读取示例代码分离 template、script、style 代码块：

template 包裹的代码块直接插入示例节点;
script 包裹的代码块通过 Vue.extend 编译出 Vue 对象，再调用其 $mount() 方法挂载到示例 dom;
style 包裹的代码块直接插入 document;
这么做的问题是 template 代码块中不能包含 Vuepress 中全局注册的组件，而编写组件库示例必然会依赖全局注册的组件。

## uepress-plugin-demo-code
仓库地址 点此查看，该插件的使用方式和 demo-block 一样属于理想方式，插件的工作流程和 Demo Container 有相似之处，其实现原理是：

通过 Vuepress extendMarkdown API 拓展内部 markdown 对象，进而识别 ::: demo xxx ::: 代码块，将其包裹的示例代码直接插入 Markdown 文档等待 vue-loader 处理。

这么做的问题是 只有第一个示例的 export default {} 代码块会被成功识别，因为 vue-loader 编译单个文件时只会处理首次匹配到包裹 的代码块。

## vuepress-plugin-extract-code
仓库地址 点此查看，该插件的使用方式和笔者理想方式不太一致，但是它解决了组件示例和代码需要写两遍的问题，其实现原理是：

提供了一个 RecoDemo 组件用于在 Markdown 中构造示例页面，并通过 Vuepress chainMarkdown API 给 Vuepress 内部的 markdown 添加一个插件，该插件负责，手动解析RecoDemo中的<<< @/docs/.vuepress/demo/demo.vue?template语法，识别代码块并添加到示例代码说明中，不太清楚该语法的可以点此查看说明。

这么做利用了 Vuepress 可以编译 Vue 组件的特性，使用上没有啥问题，但是如果一个组件使用文档中包含多个示例的话，即使单个示例代码很少，你也得为它建立一个文件并全局注册到 Vuepress，其产生的问题就是维护麻烦。