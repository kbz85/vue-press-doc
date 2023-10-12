import { defineClientConfig } from "@vuepress/client";
import Layout from './components/Layout.vue'
import NotFound from './components/NotFound.vue'

export default defineClientConfig({
  layouts: {
    NotFound,
    Layout
  },
});
