import Mantenimiento from "../components/Mantenimiento.vue";
import Pedidos from "../components/Pedidos.vue";
import Reportes from "../components/Reportes.vue";
import Home from "../components/Home.vue";
import Usuarios from "../components/Usuarios.vue";
import Homee from "../pages/Homee.vue";
import Login from "../pages/Login.vue";
import Pedido2 from "../components/Pedido2.vue";
import Labores from "../components/Labores.vue";


//Inventario
import Inventario from "../components/Inventario/Inventario.vue";
import Bodegas from "../components/Inventario/Modulos/Bodegas.vue";
import Categorias from "../components/Inventario/Modulos/Categorias.vue";
import Marcas from "../components/Inventario/Modulos/Marcas.vue";
import Productos from "../components/Inventario/Modulos/Productos.vue";



//Transformacion
import Transformacion from "../components/Transformacion/Transformacion.vue";
import Materia_Prima from "../components/Transformacion/Modulos/Materia_Prima.vue";
import Proceso_diario from "../components/Transformacion/Modulos/Proceso_diario.vue";
import Empaques from "../components/Transformacion/Modulos/Empaques.vue"


//Costos
import Costos from "../components/Costos/Costos.vue";
import Pagos from "../components/Costos/Modulos/Pagos.vue";
import Gastos_Mensuales from "../components/Costos/Modulos/Gastos_Mensuales.vue";
import Gastos_Ocacionales from "../components/Costos/Modulos/Gastos_Ocacionales.vue"



// import Transformacion from "../components/transformacion.vue"


export const routes = [
  { path: "/", component: Login },
  // { path: "/login", component: Login },
  { path: "/homee", component:Homee, children: [
    { path: "/home", component:Home },
    { path: "/Mantenimiento", component:Mantenimiento },
    { path: "/pedidos", component:Pedidos },
    { path: "/reportes", component: Reportes },
    { path: "/usuarios", component: Usuarios },
    { path: "/Pedido2", component: Pedido2 },
    { path: "/Labores", component: Labores },




    //Tansformacion
    { path: "/Transformacion", component: Transformacion },
    { path: "/Transformacion/Modulos/Empaques", component: Empaques },
    { path: "/Transformacion/Modulos/Materia_Prima", component: Materia_Prima },
    { path: "/Transformacion/Modulos/Proceso_diario", component: Proceso_diario },



    //Inventario
    { path: "/Inventario", component: Inventario },
    { path: "/Inventario/Modulos/Bodegas", component: Bodegas },
    { path: "/Inventario/Modulos/Categorias", component: Categorias },
    { path: "/Inventario/Modulos/Marcas", component: Marcas },
    { path: "/Inventario/Modulos/Productos", component: Productos },




    //costos
    { path: "/Costos", component: Costos },
    { path: "/Costos/Modulos/Gastos_Mensuales", component: Gastos_Mensuales },
    { path: "/Costos/Modulos/Gastos_Ocacionales", component: Gastos_Ocacionales },
    { path: "/Costos/Modulos/Pagos", component: Pagos },




    ] 
  },
  
];
