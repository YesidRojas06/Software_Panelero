<template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Bodegas</h1>
      </div>

      <q-btn
        color="white"
        text-color="black"
        label="Nueva Bodega"
        @click="guardar"
        style="
          left: 1300px;
          margin-bottom: 20px;
          margin-top: 60px;
          border-radius: 30px;"/>

      <q-table title="Bodega" :rows="rows" :columns="columns">
        <template v-slot:body-cell-estado="props" style="opacity: 0">
          <td
            v-if="props.row.estado == 1" style="color: green; text-align: center"> Activo </td>

          <td v-else style="color: rgb(251, 2, 2); text-align: center"> Inactivo </td>
        </template>


        <template v-slot:body-cell-opcion="props" style="opacity: 0">
          <td style="text-align: center">
            <q-btn @click="edit(props.row)" class="">📝</q-btn>
            <q-btn v-if="props.row.estado == 1" @click="inactive(props.row)">🚫</q-btn>
            <q-btn v-else @click="active(props.row)">✅</q-btn>
          </td>
        </template>
      </q-table>
    </div>

    <q-dialog
      v-model="nuevo"
      persistent
      transition-show="scale"
      transition-hide="scale">
      <q-card class="bg-teal text-dark" style="width: 500px; max-width: 80vw">
        <q-card-section style="background-color: rgb(14, 224, 14)">
          <div align="center" class="text-h6">
            {{ bd == 0 ? "Guardar Bodega" : "Editar Bodega" }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Codigo</p>
          <input type="text" v-model="Codigo" class="form-input" />
          
          <p>Nombre</p>
          <input type="text" v-model="Nombre" class="form-input" />
          
          
          <p>Descripcion</p>
          <input type="text" v-model="Descripcion" class="form-input" />
          
          <p v-if="bd == 0">contraseña</p>
          <input
            v-if="bd == 0"
            type="text"
            v-model="clave"
            class="form-input" />
          
          <p>Rol</p>
          <q-select
            :options="rolOptions"
            v-model="rol"
            emit-value
            map-options
            :option-value="'value'"
            :option-label="'label'"
            class="form-input"/>
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn
            label="Cancelar"
            @click="nuevo = false"
            style="background-color: rgb(243, 9, 9)"/>
          <q-btn @click="guardarEditarDatos" style="background-color: rgb(14, 224, 14)" >{{ bd == 0 ? "Guardar " : "Editar " }}

          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref,     } from "vue";
import { BodegasStore } from "../stores/Bodegas";
import { useQuasar } from "quasar";

const q = useQuasar();
const Bodegas = BodegasStore();
let rows = ref();

let rolOptions = ref([
  { label: "Admin", value: "Admin" },
  { label: "Bodegas", value: "Bodegas" },
]);

let Codigo = ref("");
let clave = ref("");
let Nombre = ref("");
let Descripcion = ref("");
let rol = ref("");


let nuevo = ref(false);
let bd = ref(0);
let _id = "";

let columns = ref([
  {
    name: "Codigo",
    required: true,
    label: "Codigo",
    align: "left",
    field: "Codigo",
    sortable: false,
  },
  {
    name: "Nombre",
    align: "center",
    label: "Nombre",
    field: "Nombre",
    sortable: true,
  },

  {
    name: "Descripcion",
    align: "center",
    label: "Descripcion",
    field: "Descripcion",
    sortable: true,
  },
  
  { name: "rol", label: "Rol", field: "rol", sortable: true, align: "center" },
  { name: "estado", label: "Estado", field: "estado", align: "center" },
  {name: "opcion", label: "Opciones", field: "", sortable: true, align: "center",},
]);

const listarBodegas = async () => {
  console.log(await Bodegas.getBodegas());
  rows.value = await Bodegas.getBodegas();
};
function edit(row) {
  console.log(row._id);
  bd.value = 1;
  nuevo.value = true;
  _id = row._id;
  Codigo.value = row.Codigo;
  Nombre.value = row.Nombre;
  rol.value = row.rol;
  Descripcion.value = row.Descripcion;
  
}

function guardar() {
  bd.value = 0;
  nuevo.value = true;
  limpiarFormulario(); // Limpia los valores del formulario antes de abrir el modal
  nuevo.value = true;

  const nuevoBodega = {
    Codigo: Codigo.value,
    Nombre: Nombre.value,
    rol: rol.value,
    Descripcion: Descripcion.value,
    
  };

  postBodegas.addBodegas(nuevoBodega).then(() => {
    listarBodegas();
  });
}


async function inactive(props) {
  console.log("desactivado", props.Codigo);
  let res = await Bodegas.inactiveBodegas(props._id);
  listarBodegas();
}

async function active(props) {
  console.log("activado", props.Codigo);
  let res = await Bodegas.activeBodegas(props._id);
  listarBodegas();
}



function limpiarFormulario() {
  Codigo.value = "";
  clave.value = "";
  Nombre.value = "";
  rol.value = "";
  Descripcion.value = "";
  bd.value = 0;
}

