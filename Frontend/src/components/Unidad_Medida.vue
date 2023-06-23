


<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Unidades De Medida</h1>
      </div>

      <q-table
        title="Unidades de medida"
        :rows="rows"
        :columns="columns"
        class="tabla"
      >
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
        label="Nueva unidad de medida"
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
            {{
              bd == 0 ? "Guardar Unidades De Medida" : "Editar UnidadesMedida"
            }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Codigo</p>
          <input type="text" v-model="codigo" class="form-input" />


          <p>Fecha</p>
          <q-input
            filled
            v-model="fecha"
            mask="date"
            lazy-rules
            type="text"
            class="form-input"
            color="positive"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="positive">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="fecha" color="positive">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="dark" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <p>Descripcion</p>
          <input type="text" v-model="descripcion" class="form-input" />
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
            >{{ bd == 0 ? "Guardar " : "Editar " }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { Unidades_MedidaStore } from "../stores/Unidades_Medida.js";
import { useQuasar } from "quasar";

const q = useQuasar();
const UnidadesMedida = Unidades_MedidaStore();
let rows = ref();

let codigo = ref("");
let fecha = ref("");
let descripcion = ref("");

let nuevo = ref(false);
let bd = ref(0);
let _id = "";

let columns = ref([
  {
    name: "codigo",
    align: "center",
    label: "Codigo",
    field: "codigo",
    sortable: true,
  },
  {
    name: "fecha",
    label: "Fecha",
    field: "fecha",
    sortable: true,
    align: "center",
  },
  {
    name: "descripcion",
    label: "Descripcion",
    field: "descripcion",
    align: "center",
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

// const listarUnidadesMedida = async () => {
//   let er = await UnidadesMedida.getUnidadesMedida();
//   rows.value = await UnidadesMedida.getUnidadesMedida();

// };

const listarUnidadesMedida = async () => {
  let unidadesMedida = await UnidadesMedida.getUnidadesMedida();

  // Formatear la fecha en cada objeto de unidadesMedida
  unidadesMedida.forEach((unidadMedida) => {
    unidadMedida.fecha = new Date(unidadMedida.fecha).toLocaleDateString();
  });

  rows.value = unidadesMedida;
};

// listarUnidadesMedida()
function edit(row) {
  bd.value = 1;
  nuevo.value = true;
  _id = row._id;
  codigo.value = row.codigo;
  fecha.value = row.fecha;
  descripcion.value = row.descripcion;
}

function guardar() {
  bd.value = 0;
  nuevo.value = true;
  limpiarFormulario();
}

async function inactive(props) {
  let res = await UnidadesMedida.inactiveUnidadesMedida(props._id);
  listarUnidadesMedida();
}

async function active(props) {
  let res = await UnidadesMedida.activeUnidadesMedida(props._id);
  listarUnidadesMedida();
}

function limpiarFormulario() {
  codigo.value = "";
  fecha.value = "";
  descripcion.value = "";
  bd.value = 0;
}

async function guardarEditarDatos() {
  if (bd.value === 0) {
    if (codigo.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un codigo válido.",
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

    if (descripcion.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese una descripcion válida.",
        position: "top",
      });
      return;
    }

    const datos = {
      codigo: codigo.value,
      fecha: fecha.value,
      descripcion: descripcion.value,
      estado: 0,
    };

    let res = await UnidadesMedida.addUnidadesMedida(datos);
    console.log(res);
    listarUnidadesMedida();
    nuevo.value = false;
  } else {
    if (codigo.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un codigo válido.",
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
      codigo: codigo.value,
      fecha: fecha.value,
      descripcion: descripcion.value,
      estado: 1,
    };

    console.log(_id, { datos });
    let res = await UnidadesMedida.editUnidadesMedida(_id, datos);
    listarUnidadesMedida();
    console.log(res);
    q.notify({
      type: "positive",
      message: "Unidad de medida actualizada exitosamente.",
      position: "top",
    });
  }
}

listarUnidadesMedida();
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