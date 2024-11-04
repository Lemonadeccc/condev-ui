import { createApp } from "vue";
import App from "./App.vue";
import "@condev-element/theme/index.css";

import CondevElement from "condev-element";

createApp(App).use(CondevElement).mount("#app");
