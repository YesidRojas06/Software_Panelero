<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Marcas</h1>
      </div>
      
      

      <q-table title="Marca" :rows="rows" :columns="columns" class="tabla ">
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
        label="Nueva Marca"
        @click="guardar"
        class="q-ma-md q-mb-lg q-mt-xl q-ml-auto q-mr-auto q-col-xs-12 q-col-sm-6 q-col-md-4 q-col-lg-3"
        style="position: absolute; top: 150px; right: 40px; border-radius: 30px;"
      />

    </div>

    <q-dialog v-model="nuevo" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-dark" style="width: 500px; max-width: 80vw;">

        <q-card-section style="background-color:rgb(14, 224, 14);">
          <div align="center" class="text-h6">{{ bd === 0 ? "Guardar Marca" : "Editar Marca" }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Nombre de la marca</p>
          <input type="text" v-model="nombres" class="form-input" />

          <p>Descripcion</p>
          <input type="text" v-model="descripcion" class="form-input" />
          
          <p>Creador</p>
          <input type="text" v-model="codigo" class="form-input" />

          <p>Fecha</p>
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
import { MarcasStore } from "../stores/Marcas.js";
import { useQuasar } from 'quasar';

const q = useQuasar();
const Marcas = MarcasStore();
let rows = ref();



let nombresmarca = ref("");
let descripcion = ref("");
let creador = ref("");
let fecha = ref("");


let nuevo = ref(false);
let bd = ref(0);
let _id = "";

let columns = ref([
  {name: 'nombresmarca',required: true,label: 'Nombre de la marca',align: 'left',field: "nombresmarca", sortable: false},
  { name: 'descripcion', label: 'descripcion', field: 'descripcion', sortable: true, align: "center" },
  { name: 'creador', label: 'creador', field : 'creador', sortable: true, align: "center"},
  { name: 'fecha', label: 'fecha', field : 'fecha', sortable: true, align: "center"},
  { name: 'estado', label: 'Estado', field: 'estado', align: "center" },
  { name: 'opcion', label: 'Opciones', field: '', sortable: true, align: "center" }
]);

const listarMarcas = async () => {

  rows.value = await Marcas.getMarcas();
};
listarMarcas()

function edit(row) {
  bd.value = 1;
  nuevo.value = true;
  _id = row._id;
  nombresmarca.value = row.nombresmarca;
  descripcion.value = row.descripcion;
  creador.value = row.creador; 
  fecha.value = row.fecha;
}

function guardar() {
  bd.value = 0;
  nuevo.value = true;
  limpiarFormulario();
}

async function inactive(props) {
  let res = await Marcas.inactiveMarcas(props._id);
  listarMarcas();
}

async function active(props) {
  let res = await Marcas.activeMarcas(props._id);
  listarMarcas();
}

function limpiarFormulario() {
  nombresmarca.value = "";
  descripcion.value ="";
  creador.value = "";
  fecha.value = "";
  bd.value = 0;
}



async function guardarEditarDatos() {
  if (bd.value === 0) {
    if (nombresmarca.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombre de marca válido.",
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

    if (creador.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombre de creador válido.",
        position: "top",
      });
      return;
    }

    if (fecha.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese una fecha válida.",
        position: "top",
      });
      return;
    }


  


    const datos = {
      nombres: nombres.value,
      descripcion: descripcion.value,
      creador: creador.value,
      fecha: fecha.value,
      estado: 0,
    };

    let res = await Marcas.addMarcas(datos);
    console.log(res);
    listarMarcas();
    nuevo.value = false;
  } else {
    if (nombresmarca.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombre de marca válido.",
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

    if (creador.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombre de creador válido.",
        position: "top",
      });
      return;
    }

    if (fecha.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese una fecha válida.",
        position: "top",
      });
      return;
    }









    const datos = {
      nombres: nombres.value,
      descripcion: descripcion.value,
      creador: creador.value,
      fecha: fecha.value,
      estado: 1,
    };

    console.log(_id, {datos});
    let res = await Marcas.editMarcas(_id, datos);
    listarMarcas();
    console.log(res);
    q.notify({
      type: "positive",
      message: "Marca actualizada exitosamente.",
      position: "top",
    });
  }
}

 listarMarcas();

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

.tabla {
  border: 7px solid transparent;
  border-image: linear-gradient(to right, #00FF00, #000000) 1;
  border-image-slice: 1;
  border-radius: 20px;
}

</style>














