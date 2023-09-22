import { defineClientConfig } from "@vuepress/client";
import { ref } from 'vue'
import Demo from "./Demo.vue";

export default defineClientConfig({
  enhance({ app, siteData, router  }) {
    console.log(99999, import.meta.url);
    app.component("Demo", Demo);
  },
  // async setup() {
  //   // console.log(app);
  //   const demos = import.meta.glob('@examples/button/**.vue')
  //   console.log(666022, demos);
  // },
});
