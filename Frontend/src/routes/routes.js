import Home from "../components/Home.vue";
import News from "../components/News.vue";
import Store from "../components/Register.vue";
import Profile from "../components/Profile.vue";

import Homee from "../pages/Homee.vue"
import Details from "../pages/Details.vue"
import Login from "../pages/Login.vue";

export const routes = [
  { path: "/", component: Login },
  // { path: "/login", component: Login },
  { path: "/homee", component:Homee, children: [
    { path: "/home", component:Home },
    { path: "/profile", component:Profile },
    { path: "/news", component: News },
    { path: "/register", component: Store },
    ] 
  },
  { path: "/details", component:Details },
];
