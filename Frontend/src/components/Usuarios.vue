<!-- <template>
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.name" :class="{'sortable': column.sortable}" @click="sortColumn(column.field)">
            {{ column.label }}
            <span v-if="column.sortable" class="sort-icon"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="column in columns" :key="column.name" :class="{'editing': row.editing}">
            <template v-if="row[column.estado]">
              <span>
              {{ row[column.field] }}
              </span>
            </template>
            <template v-if="column.field">
              <span v-if="row.editing">
                <input v-model="row[column.field]" type="text" class="input" :placeholder="column.label">
              </span>
              <span v-else>{{ row[column.field] }}</span>
            </template>
            <template v-else>
              <button @click="guardarCambios(index, column)" v-if="row.editing">Guardar</button>
              <button @click="editarUsuario(index)" v-else>Editar</button>
              
              <button @click="activarUsuario(index)" v-if="row.estado === 0">Activar</button>
              <button @click="desactivarUsuario(index)" v-else>Desactivar</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { UserStore } from "../stores/user";
  
  const getUser = UserStore();
  
  const rows = ref([]);
  const columns = ref([
    {
      name: 'nombre',
      required: true,
      label: 'Nombre',
      align: 'left',
      field: 'nombre',
      sortable: false
    },
    { name: 'correo', align: 'center', label: 'Correo', field: 'correo', sortable: true },
    { name: 'rol', label: 'Rol', field: 'rol', sortable: true, align: 'center' },
    { name: 'estado', label: 'Estado', field: 'estado', align: 'center' },
    { name: 'opcion', label: 'Opciones', field: '', sortable: true, align: 'center' }
  ]);
  
  const listarUsuarios = async () => {
    rows.value = await getUser.getUsers();
  };
  
  const guardarCambios = (index, column) => {
    const editedRow = rows.value[index];
    console.log("Guardando cambios para la fila", index, ":", editedRow, " ");
    if (editedRow.nombre && editedRow.contrasena && editedRow.rol)
    // Realiza las acciones necesarias para guardar los cambios, como enviar una solicitud HTTP al servidor
  
    editedRow.editing = false;
  };
  
  const editarUsuario = (index) => {
    rows.value[index].editing = true;
  };
  
  const activarUsuario = (index) => {
    rows.value[index].estado = 1;
  };
  
  const desactivarUsuario = (index) => {
    rows.value[index].estado = 0;
  };
  
  onMounted(listarUsuarios);
  </script>
  
  
  
  
  
  
  
  
  
  
  
  <style>
  .table {
    width: 90%;
    position: relative;
    left: 50px;
    border-collapse: collapse;
    margin-top: 90px;
    border-collapse: separate;
    border: 1px solid;
    border-radius:   10px;

  }
  
  th {
    background-color: #f2f2f2;
    border-bottom: 1px solid #ccc;
    padding: 8px;
    cursor: pointer;
  }
  
  .sortable:hover {
    background-color: #e6e6e6;
  }
  
  .sort-icon {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #000;
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
}

td {
  border-bottom: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.editing input {
  width: 100%;
  padding: 4px;
}

.button-container button {
  margin-right: 4px;
}

.button-container button:last-child {
  margin-right: 0;
}


td {
  border-bottom: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.editing input {
  width: 100%;
  padding: 4px;
}

.button-container button {
  margin-right: 4px;
}

.button-container button:last-child {
  margin-right: 0;
}
</style>


 -->


<template>
  <div>
    <div class="q-pa-md">
      <q-btn color="white" text-color="black" label="Nuevo Registro" @click="guardar"/>

      <q-table title="Usuario" :rows="rows" :columns="columns">
        <template v-slot:body-cell-estado="props" style="opacity: 0;">
          <td v-if="props.row.estado == 1" style="color:green; text-align: center;">Activo</td>
          <span v-else>Inactivo</span>
        </template>
        <template v-slot:body-cell-opcion="props" style="opacity: 0;"> 
          <td style="text-align: center;">
            <q-btn @click="edit(props.row)" class="">📝</q-btn>
            <button v-if="props.row.estado == 1" >🚫</button>
            <button v-else>✅</button>

          </td>
        </template>

      </q-table>
    </div>


      <q-dialog v-model="nuevo" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-teal text-white" style="width: 300px">
          <q-card-section>
            <div class="text-h6">{{ bd == 0?"Guardar Ususario": "Editar Usuario" }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <p>Nombre</p>
          <input type="text" v-model="nombre">
          <p>Correo</p>
          <input type="text" v-model="correo">
          <p v-if="bd == 0 ">contraseña</p>
          <input v-if="bd == 0 " type="text" v-model="clave">
          <p>Rol</p>
          <input type="text" v-model="rol">
         
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn color="warning" label="Cancelar" @click="nuevo=false"/>
            <q-btn color="secondary" @click="guardarEditarDatos">{{ bd == 0?"Guardar ": "Editar "  }} </q-btn> 
            
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

</template>
<script setup>
import { ref, onMounted } from "vue"
import { UserStore } from "../stores/user"
import { useQuasar } from 'quasar'

const q=useQuasar()
const getUser = UserStore()
let rows = ref([])


let nombre = ref("");
let clave=ref("")
let correo = ref("");
let rol = ref("");



let nuevo= ref(false)
let bd= ref (0)
let _id=""

let columns = ref([
  {
    name: 'nombre',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: "nombre",
    sortable: false
  },
  { name: 'correo', align: 'center', label: 'Correo', field: "correo", sortable: true },
  { name: 'rol', label: 'Rol', field: 'rol', sortable: true, align: "center" },
  { name: 'estado', label: 'Estado', field: 'estado', align: "center" },
  { name: 'opcion', label: 'Opciones', field: '', sortable: true, align: "center" }
])

const listarUsuarios = async () => {
  console.log(await getUser.getUsers());
  rows.value = await getUser.getUsers()
}
function edit (row){
  console.log(row._id);
  bd.value=1;
  nuevo.value=true
  _id = row. _id;
  nombre.value = row.nombre;
  correo.value = row.correo;
  rol.value = row.rol;
}

function guardar (){
  bd.value=0
  nuevo.value=true;

  if (nombre.value.trim() === "" || correo.value.trim() === "" || rol.value.trim() === "") {
    q.notify({
      type: "negative",
      message: "Por favor, rellene todos los campos obligatorios.",
      position: "top",
    });
    return;
  }


  const nuevoUsuario = {
    nombre: nombre.value,
    correo: correo.value,
    rol: rol.value,
  };


  postUser.addUser(nuevoUsuario).then(() => {
    listarUsuarios();
    q.notify({
      type: "positive",
      message: "Usuario guardado exitosamente.",
      position: "top",
    });
  });
}



  async function guardarEditarDatos(){

 if(bd.value == 0 ){
  const datos = {
    nombre: nombre.value,
    correo: correo.value,
    contrasena:clave.value,
    rol: rol.value,
    estado:1
  }
  console.log("guardar ",  datos);
  let res = await getUser.addUser(datos);
  listarUsuarios()
  console.log(res);
 }else{
  const datos = {
    nombre: nombre.value,
    correo: correo.value,
    rol: rol.value,
  }
  console.log("editar ", datos);
  let res = await getUser.editUser(_id, datos);
  listarUsuarios()
  console.log(res);
 }
}

listarUsuarios()

</script>

<style lang="scss" scoped></style>




