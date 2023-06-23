<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Productos</h1>
      </div>



      <q-table title="Productos" :rows="rows" :columns="columns" class="tabla ">
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

      <q-btn color="white" text-color="black" label="Nuevo producto" @click="guardar"
        class="q-ma-md q-mb-lg q-mt-xl q-ml-auto q-mr-auto q-col-xs-12 q-col-sm-6 q-col-md-4 q-col-lg-3"
        style="position: absolute; top: 150px; right: 40px; border-radius: 30px;" />

    </div>

    <q-dialog v-model="nuevo" persistent transition-show="scale" transition-hide="scale">
      <q-card class="bg-teal text-dark" style="width: 500px; max-width: 80vw;">

        <q-card-section style="background-color:rgb(14, 224, 14);">
          <div align="center" class="text-h6">{{ bd === 0 ? "Guardar Productos" : "Editar Productos" }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>cantidad</p>
          <input type="text" v-model="cantidad" class="form-input" />

          <p>nombregasto</p>
          <input type="text" v-model="nombregasto" class="form-input" />

          <p>administrador</p>
          <input type="text" v-model="administrador" class="form-input" />

          <p>finca</p>
          <input type="text" v-model="finca" class="form-input" />

          <p>descripcion</p>
          <input type="text" v-model="descripcion" class="form-input" />

          <p>formapago</p>
          <input type="text" v-model="formapago" class="form-input" />

          <p>cost_value</p>
          <input type="text" v-model="cost_value" class="form-input" />

          <p>total</p>
          <input type="text" v-model="total" class="form-input" />

          <p>fecha</p>
          <input type="date" v-model="fecha" class="form-input" />





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
import { productosStore } from "../stores/productos";
import { useQuasar } from 'quasar';

const q = useQuasar();
const productos = productosStore();
let rows = ref();



let cantidad = ref("");
let nombregasto = ref("")
let administrador = ref("")
let finca = ref("")
let descripcion = ref("")
let formapago = ref("")
let cost_value = ref("")
let total = ref("")
let fecha = ref("")




let nuevo = ref(false);
let bd = ref(0);
let _id = "";

let columns = ref([
  {
    name: 'cantidad',
    required: true,
    label: 'cantidad',
    align: 'left',
    field: "cantidad",
    sortable: false
  },
  { name: 'nombregasto', align: 'center', label: 'nombregasto', field: "nombregasto", sortable: true },
  { name: 'administrador', align: 'center', label: 'administrador', field: "administrador", sortable: true },
  { name: 'finca', align: 'center', label: 'finca', field: "finca", sortable: true },
  { name: 'descripcion', align: 'center', label: 'descripcion', field: "descripcion", sortable: true },
  { name: 'formapago', align: 'center', label: 'formapago', field: "formapago", sortable: true },
  { name: 'cost_value', align: 'center', label: 'cost_value', field: "cost_value", sortable: true },
  { name: 'total', align: 'center', label: 'total', field: "total", sortable: true },
  { name: 'fecha', align: 'center', label: 'fecha', field: "fecha", sortable: true },
  { name: 'estado', label: 'Estado', field: 'estado', align: "center" },
  { name: 'opcion', label: 'Opciones', field: '', sortable: true, align: "center" }

]);

const listarproductos = async () => {

  rows.value = await productos.getproductos();
};
listarproductos();

function edit(row) {
  bd.value = 1;
  nuevo.value = true;
  _id = row._id;
  cantidad.value = row.cantidad;
  nombregasto.value = row.nombregasto;
  administrador.value = row.administrador;
  finca.value = row.finca;
  descripcion.value = row.descripcion;
  formapago.value = row.formapago;
  cost_value.value = row.cost_value;
  total.value = row.total;
  fecha.value = row.fecha;

}

function guardar() {
  bd.value = 0;
  nuevo.value = true;
  limpiarFormulario();
}

async function inactive(props) {
  let res = await productos.inactiveproductos(props._id);
  listarproductos();
}

async function active(props) {
  console.log("sirve");
  let res = await productos.activeproductos(props._id);
  listarproductos();
}

function limpiarFormulario() {
  cantidad.value = "";
  nombregasto.value = "";
  administrador.value = "";
  finca.value = "";
  descripcion.value = "";
  formapago.value = "";
  cost_value.value = "";
  total.value = "";
  fecha.value = "";
  bd.value = 0;

}



async function guardarEditarDatos() {
  if (bd.value === 0) {
    if (cantidad.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombre válido.",
        position: "top",
      });
      return;
    }

    if (nombregasto.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un Número De línea válido.",
        position: "top",
      });
      return;
    }




    const datos = {
      cantidad: cantidad.value,
      nombregasto: nombregasto.value,
      administrador: administrador.value,
      finca: finca.value,
      descripcion: descripcion.value,
      formapago: formapago.value,
      cost_value: cost_value.value,
      total: total.value,
      fecha: fecha.value,
      estado: 0,
    };

    let res = await productos.addproductos(datos);
    console.log(res);
    listarproductos();
    nuevo.value = false;
  } else {
    if (cantidad.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un nombre válido.",
        position: "top",
      });
      return;
    }

    if (nombregasto.value === "") {
      q.notify({
        type: "negative",
        message: "Por favor, ingrese un n_linea válido.",
        position: "top",
      });
      return;
    }

    const datos = {
      cantidad: cantidad.value,
      nombregasto: nombregasto.value,
      administrador: administrador.value,
      finca: finca.value,
      descripcion: descripcion.value,
      formapago: formapago.value,
      cost_value: cost_value.value,
      total: total.value,
      fecha: fecha.value,
      estado: 1,
    };

    console.log(_id, { datos });
    let res = await productos.editproductos(_id, datos);
    listarproductos();
    console.log(res);
    q.notify({
      type: "positive",
      message: "productos actualizada exitosamente.",
      position: "top",
    });
  }
}

listarproductos();

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