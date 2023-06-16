<template>
  <div>
    <div class="q-pa-md">
      
      <q-btn color="white" text-color="black" label="Nueva forma de pago" @click="guardar" style="left: 1300px; margin-bottom: 20px; margin-top: 60px;
      border-radius: 30px;  "/>

      <q-table title="Forma de pago" :rows="rows" :columns="columns">
        <template v-slot:body-cell-estado="props" style="opacity: 0;">
          <td v-if="props.row.estado == 1" style="color:green; text-align: center;">Activo</td>
          <td v-else style="color:rgb(251, 2, 2); text-align: center;">Inactivo</td>
        </template>
        <template v-slot:body-cell-opcion="props" style="opacity: 0;"> 
          <td style="text-align: center;">
            <q-btn @click="edit(props.row)" class="">📝</q-btn>
            <q-btn v-if="props.row.estado == 1" @click="inactive(props.row)">🚫</q-btn>
            <q-btn v-else @click="active(props.row)">✅</q-btn>

          </td>
        </template>

      </q-table>
    </div>


      <q-dialog v-model="nuevo" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-teal text-dark"  style="width: 500px; max-width: 80vw;">

          <q-card-section style="background-color:rgb(14, 224, 14)  ; ">
            <div align= "center" class="text-h6">{{ bd == 0?"Guardar forma de pago": "Editar forma de pago" }}</div>

       

          </q-card-section>

          <q-card-section class="q-pt-none">
          <p>Nombre</p>
          <input type="text" v-model="nombre" class="form-input" >
          <p>Fecha</p>
          <input type="text" v-model="fecha" class="form-input">

          </q-card-section>

            <q-card-actions align="center" class="bg-white text-black">
            <q-btn  label="Cancelar" @click="nuevo=false" style="background-color: rgb(243, 9, 9)"/>
            <q-btn  @click="guardarEditarDatos" style="background-color: rgb(14, 224, 14)">{{ bd == 0?"Guardar ": "Editar "  }} </q-btn> 

       
            
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

</template>

<script setup>
import { ref,} from "vue"
import { FpagoStore } from "../stores/Forma_pago"
import { useQuasar } from 'quasar'

const q=useQuasar()
const getFpago = FpagoStore()
let rows = ref()

let nombre = ref("");
let fecha = ref ("");


let nuevo= ref(false)
let bd= ref (0)
let _id=""

let columns = ref([
  { name: 'nombre',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: "nombre",sortable: false},
  { name: 'fecha', align: 'center', label: 'Fecha', field: "fecha", sortable: true },
  { name: 'estado', label: 'Estado', field: 'estado', align: "center" },
])

const listarFpago = async () => {
  const res = await FpagoStore.getFpago()
  rows.value = res == null ? [] : res
  console.log("fp")
};

listarFpago()

function edit (row){
  console.log(row._id);
  bd.value=1;
  nuevo.value=true
  _id = row. _id;
  nombre.value = row.nombre;
  fecha.value = row.fecha;

}

function guardar (){
  bd.value=0
  nuevo.value=true;
  limpiarFormulario(); // Limpia los valores del formulario antes de abrir el modal
  nuevo.value = true;

 

  

  // postUser.addUser(nuevoUsuario).then(() => {
  //   listarUsuarios();
    
    
  // })
  
}
async function inactive(props) {
  let res = await getFpago.inactiveFpago(props._id);
  listarFpago()
}

async function active(props) {
  let res = await getFpago.activeFpago(props._id);
  listarFpago()
}

function limpiarFormulario() {
  nombre.value = "";
  fecha.value = "";
  rol.value = "";
  bd.value = 0;
}


  async function guardarEditarDatos(){

 if(bd.value == 0 ){
  const datos = {
    nombre: nombre.value,
    fecha: fecha.value,
    estado:0,
  };
  // console.log("guardar ",  datos);
  let res = await getFpago.addFpago(datos);
  listarFpago()
  console.log(res.response.data);
 }else{
  const datos = {
    nombre: nombre.value,
    fecha: fecha.value,
    estado:1,
  };
  console.log("editar ", datos);
  let res = await getFpago.editFpago(_id, datos);
  listarFpago()
  console.log(res);
  q.notify({
      type: "positive",
      message: "Forma de pago actualizada exitosamente.",
      position: "top",
    });
 }
}


listarFpago()

</script>

<style lang="scss" scoped>

.q-pt-none {
  background-color: #ffffff; /* Establecer el color de fondo del cuadro de diálogo */
}

.q-card {
  border-radius: 8px; /* Agregar radio de borde a la tarjeta */
}

.q-card-section {
  padding: 20px; /* Aumentar el relleno de las secciones de la tarjeta. */
  

}

.q-card-actions {
  justify-content: flex-end; /* Alinear las acciones de la tarjeta a la derecha */
}

.q-btn {
  margin-left: 10px; /* Añade algo de espacio entre los botones. */
}

input[type="text"] {
  width: 100%; /* Hacer que las entradas de texto ocupen todo el ancho */
}

.text-h6 {
  font-size: 1.25rem; /* Aumentar el tamaño de fuente del título de la sección.*/
}
.q-btn:hover{
  background-color: rgb(14, 224, 14);
}
.form-input {
    margin-bottom: 30px; /* Ajusta el margen inferior entre los campos */
   
  }
  </style>