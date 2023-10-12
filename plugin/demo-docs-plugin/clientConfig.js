import { defineClientConfig } from "@vuepress/client";
import { ref } from 'vue'
// import { usePageData } from '@vuepress/client'
import Demo from "./Demo.vue";

export default defineClientConfig({
  enhance({ app, siteData, router  }) {
    app.component("Demo", Demo);
  }
});
