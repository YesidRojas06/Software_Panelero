<template>
    <div>
        <div class="q-pa-md">
            <q-table title="Treats" :rows="rows" :columns="columns" >
            <template v-slot:body-cell-estado="props" style="opacity: 0;">
               <td v-if="props.row.estado==1" style="color:green; text-align: center;">Activo</td>
                <span v-else>Inactivo</span>
            </template>
            <template v-slot:body-cell-opcion="props" style="opacity: 0;">
               <td style="text-align: center;">
                <button>Editar</button>
                <button v-if="props.row.estado==1">Desactivar</button>
                <button v-else >Activar</button>
               </td>
            </template>
            
            </q-table>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted } from "vue"
    import {UserStore} from "../stores/user"

    const getUser = UserStore()
    let rows = ref([])

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
  { name: 'rol', label: 'Rol', field: 'rol', sortable: true, align:"center" },
  { name: 'estado', label: 'Estado', field: 'estado', align:"center" },
  { name: 'opcion', label: 'Opciones', field: '', sortable: true, align:"center" }
])

const listarUsuarios = async()=>{
    console.log(await getUser.getUsers());
    rows.value=await getUser.getUsers()
}

listarUsuarios()

</script>
<!-- 
<script setup>
import { ref, onMounted } from "vue"
import {UserStore} from "../stores/user"

const getUser = UserStore()

let rows = ref([])
let columns = ref([
{
    name: 'nombre',
    required: true,
    label: 'Nombre',
    align: 'left',
    field: "nombre",
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Correo', field: 'calories', sortable: true },
  { name: 'fat', label: 'Rol', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Estado', field: 'carbs' },
  { name: 'iron', label: 'Opciones', field: 'iron', sortable: true }
])

onMounted(() => {
   getUser.getUsers()
   console.log(getUser.getUsers());
}),





</script>

<style lang="scss" scoped></style> -->