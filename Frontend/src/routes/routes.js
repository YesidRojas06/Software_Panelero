import Mantenimiento from "../components/Mantenimiento.vue";
import Inventario from "../components/Inventario.vue";
import Costos from "../components/Costos.vue";
import Pedidos from "../components/Pedidos.vue";
import Transformacion from "../components/Transformacion.vue";
import Reportes from "../components/Reportes.vue";
import Home from "../components/Home.vue";
import Usuarios from "../components/Usuarios.vue";
import Homee from "../pages/Homee.vue";
import Login from "../pages/Login.vue";
import Pedido2 from "../components/Pedido2.vue"
import Labores from "../components/Labores.vue"
import Bodegas from "../components/Bodegas.vue"

export const routes = [
  { path: "/", component: Login },
  // { path: "/login", component: Login },
  { path: "/homee", component:Homee, children: [
    { path: "/home", component:Home },
    { path: "/mantenimiento", component:Mantenimiento },
    { path: "/pedidos", component:Pedidos },
    { path: "/inventario", component: Inventario },
    { path: "/costos", component: Costos },
    { path: "/transformacion", component: Transformacion },
    { path: "/reportes", component: Reportes },
    { path: "/usuarios", component: Usuarios },
    { path: "/Pedido2", component: Pedido2 },
    { path: "/Labores", component: Labores },
    { path: "/Bodegas", component: Bodegas },

    ] 
  },
  
];
