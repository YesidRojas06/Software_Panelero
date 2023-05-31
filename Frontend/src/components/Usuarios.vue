  <template>
    <div>
      <div class="q-pa-md">
        
        <q-btn color="white" text-color="black" label="Nuevo Usuario" @click="guardar" 
        style="left: 1300px; margin-bottom: 20px; margin-top: 60px;
        border-radius: 30px;  "/>
  
        <q-table title="Usuario" :rows="rows" :columns="columns">
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
      </div>
  
  
        <q-dialog v-model="nuevo" persistent transition-show="scale" transition-hide="scale">
          <q-card class="bg-teal text-dark"  style="width: 500px; max-width: 80vw;">
  
            <q-card-section style="background-color:rgb(14, 224, 14)  ; ">
              <div align= "center" class="text-h6">{{ bd == 0?"Guardar Ususario": "Editar Usuario" }}</div>
  
         
  
            </q-card-section>
  
            <q-card-section class="q-pt-none">
              <p>Nombre</p>
            <input type="text" v-model="nombre" class="form-input" >
            <p>Correo</p>
            <input type="text" v-model="correo" class="form-input">
            <p v-if="bd == 0 ">contraseña</p>
            <input v-if="bd == 0 " type="text" v-model="clave" class="form-input">
            <p>Rol</p>
            <q-select :options="rolOptions"  v-model="rol" emit-value map-options 
            :option-value="'value'" :option-label="'label'" class="form-input" />
            </q-card-section>
  
              <q-card-actions align="center" class="bg-white text-black">
              <q-btn  label="Cancelar" @click="nuevo=false" style="background-color: rgb(243, 9, 9)"/>
              <q-btn  @click="guardarEditarDatos" style="background-color: rgb(14, 224, 14)">{{ bd == 0?"Guardar ": "Editar "  }} </q-btn> 
  
         
              
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
  
  let rolOptions = ref([
    { label: 'Admin', value: 'Admin' },
    { label: 'User', value: 'User' }
  ]);
  
  
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
    // console.log(await getUser.getUsers());
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
    limpiarFormulario(); // Limpia los valores del formulario antes de abrir el modal

  
   
  
    // const nuevoUsuario = {
    //   nombre: nombre.value,
    //   correo: correo.value,
    //   rol: rol.value,
    // };
  
  
    // getUser.addUser(nuevoUsuario)
    // // .then(() => {
    // listarUsuarios();
    // // });
    
  }



  async function inactive(props) {
    console.log("desactivado", props.nombre);
    let res = await getUser.inactiveUser(props._id);
    listarUsuarios()
  }
  
  async function active(props) {
    console.log("activado", props.nombre);
    let res = await getUser.activeUser(props._id);
    listarUsuarios()
  }
  

  
  function limpiarFormulario() {
    nombre.value = "";
    clave.value = "";
    correo.value = "";
    rol.value = "";
    bd.value = 0;
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
    // console.log("guardar ",  datos);
    let res = await getUser.addUser(datos);
    listarUsuarios()
    nuevo.value = false;
    console.log(res.response.data);
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
    q.notify({
        type: "positive",
        message: "Usuario actualizado exitosamente.",
        position: "top",
      });
   }
  }
  
  
  listarUsuarios()
  
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
  .q-btn:hover{
    background-color: rgb(14, 224, 14);
  }
  .form-input {
      margin-bottom: 30px; /* Ajusta el margen inferior entre los campos */
     
    }
    </style>