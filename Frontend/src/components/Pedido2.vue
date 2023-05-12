<template>
    <div>
      <div class="q-pa-md">
        <q-btn color="white" text-color="black" label="Nuevo Registro" @click="guardar"/>
  
        <q-table title="Treats" :rows="rows" :columns="columns">
          <template v-slot:body-cell-estado="props" style="opacity: 0;">
            <td v-if="props.row.estado == 1" style="color:green; text-align: center;">Activo</td>
            <span v-else>Inactivo</span>
          </template>
          <template v-slot:body-cell-opcion="props" style="opacity: 0;">
            <td style="text-align: center;">
              <button @click="edit()">Editar</button>
              <button v-if="props.row.estado == 1">Desactivar</button>
              <button v-else>Activar</button>
  
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
            <input type="text" >
            <p>Correo</p>
            <input type="text" >
            <p v-if="bd == 0 ">contraseña</p>
            <input v-if="bd == 0 " type="text" >
            <p>Rol</p>
            <input type="text" >
           
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
  
  let nuevo= ref(false)
  let bd= ref (0)
  
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
  function edit (){
  
  bd.value=1
    nuevo.value=true
  }
  
  function guardar (){
    bd.value=0
  nuevo.value=true
  }
  
   function guardarEditarDatos(){
   if(bd.value == 0 ){
    console.log("guardar");
   }else{
    console.log("editar");
   }
  }
  
  listarUsuarios()
  
  </script>
  
  <style lang="scss" scoped></style>