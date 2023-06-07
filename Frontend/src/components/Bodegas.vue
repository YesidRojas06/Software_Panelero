<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Bodegas</h1>
      </div>
      
      

      <q-table title="Bodega" :rows="rows" :columns="columns" class="tabla ">
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
        label="Nueva Bodega"
        @click="guardar"
        class="q-ma-md q-mb-lg q-mt-xl q-ml-auto q-mr-auto q-col-xs-12 q-col-sm-6 q-col-md-4 q-col-lg-3"
        style="position: absolute; top: 150px; right: 40px; border-radius: 30px;"
      />

    </div>

    <q-dialog v-model="nuevo" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-dark" style="width: 500px; max-width: 80vw;">

        <q-card-section style="background-color:rgb(14, 224, 14);">
          <div align="center" class="text-h6">{{ bd === 0 ? "Guardar Bodega" : "Editar Bodega" }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Nombre</p>
          <input type="text" v-model="nombres" class="form-input" />

          <p>Descripcion</p>
          <input type="text" v-model="descripcion" class="form-input" />
          
          <p>codigo</p>
          <input type="text" v-model="codigo" class="form-input" />
          

          

          <q-card-actions align="center" class="bg-white text-black">
            <q-btn label="Cancelar" @click="nuevo = false" style="background-color: rgb(243, 9, 9)" />
            <q-btn @click="guardarEditarDatos" style="background-color: rgb(14, 224, 14)">
              {{ bd === 0 ? "Guardar" : "Editar" }}
            </q-btn> 
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { BodegasStore } from "../stores/Bodegas.js";
import { useQuasar } from 'quasar';

const q = useQuasar();
const Bodegas = BodegasStore();
let rows = ref();



let nombres = ref("");
let descripcion = ref("");
let codigo = ref("");


let nuevo = ref(false);
let bd = ref(0);
let _id = "";

let columns = ref([
  {
    name: 'nombres',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: "nombres",
    sortable: false
  },
  { name: 'codigo', align: 'center', label: 'codigo', field: "codigo", sortable: true },
  { name: 'descripcion', label: 'Descripcion', field: 'descripcion', sortable: true, align: "center" },
  { name: 'estado', label: 'Estado', field: 'estado', align: "center" },
  { name: 'opcion', label: 'Opciones', field: '', sortable: true, align: "center" }
]);

const listarBodegas = async () => {

  rows.value = await Bodegas.getBodegas();
};
listarBodegas()

function edit(row) {
  bd.value = 1;
  nuevo.value = true;
  _id = row._id;
  nombres.value = row.nombres;
  codigo.value = row.codigo;
  descripcion.value = row.descripcion;
 

  
}

function guardar() {
  bd.value = 0;
  nuevo.value = true;
  limpiarFormulario();
}

async function inactive(props) {
  let res = await Bodegas.inactiveBodegas(props._id);
  listarBodegas();
}

async function active(props) {
  let res = await Bodegas.activeBodegas(props._id);
  listarBodegas();
}

function limpiarFormulario() {
  nombres.value = "";
  codigo.value = "";
  descripcion.value = "";
  descripcion.value ="";
  bd.value = 0;
  codigo.value= "";
}



async function guardarEditarDatos() {
  if (bd.value === 0) {
    if (nombres.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombre válido.",
        position: "top",
      });
      return;
    }

    if (codigo.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un correo válido.",
        position: "top",
      });
      return;
    }

  


    const datos = {
      nombres: nombres.value,
      codigo: codigo.value,
      descripcion: descripcion.value,
      estado: 0,
    };

    let res = await Bodegas.addBodegas(datos);
    console.log(res);
    listarBodegas();
    nuevo.value = false;
  } else {
    if (nombres.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombre válido.",
        position: "top",
      });
      return;
    }

    if (codigo.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un correo válido.",
        position: "top",
      });
      return;
    }

    const datos = {
      nombres: nombres.value,
      codigo: codigo.value,
      descripcion: descripcion.value,
      estado: 1,
    };

    console.log(_id, {datos});
    let res = await Bodegas.editBodegas(_id, datos);
    listarBodegas();
    console.log(res);
    q.notify({
      type: "positive",
      message: "Bodega actualizada exitosamente.",
      position: "top",
    });
  }
}

 listarBodegas();

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
.q-btn:hover {
  background-color: rgb(14, 224, 14);
}
.form-input {
  margin-bottom: 30px; /* Ajusta el margen inferior entre los campos */
}

</style>

















































