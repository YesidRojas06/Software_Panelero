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


import Materia_Prima from "../components/Materia_Prima.vue";
import Proceso_diario from "../components/Proceso_diario.vue";
import Empaques from "../components/Empaques.vue"

import Pagos from "../components/Pagos.vue";
import Gastos_Mensuales from "../components/Gastos_Mensuales.vue";
import Gastos_Ocacionales from "../components/Gastos_Ocacionales.vue"



// import Transformacion from "../components/transformacion.vue"


export const routes = [
  { path: "/", component: Login },
  // { path: "/login", component: Login },
  { path: "/homee", component:Homee, children: [
    { path: "/home", component:Home },
    { path: "/Mantenimiento", component:Mantenimiento },
    { path: "/pedidos", component:Pedidos },
    { path: "/inventario", component: Inventario },
    { path: "/costos", component: Costos },
    { path: "/transformacion", component: Transformacion },
    { path: "/reportes", component: Reportes },
    { path: "/usuarios", component: Usuarios },
    { path: "/Pedido2", component: Pedido2 },
    { path: "/Labores", component: Labores },
    { path: "/Bodegas", component: Bodegas },
    { path: "/transformacion", component: Bodegas },

    { path: "/Materia_Prima", component: Materia_Prima },
    { path: "/Proceso_diario", component: Proceso_diario },
    { path: "/Empaques", component: Empaques },

    { path: "/Pagos", component: Pagos },
    { path: "/Gastos_Mensuales", component: Gastos_Mensuales },
    { path: "/Gastos_Ocacionales", component: Gastos_Ocacionales },





    ] 
  },
  
];
