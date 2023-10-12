import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);
const tmLayoutPlugin = () => {
    return {
        name: "vuepress-plugin-tm-layout",
        clientConfigFile: path.resolve(__dirname, "./clientConfig.js")
    }
}

export {
    tmLayoutPlugin
}