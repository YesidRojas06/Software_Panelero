import { createApp } from "vue";
// import './style.css'
import axios from 'axios';
import { Quasar } from "quasar";
import App from "./App.vue";
const app = createApp(App);
// importacion pinia 
import { createPinia } from 'pinia'
const pinia = createPinia()

// createApp(App).mount('#app')

// import quasar
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/bootstrap-icons/bootstrap-icons.css";
// Import Quasar css
import "quasar/src/css/index.sass";

import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes/routes.js";

const router = createRouter(
  { history: createWebHashHistory(), routes, }
  );

app.use(Quasar, { plugins: {}, });
app.use(pinia);
app.use(router);
app.mount("#app");