<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Forma de pago</h1>
      </div>



      <q-table title="Forma de pago" :rows="rows" :columns="columns" class="tabla ">
        <template v-slot:body-cell-estado="props" style="opacity: 0;">
          <td v-if="props.row.estado == 1" style="color:green; text-align: center;">Activo</td>
          <td v-else style="color:rgb(251, 2, 2); text-align: center;">Inactivo</td>
        </template>
        <template v-slot:body-cell-opcion="props" style="opacity: 0;">
          <td style="text-align: center;">
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

      <q-btn color="white" text-color="black" label="Nueva forma de pago" @click="guardar"
        class="q-ma-md q-mb-lg q-mt-xl q-ml-auto q-mr-auto q-col-xs-12 q-col-sm-6 q-col-md-4 q-col-lg-3"
        style="position: absolute; top: 150px; right: 40px; border-radius: 30px;" />

    </div>

    <q-dialog v-model="nuevo" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-dark" style="width: 500px; max-width: 80vw;">

        <q-card-section style="background-color:rgb(14, 224, 14);">
          <div align="center" class="text-h6">{{ bd === 0 ? "Guardar Forma de Pago" : "Editar Forma de Pago" }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Nombre Del Pago</p>
          <input type="text" v-model="nombrePago" class="form-input" />

          <p>Codigo Del Pago</p>
          <input type="text" v-model="codigoPago" class="form-input" />

          
          <p>Tipo De Pago</p>
          <input type="text" v-model="tipoPago" class="form-input" />

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
import { ref,} from "vue"
import { formapagoStore } from "../stores/FormaPago.js"
import { useQuasar } from 'quasar'

const q=useQuasar()
const formapago = formapagoStore()
let rows = ref()

let nombrePago = ref("");
let codigoPago = ref("");
let tipoPago = ref("");
let fecha = ref ("");


let nuevo= ref(false)
let bd= ref (0)
let _id=""

let loading = ref(false);


let columns = ref([
  { name: 'nombrePago',
    required: true,
    label: 'Nombre Del Pago',
    align: 'left',
    field: "nombrePago",
    sortable: false},

  { name: 'codigoPago', align: 'center', label: 'Codigo Del Pago', field: "codigoPago", sortable: true },
  { name: 'tipoPago', align: 'center', label: 'Tipo De pago', field: "tipoPago", sortable: true },
  {
    name: "fecha",
    label: "Fecha",
    field: "fecha",
    sortable: true,
    align: "center",
  },
    { name: 'estado', label: 'Estado', field: 'estado', align: "center" },
  { name: 'opcion', label: 'Opciones', field: '', sortable: true, align: "center" }
])

const listarformaPago = async () => {

rows.value = await formapago.getformapago();
};
listarformaPago();

function edit(row) {
bd.value = 1;
nuevo.value = true;
_id = row._id;
nombrePago.value = row.nombrePago;
codigoPago.value = row.codigoPago;
tipoPago.value = row.tipoPago;
fecha.value = row.fecha;

}

function guardar() {
bd.value = 0;
nuevo.value = true;
limpiarFormulario();
}

async function inactive(props) {
  loading.value = true;

let res = await formapago.inactiveformapago(props._id);
loading.value = false;
listarformaPago();
}

async function active(props) {
loading.value = true;

console.log("sirve");
let res = await formapago.activeformapago(props._id);
loading.value = false;

listarformaPago();
}

function limpiarFormulario() {
  nombrePago.value = "";
  codigoPago.value = "";
  tipoPago.value = "";
  fecha.value = "";
  bd.value = 0;

}



async function guardarEditarDatos() {
if (bd.value === 0) {
  if (nombrePago.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un Pago válido",
      position: "top",
    });
    return;
  }

  if (codigoPago.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un Codigo válido",
      position: "top",
    });
    return;
  }

  if (tipoPago.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un tipo de Pago válido",
      position: "top",
    });
    return;
  }


  if (fecha.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese una Fecha válida",
        position: "top",
      });
      return;
    }



  const datos = {
    nombrePago: nombrePago.value,
    codigoPago: codigoPago.value,
    tipoPago: tipoPago.value,
    fecha: fecha.value,
    estado: 0,
  };

  let res = await formapago.addformapago(datos);
  console.log(res);
  listarformaPago();
  nuevo.value = false;
} else {
  if (nombrePago.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un Pago válido",
      position: "top",
    });
    return;
  }

  if (codigoPago.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un codigo válido",
      position: "top",
    });
    return;
  }

  if (tipoPago.value === "") {
    q.notify({
      type: "negative",
      message: "Por favor, ingrese un Tipo De Pago válido",
      position: "top",
    });
    return;
  }

  const datos = {
    nombrePago: nombrePago.value,
    codigoPago: codigoPago.value,
    tipoPago: tipoPago.value,
    fecha: fecha.value,
    estado: 1,
  };

  console.log(_id, { datos });
  let res = await formapago.editformapago(_id, datos);
  listarformaPago();
  console.log(res);
  q.notify({
    type: "positive",
    message: "Forma de Pago actualizada exitosamente.",
    position: "top",
  });
}
}

listarformaPago();

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
  border-image: linear-gradient(to right, #00FF00, #000000) 1;
  border-image-slice: 1;
  border-radius: 20px;
}


</style>