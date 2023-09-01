import { getDirname, path } from "@vuepress/utils";
import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";
import type Renderer from "markdown-it/lib/renderer";
import type Token from "markdown-it/lib/token";
import fs from "fs";
import { highlight } from "./utils/highlight";
const __dirname = getDirname(import.meta.url);
interface ContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string;
}
//   const localMd = MarkdownIt().use(tag)
const demoPlugin = () => {
  return {
    name: "vuepress-plugin-demo-container",
    clientConfigFile: path.resolve(__dirname, "./clientConfig.js"),
    extendsMarkdown: async (md) => {
      md.use(mdContainer, "demo", {
        validate(params) {
          return !!params.trim().match(/^demo\s*(.*)$/);
        },

        render(tokens, idx) {
          const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
          if (tokens[idx].nesting === 1 /* means the tag is opening */) {
            const description = m && m.length > 1 ? m[1] : "";
            const sourceFileToken = tokens[idx + 2];
            let source = "";
            const sourceFile = sourceFileToken.children?.[0].content ?? "";
            
            if (sourceFileToken.type === "inline") {
              source = fs.readFileSync(
                path.resolve("docs", "examples", `${sourceFile}.vue`),
                "utf-8"
              );
            }
            if (!source)
              throw new Error(`Incorrect source file: ${sourceFile}`);
         
            return `<Demo :demos="demos" source="${encodeURIComponent(
              highlight(source, "vue")
            )}" path="${sourceFile}" raw-source="${encodeURIComponent(
              source
            )}" description="${encodeURIComponent(description)}">`;
          } else {
            // const componentId = path.basename('', '.md')
            // const _script = `<script lang='ts' setup>
            // // const demos = import.meta.globEager('docs/examples/button/*.vue')
            // </script><style lang='less'></style>`
            return "</Demo>";
          }
        },
      } as ContainerOpts);
    },
  };
};

export {
    demoPlugin
}