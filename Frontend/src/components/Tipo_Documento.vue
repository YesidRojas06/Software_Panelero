<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Tipo De Documento</h1>
      </div>

      <q-table title="Documentos" :rows="rows" :columns="columns" class="tabla">
        <template v-slot:body-cell-estado="props" style="opacity: 0">
          <td
            v-if="props.row.estado == 1"
            style="color: green; text-align: center"
          >
            Activo
          </td>
          <td v-else style="color: rgb(251, 2, 2); text-align: center">
            Inactivo
          </td>
        </template>
        <template v-slot:body-cell-opcion="props" style="opacity: 0">
          <td style="text-align: center">
            <q-btn @click="edit(props.row)" class="">📝</q-btn>
            <q-btn v-if="props.row.estado == 1" @click="inactive(props.row)"
              >🚫</q-btn
            >
            <q-btn v-else @click="active(props.row)">✅</q-btn>
          </td>
        </template>
      </q-table>

      <q-btn
        color="white"
        text-color="black"
        label="Nuevo Documento"
        @click="guardar"
        class="q-ma-md q-mb-lg q-mt-xl q-ml-auto q-mr-auto q-col-xs-12 q-col-sm-6 q-col-md-4 q-col-lg-3"
        style="position: absolute; top: 150px; right: 40px; border-radius: 30px"
      />
    </div>

    <q-dialog
      v-model="nuevo"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="bg-teal text-dark" style="width: 500px; max-width: 80vw">
        <q-card-section style="background-color: rgb(14, 224, 14)">
          <div align="center" class="text-h6">
            {{ bd === 0 ? "Guardar Documento" : "Editar Tipo_Documento" }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">

          <!-- <p>Tipo De Documento</p>
          <q-select
            v-model="seleccion"
            :options="nombreT"
            lazy-rules
            color="positive" /> -->


            <p>Tipo De Documento</p>
          <q-select :options="nombreTOptions"  v-model="nombreT" emit-value map-options 
          :option-value="'value'" :option-label="'label'" color="positive" class="form-input" required/>
          

          <p></p>
          <p>Numero Del Documento</p>
          <input type="text" v-model="siglas" class="form-input" />

          <q-card-actions align="center" class="bg-white text-black">
            <q-btn
              label="Cancelar"
              @click="nuevo = false"
              style="background-color: rgb(243, 9, 9)"
            />
            <q-btn  @click="guardarEditarDatos" style="background-color: rgb(14, 224, 14)">
              {{ bd == 0?"Guardar ": "Editar "  }} 
            </q-btn> 
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import { tipoDocumentoStore } from "../stores/tipoDocumento";
import { useQuasar } from "quasar";

const q = useQuasar();
const tipoDocumento = tipoDocumentoStore();
let rows = ref();

let nombreTOptions = ref([
{ label: 'T.I', value: 'T.I' },
{ label: 'C.C', value: 'C.C' },
{ label: 'NIP', value: 'NIP' },
{ label: 'R.C', value: 'R.C' },
{ label: 'C.E', value: 'C.E' }
]);


// const nombreT = ["T.I", "C.C", "NIP", "R.C", "C.E"];

let nombreT = ref("");
let siglas = ref("");

let nuevo = ref(false);
let bd = ref(0);
let _id = "";

let columns = ref([
  // {
  //   name: "nombreT",
  //   required: true,
  //   label: "Tipo De Documento",
  //   align: "left",
  //   field: "nombreT",
  //   sortable: false,
  // },


  { name: 'nombreT', label: 'Tipo De Documento', field: 'nombreT', sortable: true, align: "center" },



  {
    name: "siglas",
    align: "center",
    label: "Numero Del Documento",
    field: "siglas",
    sortable: true,
  },
  { name: "estado", label: "Estado", field: "estado", align: "center" },
  {
    name: "opcion",
    label: "Opciones",
    field: "",
    sortable: true,
    align: "center",
  },
]);

const listartipoDocumento = async () => {
  rows.value = await tipoDocumento.gettipoDocumento();
};
listartipoDocumento();

function edit(row) {
  bd.value = 1;
  nuevo.value = true;
  _id = row._id;
  nombreT.value = row.nombreT;
  siglas.value = row.siglas;
}

function guardar() {
  bd.value = 0;
  nuevo.value = true;
  limpiarFormulario();
}

async function inactive(props) {
  let res = await tipoDocumento.inactivetipoDocumento(props._id);
  listartipoDocumento();
}

async function active(props) {
  let res = await tipoDocumento.activetipoDocumento(props._id);
  listartipoDocumento();
}

function limpiarFormulario() {
  nombreT.value = "";
  siglas.value = "";
  bd.value = 0;
}

async function guardarEditarDatos() {
  if (bd.value === 0) {
    if (nombreT.value === "") {
      q.notify({
        type: "negative",
        message: "Por Favor Ingrese Un Tipo De Documento Valido",
        position: "top",
      });
      return;
    }

    if (siglas.value === "") {
      q.notify({
        type: "negative",
        message: "Por Favor Ingrese Un Numero De Documento Valido",
        position: "top",
      });
      return;
    }

    const datos = {
      nombreT: nombreT.value,
      siglas: siglas.value,
      estado: 0,
    };

    let res = await tipoDocumento.addtipoDocumento(datos);
    console.log(res);
    listartipoDocumento();
    nuevo.value = false;
  } else {
    if (nombreT.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombreT válido.",
        position: "top",
      });
      return;
    }
    // nombreT es TIPO DE DOCUMENTO y siglas es NUMERO DEL DOCUMENTO

    if (siglas.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un Numero De Documento Válido.",
        position: "top",
      });
      return;
    }

    const datos = {
      nombreT: nombreT.value,
      siglas: siglas.value,
      estado: 1,
    };

    console.log(_id, { datos });
    let res = await tipoDocumento.edittipoDocumento(_id, datos);
    listartipoDocumento();
    console.log(res);
    q.notify({
      type: "positive",
      message: "Tipo_Documento actualizada exitosamente.",
      position: "top",
    });
  }
}

listartipoDocumento();
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
  
  
  
  