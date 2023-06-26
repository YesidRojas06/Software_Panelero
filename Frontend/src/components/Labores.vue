<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Labores</h1>
      </div>

      <q-table title="Labores" :rows="rows" :columns="columns" class="tabla">
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

            
            <q-btn
              v-if="props.row.estado == 1"
              :loading="loading"
              :disable="loading"
              :class="{ 'cursor-not-allowed': loading }"
              @click="inactive(props.row)"
            >
              <span v-if="loading">⏳</span>
              <span v-else>🚫</span>
            </q-btn>
            <q-btn
              v-else
              :loading="loading"
              :disable="loading"
              :class="{ 'cursor-not-allowed': loading }"
              @click="active(props.row)"
            >
              <span v-if="loading">⏳</span>
              <span v-else>✅</span>
            </q-btn>
          </td>
        </template>
      </q-table>

      <q-btn
        color="white"
        text-color="black"
        label="Nuevo Labor"
        v-on:click="guardar()"
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
            {{ bd == 0 ? "Guardar Labores" : "Editar Labores" }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <!-- <p>Nombre Del Labor</p>
          <input type="text" v-model="nombre_labor" class="form-input"> -->

          <p>Nombre Del Labor</p>
          <input
            type="text"
            v-model="nombre_labor"
            class="form-input"
            pattern="[A-Za-z]+"
            @input="validateNombreLabor"
          />

          <p>Area Para Realizar</p>
          <input type="text" v-model="area_realizar" class="form-input" />

          <!-- <p>Pago Diario</p>
          <input type="text" v-model="pago_diario" class="form-input"> -->

          <p>Pago Diario</p>
          <input
            type="text"
            v-model="pago_diario"
            class="form-input"
            pattern="[0-9]+([.][0-9]+)?"
            @input="validarNumero"
          />
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn
            label="Cancelar"
            @click="nuevo = false"
            style="background-color: rgb(243, 9, 9)"
          />
          <q-btn
            @click="guardarEditarDatos"
            style="background-color: rgb(14, 224, 14)"
          >
            {{ bd == 0 ? "Guardar " : "Editar " }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { laboresStore } from "../stores/Labores";
import { useQuasar } from "quasar";

const q = useQuasar();
const labores = laboresStore();
let rows = ref();

let nombre_labor = ref("");
let area_realizar = ref("");
let pago_diario = ref("");

let nuevo = ref(false);
let bd = ref(0);
let _id = "";

let loading = ref(false);

let columns = ref([
  {
    name: "nombre_labor",
    required: true,
    label: "Nombre Del Labor",
    align: "left",
    field: "nombre_labor",
    sortable: false,
  },
  {
    name: "area_realizar",
    align: "center",
    label: "Area Para Realizar",
    field: "area_realizar",
    sortable: true,
  },
  {
    name: "pago_diario",
    align: "center",
    label: "Pago Diario",
    field: "pago_diario",
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

const listarLabores = async () => {
  const res = await labores.getlabores();
  rows.value = res == null ? [] : res;
  console.log("sr");
};
listarLabores();

function edit(row) {
  bd.value = 1;
  nuevo.value = true;
  _id = row._id;
  nombre_labor.value = row.nombre_labor;
  area_realizar.value = row.area_realizar;
  pago_diario.value = row.pago_diario;
}

function guardar() {
  bd.value = 0;
  nuevo.value = true;
  console.log(nuevo);
  limpiarFormulario();
}

async function inactive(props) {
  loading.value = true;
  let res = await labores.inactivelabores(props._id);
  listarLabores();
  loading.value = false;
}

async function active(props) {
  loading.value = true;
  let res = await labores.activelabores(props._id);
  listarLabores();
  loading.value = false;
}

function limpiarFormulario() {
  nombre_labor.value = "";
  area_realizar.value = "";
  pago_diario.value = "";
  bd.value = 0;
}

function validarNumero() {
  pago_diario.value = pago_diario.value.replace(/[^0-9.]/g, "");
}

function validateNombreLabor() {
  nombre_labor.value = nombre_labor.value.replace(/[^A-Za-z]/g, "");
}

async function guardarEditarDatos() {
  if (nombre_labor.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un Nombre para el Labor",
      position: "top",
    });
    return;
  }

  if (area_realizar.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un Área válido",
      position: "top",
    });
    return;
  }

  if (pago_diario.value === "" || isNaN(parseFloat(pago_diario.value))) {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un Valor diario válido",
      position: "top",
    });
    return;
  }

  const datos = {
    nombre_labor: nombre_labor.value,
    area_realizar: area_realizar.value,
    pago_diario: parseFloat(pago_diario.value),
    estado: 1,
  };

  if (bd.value === 0) {
    const res = await labores.addlabores(datos);
    console.log(res);
    await listarLabores();
    nuevo.value = false;
  } else {
    console.log(_id, { datos });
    const res = await labores.editlabores(_id, datos);
    console.log(res);
    await listarLabores();
    nuevo.value = false;
    q.notify({
      type: "positive",
      message: "Labores actualizada exitosamente.",
      position: "top",
    });
  }
}

listarLabores();
</script>

<style lang="scss" scoped>
.q-pt-none {
  background-color: #ffffff;
  /* Establecer el color de fondo del cuadro de diálogo */
}

.q-card {
  border-radius: 8px;
  /* Agregar radio de borde a la tarjeta */
}

.q-card-section {
  padding: 20px;
  /* Aumentar el relleno de las secciones de la tarjeta. */
}

.q-card-actions {
  justify-content: flex-end;
  /* Alinear las acciones de la tarjeta a la derecha */
}

.q-btn {
  margin-left: 10px;
  /* Añade algo de espacio entre los botones. */
}

input[type="text"] {
  width: 100%;
  /* Hacer que las entradas de texto ocupen todo el ancho */
}

.text-h6 {
  font-size: 1.25rem;
  /* Aumentar el tamaño de fuente del título de la sección.*/
}

.q-btn:hover {
  background-color: rgb(14, 224, 14);
}

.form-input {
  margin-bottom: 30px;
  /* Ajusta el margen inferior entre los campos */
}

.tabla {
  border: 7px solid transparent;
  border-image: linear-gradient(to right, #00ff00, #000000) 1;
  border-image-slice: 1;
  border-radius: 20px;
}
</style>
