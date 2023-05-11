<template>
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
            <template v-if="column.field">
              <span v-if="row.editing">
                <input v-model="row[column.field]" type="text" class="input" :placeholder="column.label">
              </span>
              <span v-else>{{ row[column.field] }}</span>
            </template>
            <template v-else>
              <button @click="guardarCambios(index)" v-if="row.editing">Guardar</button>
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
  
  const guardarCambios = (index) => {
    const editedRow = rows.value[index];
    console.log("Guardando cambios para la fila", index, ":", editedRow);
  
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
    width: 100%;
    border-collapse: collapse;
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







