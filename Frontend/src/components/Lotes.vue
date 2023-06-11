<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Lotes</h1>
      </div>
      

      <q-table title="Lotes" :rows="rows" :columns="columns" class="tabla ">
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
      

      <q-btn
  color="white"
  text-color="black"
  label="Nuevo Lote"
  @click="guardar"
  class="q-ma-md q-mb-lg q-mt-xl q-ml-auto q-mr-auto q-col-xs-12 q-col-sm-6 q-col-md-4 q-col-lg-3"
  style="position: absolute; top: 150px; right: 40px; border-radius: 30px;"
/>



    </div>


      <q-dialog v-model="nuevo" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-teal text-dark"  style="width: 500px; max-width: 80vw;">

          <q-card-section style="background-color:rgb(14, 224, 14)  ; ">
            <div align= "center" class="text-h6">{{ bd == 0?"Guardar Lote": "Editar Lote" }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <p>codigo</p>
          <input type="text" v-model="codigo" class="form-input" >

          <p>nombres</p>
          <input type="text" v-model="nombres" class="form-input" >
          <!-- <input type="text" v-model="correo" class="form-input"> -->

          <p>descripcion</p>
         <input type="text" v-model="descripcion" class="form-input" >


         <p>tamaño</p>
         <input type="text" v-model="tamaño" class="form-input">

         <p>Estado Sueldo</p>
         <input type="text" v-model="estadoSueldo" class="form-input" >

         <p>clase</p>
         <input type="text" v-model="clase" class="form-input">

         <p>padre</p>
         <input type="text" v-model="padre" class="form-input" >

         <p>densidad</p>
         <input type="text" v-model="densidad" class="form-input">



          
         
          </q-card-section>

            <q-card-actions align="center" class="bg-white text-black">
            <q-btn  label="Cancelar" @click="nuevo=false" style="background-color: rgb(243, 9, 9)"/>
            <q-btn  @click="guardarEditarDatos" style="background-color: rgb(14, 224, 14)">
              {{ bd == 0?"Guardar ": "Editar "  }} </q-btn> 

       
            
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

</template>

<script setup>
import { ref, onMounted } from "vue"
import { lotesStore } from "../stores/lotes"
import { useQuasar } from 'quasar'

const q = useQuasar();
const lotes = lotesStore();
let rows = ref();


let codigo = ref ("");
let nombres = ref("");
let descripcion = ref("");
let tamaño = ref("");
let estadoSueldo = ref("");
let clase = ref ("");
let padre = ref ("");
let densidad = ref ("");


let nuevo = ref(false)
let bd = ref(0)
let _id = ""

let columns = ref([

{ name: 'codigo', align: 'center', label: 'codigo', field: "codigo", sortable: true },
{ name: 'nombres', label: 'nombres', field: 'nombres', sortable: true, align: "center"},
{ name: 'descripcion', label: 'descripcion', field: 'descripcion', sortable:true, align: "center" },
{ name: 'tamaño', label: 'tamaño', field: 'tamaño', sortable:true, align: "center"},
{ name: 'estadoSueldo', label: 'estadoSueldo', field: 'estadoSueldo', sortable:true, align: "center" },
{ name: 'clase', label: 'clase', field: 'clase', sortable:true, align: "center" },
{ name: 'padre', label: 'padre', field: 'padre', sortable:true, align: "center" },
{ name: 'densidad', label: 'densidad', field: 'densidad', sortable:true, align: "center" },
{ name: 'estado', label: 'Estado', field: 'estado', align: "center" },
{ name: 'opcion', label: 'Opciones', field: '', sortable: true, align: "center" }
])

const listarlotes = async () => {
rows.value = await lotes.getlotes();
};

listarlotes();

function edit(row) {
bd.value = 1;
nuevo.value = true;
_id = row._id;
codigo.value = row.codigo;
nombres.value = row.nombres;
descripcion.value = row.descripcion;
tamaño.value = row.tamaño;
estadoSueldo.value = row.estadoSueldo;
clase.value = row.clase;
padre.value = row.padre;
densidad.value = row.densidad;
}

function guardar() {
bd.value = 0;
nuevo.value = true;
limpiarFormulario();
}

async function inactive(props) {
let res = await lotes.inactivelotes(props._id);
listarlotes();
}

async function active(props) {
let res = await lotes.activelotes(props._id);
listarlotes();
}

function limpiarFormulario() {
codigo.value = "";
nombres.value = "";
descripcion.value = "";
tamaño.value="";
estadoSueldo.value="";
clase.value="";
padre.value="";
densidad.value="";
bd.value = 0;
}


async function guardarEditarDatos() {
if (bd.value === 0) {
  if (codigo.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un código válido.",
      position: "top",
    });
    return;
  }

  if (nombres.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese nombres válidos.",
      position: "top",
    });
    return;
  }

  if (descripcion.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese una descripcion válida.",
      position: "top",
    });
    return;
  }

  if (tamaño.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, seleccione un tamaño válido.",
      position: "top",
    });
    return;
  }


  if (estadoSueldo.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un estado de sueldo válido",
      position: "top",
    });

    return;
  }

  if (clase.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, seleccione una clase válida.",
      position: "top",
    });

    return;
  }

  if (padre.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, seleccione un padre válido.",
      position: "top",
    });

    return
  }

    if (densidad.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, seleccione una densidad válida.",
      position: "top",
    });

    return
  }
  const datos = {
    codigo: codigo.value,
    nombres: nombres.value,
    descripcion: descripcion.value,
    tamaño: tamaño.value,
    estadoSueldo: estadoSueldo.value,
    clase:clase.value,
    padre: padre.value,
    densidad : densidad.value,
    estado: 0,
  };

  let res = await lotes.addlotes(datos);
  console.log(res);
  listarlotes();
  nuevo.value = false;
  
} else {
  if (nombres.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese nombres válidos.",
      position: "top",
    });
    return;
  }

  if (descripcion.value === "") { 
    q.notify({
      type: "negative",
      message: "Por favor ingrese una descripción válida",
      position: "top",
    });
    return;
  }

  if (tamaño.value === "") { 
    q.notify({
      type: "negative",
      message: "Por favor ingrese un tamaño válido",
      position: "top",
    });
    return;
  }
    if (estadoSueldo.value === "") { 
    q.notify({
      type: "negative",
      message: "Por favor ingrese un estado de sueldo válido",
      position: "top",
    });
    return;
  }

  if (clase.value === "") { 
    q.notify({
      type: "negative",
      message: "Por favor ingrese una clase válida",
      position: "top",
    });
    return;
  }

  if (padre.value === "") { 
    q.notify({
      type: "negative",
      message: "Por favor ingrese un padre válido",
      position: "top",
    });
    return;
  }

  if (densidad.value === "") { 
    q.notify({
      type: "negative",
      message: "Por favor ingrese una densidad válida",
      position: "top",
    });
    return;
  }

  

  
  const datos = {
    codigo : codigo.value,
    nombres: nombres.value,
    descripcion : descripcion.value,
    tamaño : tamaño.value,
    estadoSueldo : estadoSueldo.value,
    clase:clase.value,
    padre:padre.value,
    densidad : densidad.value,
    estado: 1,
  };

  console.log(_id, {datos});
  let res = await lotes.editlotes(_id, datos);
  listarlotes();
  console.log(res);
  q.notify({
    type: "positive",
    message: "Lote actualizado exitosamente.",
    position: "top",
  });
}
}

listarlotes();

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


.tabla {
border: 7px solid transparent;
border-image: linear-gradient(to right, #00FF00, #000000) 1;
border-image-slice: 1;
border-radius: 20px;
}
  </style>