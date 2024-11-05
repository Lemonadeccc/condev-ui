import { createApp } from "vue";
import App from "./App.vue";
import CondevElement from "condev-element";

// import "@condev-element/theme/index.css";
import "condev-element/dist/index.css";

createApp(App).use(CondevElement).mount("#app");
