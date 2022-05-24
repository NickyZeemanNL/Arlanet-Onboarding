import { createApp } from "vue";
import { createPinia } from "pinia";

// Apps
import template from "./vue/apps/template/template";

// Pinia
const pinia = createPinia();

// Mounting containers
const templateMountingContainer = document.getElementById("template");

if (templateMountingContainer) {
  createApp(template).use(pinia).mount(templateMountingContainer);
}
