import { defineClientConfig } from "@vuepress/client";
import DemoBlock from "./DemoBlock.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("DemoBlock", DemoBlock);
  }
});
