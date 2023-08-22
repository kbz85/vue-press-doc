import { defineClientConfig } from "@vuepress/client";
import DemoBlock from "./DemoBlock.vue";
import './styles/var.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component("demo", DemoBlock);
  }
});
