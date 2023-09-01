import { defineClientConfig } from "@vuepress/client";
import { ref } from 'vue'
import Demo from "./Demo.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Demo", Demo);
  },
  setup() {
    const demos = ref(123123)
    console.log(123123, demos.value);
  },
});
