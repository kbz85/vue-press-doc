import { SidebarConfig } from "vuepress";
import sidebarComponents from "../../components/sidebar";
import sidebarDocuments from "../../documents/sidebar";

const sidebar: SidebarConfig = {
  "/components/": sidebarComponents,
  "/documents/": sidebarDocuments,
};
export {
  sidebar
};
