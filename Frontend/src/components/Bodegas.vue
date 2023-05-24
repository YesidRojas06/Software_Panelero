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
              <q-btn v-if="props.row.estado == 1" >🚫</q-btn>
              <q-btn v-else>✅</q-btn>
  
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
  let rows = ref()
  
  
  let nombre = ref("");
  let clave=ref("")
  let correo = ref("");
  let rol = ref("");
  
  
  
  let nuevo= ref(false)
  let bd= ref (0)
  let _id=""
  
  let columns = ref([
    {
      name: 'Codigo',
      required: true,
      label: 'Codigo',
      align: 'left',
      field: "Codigo",
      sortable: false
    },
    { name: 'nombre', align: 'center', label: 'nombre', field: "nombre", sortable: true },
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
      
    })
    
  }
  
  
  
    async function guardarEditarDatos(){
  
   if(bd.value == 0 ){
    const datos = {
      nombre: nombre.value,
      correo: correo.value,
      contrasena:clave.value,
      rol: rol.value,
      estado:0,
    };
    console.log("guardar ",  datos);
    let res = await getUser.addUser(datos);
    listarUsuarios()
    console.log(res);
   }else{
    const datos = {
      nombre: nombre.value,
      correo: correo.value,
      rol: rol.value,
      estado:1,
    };
    console.log("editar ", datos);
    let res = await getUser.editUser(_id, datos);
    listarUsuarios()
    console.log(res);
   }
  }
  
  listarUsuarios()
  
  </script>
  
  <style lang="scss" scoped></style>