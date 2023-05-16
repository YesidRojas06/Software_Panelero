import Mantenimiento from "../components/Mantenimiento.vue";
import Inventario from "../components/Inventario.vue";
import Pedidos from "../components/Pedidos.vue";
import Reportes from "../components/Reportes.vue";
import Home from "../components/Home.vue";
import Usuarios from "../components/Usuarios.vue";
import Homee from "../pages/Homee.vue";
import Login from "../pages/Login.vue";
import Pedido2 from "../components/Pedido2.vue"


import Transformacion from "../components/Transformacion/Transformacion.vue";
import Iventario from "../components/Transformacion/Modulos/Iventario.vue";
import Materia_Prima_Tranformada from "../components/Transformacion/Modulos/Materia_Prima_Tranformada.vue";
import Procesos_Diarios from "../components/Transformacion/Modulos/Procesos_Diarios.vue";



import Costos from "../components/Costos/Costos.vue";
import Pagos from "../components/Costos/Modulos/Pagos.vue";
import Gastos_Mensuales from "../components/Costos/Modulos/Gastos_Mensuales.vue";
import Gastos_Ocasionales from "../components/Costos/Modulos/Gastos_Ocasionales.vue";


export const routes = [
  { path: "/", component: Login },
  // { path: "/login", component: Login },
  { path: "/homee", component:Homee, children: [
    { path: "/home", component:Home },
    { path: "/mantenimiento", component:Mantenimiento },
    { path: "/pedidos", component:Pedidos },
    { path: "/inventario", component: Inventario },
    { path: "/reportes", component: Reportes },
    { path: "/usuarios", component: Usuarios },
    { path: "/Pedido2", component: Pedido2 },


    { path: "/Transformacion", component: Transformacion },
    { path: "/Transformacion/Modulos/Iventario", component: Iventario },
    { path: "/Transformacion/Modulos/Materia_Prima_Tranformada", component: Materia_Prima_Tranformada },
    { path: "/Transformacion/Modulos/Procesos_Diarios", component: Procesos_Diarios },



    { path: "/costos", component: Costos },
    { path: "/Costos/Modulos/Pagos", component: Pagos },
    { path: "/Costos/Modulos/Gastos_Mensuales", component: Gastos_Mensuales },
    { path: "/Costos/Modulos/Gastos_Ocasionales", component: Gastos_Ocasionales },

    ] 
  },
  
];
