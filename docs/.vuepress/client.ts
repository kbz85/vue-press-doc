/**
 * 客户端配置文件
 * 参考： 
 * https://v2.vuepress.vuejs.org/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6
 * https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html
 */
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  layouts: {},
  rootComponents: [],
})
