import Pedidos from "../components/Pedidos.vue";
import Reportes from "../components/Reportes.vue";
import Home from "../components/Home.vue";
import Homee from "../pages/Homee.vue";
import Login from "../pages/Login.vue";
import Pedido2 from "../components/Pedido2.vue";


//Inventario
import Inventario from "../components/Inventario.vue";
import Bodegas from "../components/Bodegas.vue";
import Categorias from "../components/Categorias.vue";
import Marcas from "../components/Marcas.vue";
import Productos from "../components/Productos.vue";



//Transformacion
import Transformacion from "../components/Transformacion.vue";
import Materia_Prima from "../components/Materia_Prima.vue";
import Proceso_diario from "../components/Proceso_diario.vue";
import Empaques from "../components/Empaques.vue"


//Costos
import Costos from "../components/Costos.vue";
import Pagos from "../components/Pagos.vue";
import Gastos_Mensuales from "../components/Gastos_Mensuales.vue";
import Gastos_Ocasionales from "../components/Gastos_Ocasionales.vue"

//Mantenimineto 
import Mantenimiento from "../components/Mantenimiento.vue";
import Usuarios from "../components/Usuarios.vue";
import Labores from "../components/Labores.vue"
import Forma_pago from "../components/Forma_pago.vue"
import Tipo_pago from "../components/Tipo_pago.vue"
import Unidad_Medida from "../components/Unidad_Medida.vue"
import Eps from "../components/Eps.vue"
import Tipo_Documento from "../components/Tipo_Documento.vue"
import Lotes from "../components/Lotes.vue"
import Numero_Etapa from "../components/Numero_Etapa.vue"
import Numero_Finca from "../components/Numero_Finca.vue"
//empaques ya esta llamada en transofrmacion
import Soporte from "../components/Soporte.vue"



// import Transformacion from "../components/transformacion.vue"


export const routes = [
  { path: "/", component: Login },
  // { path: "/login", component: Login },
  { path: "/homee", component:Homee, children: [
    { path: "/home", component:Home },
    { path: "/pedidos", component:Pedidos },
    { path: "/reportes", component: Reportes },
    { path: "/Pedido2", component: Pedido2 },




    //Tansformacion
    { path: "/Transformacion", component: Transformacion },
    { path: "/Empaques", component: Empaques },
    { path: "/Materia_Prima", component: Materia_Prima },
    { path: "/Proceso_diario", component: Proceso_diario },



    //Inventario
    { path: "/Inventario", component: Inventario },
    { path: "/Bodegas", component: Bodegas },
    { path: "/Categorias", component: Categorias },
    { path: "/Marcas", component: Marcas },
    { path: "/Productos", component: Productos },




    //costos
    { path: "/Costos", component: Costos },
    { path: "/Gastos_Mensuales", component: Gastos_Mensuales },
    { path: "/Gastos_Ocasionales", component: Gastos_Ocasionales },
    { path: "/Pagos", component: Pagos },


    //Mantenimineto
    { path: "/usuarios", component: Usuarios },
    { path: "/Mantenimiento", component:Mantenimiento },
    { path: "/Labores", component: Labores },
    { path: "/Forma_pago", component: Forma_pago },
    { path: "/Tipo_pago", component: Tipo_pago },
    { path: "/Unidad_Medida", component: Unidad_Medida },
    { path: "/Eps", component: Eps },
    { path: "/Tipo_Documento", component: Tipo_Documento },
    { path: "/Lotes", component: Lotes },
    { path: "/Numero_Etapa", component: Numero_Etapa },
    { path: "/Numero_Finca", component: Numero_Finca },
    { path: "/Mantenimiento", component: Empaques }, //llada a empaques 
    { path: "/Soporte", component: Soporte },

   
    ] 
  },
  
];