async function guardarEditarDatos() {
  if (bd.value == 0) {
    const datos = {
      Codigo: Codigo.value,
      Nombre: Nombre.value,
      Descripcion: Descripcion.value,
      contrasena: clave.value,
      rol: rol.value,
      estado: 0,
    };
    // console.log("guardar ",  datos);
    let res = await Bodegas.addBodegas(datos);
    listarBodegas();
    console.log(res.response.data);
  } else {
    const datos = {
      Codigo: Codigo.value,
      Nombre: Nombre.value,
      rol: rol.value,
      Descripcion: Descripcion.value,
      estado: 1,
    };
    console.log("editar ", datos);
    let res = await Bodegas.editBodegas(_id, datos);
    listarBodegas();
    console.log(res);
    q.notify({
      type: "positive",
      message: "Bodega actualizado exitosamente.",
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






















<!-- <template>
  <div>
    <div class="q-pa-md">
      <div class="title-container">
        <h1 class="page-title">Bodegas</h1>
      </div>

      <q-btn
        color="white"
        text-color="black"
        label="Nueva Bodega"
        @click="guardar"
        style="
          left: 1300px;
          margin-bottom: 20px;
          margin-top: 60px;
          border-radius: 30px;"
      />

      <q-table title="Bodega" :rows="rows" :columns="columns">
        <template v-slot:body-cell-estado="props" style="opacity: 0">
          <td v-if="props.row.estado == 1" style="color: green; text-align: center">
            Activo
          </td>

          <td v-else style="color: rgb(251, 2, 2); text-align: center">Inactivo</td>
        </template>

        <template v-slot:body-cell-opcion="props" style="opacity: 0">
          <td style="text-align: center">
            <q-btn @click="edit(props.row)" class="">📝</q-btn>
            <q-btn v-if="props.row.estado == 1" @click="inactive(props.row)">🚫</q-btn>
            <q-btn v-else @click="active(props.row)">✅</q-btn>
          </td>
        </template>
      </q-table>
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
            {{ bd == 0 ? "Guardar Bodega" : "Editar Bodega" }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Codigo</p>
          <input type="text" v-model="Codigo" class="form-input" />

          <p>Nombre</p>
          <input type="text" v-model="Nombre" class="form-input" />

          <p>Descripcion</p>
          <input type="text" v-model="Descripcion" class="form-input" />

          <p v-if="bd == 0">Contraseña</p>
          <input v-if="bd == 0" type="text" v-model="clave" class="form-input" />

          <p>Rol</p>
          <q-select
            :options="rolOptions"
            v-model="rol"
            emit-value
            map-options
            :option-value="'value'"
            :option-label="'label'"
            class="form-input"
          />
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn
            label="Cancelar"
            @click="nuevo = false"
            style="background-color: rgb(243, 9, 9)"
          />
          <q-btn @click="guardarEditarDatos" style="background-color: rgb(14, 224, 14)">
            {{ bd == 0 ? "Guardar" : "Editar" }}
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BodegasStore from "../stores/Bodegas.js";
import { useQuasar } from "quasar";

const q = useQuasar();
const Bodegas = BodegasStore();
let rows = ref();

let rolOptions = ref([
  { label: "Admin", value: "Admin" },
  { label: "Bodegas", value: "Bodegas" },
]);

let Codigo = ref("");
let clave = ref("");
let Nombre = ref("");
let Descripcion = ref("");
let rol = ref("");

let nuevo = ref(false);
let bd = ref(0);
let _id = "";

let columns = ref([
  {
    name: "Codigo",
    required: true,
    label: "Codigo",
    align: "left",
    field: "Codigo",
    sortable: false,
  },
  {
    name: "Nombre",
    align: "center",
    label: "Nombre",
    field: "Nombre",
    sortable: true,
  },

  {
    name: "Descripcion",
    align: "center",
    label: "Descripcion",
    field: "Descripcion",
    sortable: true,
  },

  { name: "rol", label: "Rol", field: "rol", sortable: true, align: "center" },
  { name: "estado", label: "Estado", field: "estado", align: "center" },
  {
    name: "opcion",
    label: "Opciones",
    field: "",
    sortable: true,
    align: "center",
  },
]);

const listarBodegas = async () => {
  console.log(await Bodegas.getBodegas());
  rows.value = await Bodegas.getBodegas();
};

function edit(row) {
  console.log(row._id);
  bd.value = 1;
  nuevo.value = true;
  _id = row._id;
  Codigo.value = row.Codigo;
  Nombre.value = row.Nombre;
  rol.value = row.rol;
  Descripcion.value = row.Descripcion;
}

function guardar() {
  bd.value = 0;
  nuevo.value = true;
  limpiarFormulario(); // Limpia los valores del formulario antes de abrir el modal
  nuevo.value = true;

  const nuevoBodega = {
    Codigo: Codigo.value,
    Nombre: Nombre.value,
    rol: rol.value,
    Descripcion: Descripcion.value,
  };

  Bodegas.addBodega(nuevoBodega).then(() => {
    listarBodegas();
  });
}

async function inactive(props) {
  console.log("desactivado", props.Codigo);
  let res = await Bodegas.inactiveBodega(props._id);
  listarBodegas();
}

async function active(props) {
  console.log("activado", props.Codigo);
  let res = await Bodegas.activeBodega(props._id);
  listarBodegas();
}

function limpiarFormulario() {
  Codigo.value = "";
  clave.value = "";
  Nombre.value = "";
  rol.value = "";
  Descripcion.value = "";
  bd.value = 0;
}

async function guardarEditarDatos() {
  if (bd.value == 0) {
    const datos = {
      Codigo: Codigo.value,
      Nombre: Nombre.value,
      Descripcion: Descripcion.value,
      contrasena: clave.value,
      rol: rol.value,
      estado: 0,
    };

    let res = await Bodegas.addBodega(datos);
    listarBodegas();
    console.log(res.response.data);
  } else {
    const datos = {
      _id: _id,
      Codigo: Codigo.value,
      Nombre: Nombre.value,
      Descripcion: Descripcion.value,
      rol: rol.value,
    };

    let res = await Bodegas.updateBodega(datos);
    listarBodegas();
    console.log(res);
  }

  limpiarFormulario();
  nuevo.value = false;
}

listarBodegas();
</script>

<style>
.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}
</style> -->
