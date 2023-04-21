<template>
  <q-layout>
    <q-page-container>
    <!-- <q-page> -->
      <div class="inventory-page">
    <h1 class="page-title">Módulo de Inventario</h1>
    <table class="inventory-table">
      <thead>
        <tr>
          <th>Bodegas</th>
          <th>Entradas al Inventario</th>
          <th>Existencias</th>
          <th>Mantenimientos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in inventoryItems" :key="index">
          <td>{{ item.bodegas }}</td>
          <td>{{ item.entradas }}</td>
          <td>{{ item.existencias }}</td>
          <td>{{ item.mantenimientos }}</td>
        </tr>
      </tbody>
    </table>
    <div class="button-group">
      <button class="btn-create" @click="createItem">Crear</button>
      <button class="btn-edit" @click="editItem">Editar</button>
      <button class="btn-delete" @click="deleteItem">Eliminar</button>
    </div>
    <h2 class="section-title">Administrativos</h2>
    <form class="admin-form" @submit.prevent="submitForm">
      <!-- Campos del formulario de actividades administrativas -->
    </form>
  </div>
    <!-- </q-page> -->
  </q-page-container>
  </q-layout>
</template>




<script setup>
import { ref } from 'vue'

const inventoryItems = ref([
  { bodegas: "Bodega 1", entradas: 10, existencias: 50, mantenimientos: 5 },
  { bodegas: "Bodega 2", entradas: 5, existencias: 20, mantenimientos: 3 },
  // Agrega más elementos de inventario si es necesario
])

const formData = ref({
  // Datos del formulario de actividades administrativas
})

function createItem() {
  // Lógica para crear un nuevo elemento en el inventario
}

function editItem() {
  // Lógica para editar un elemento del inventario
}

function deleteItem() {
  // Lógica para eliminar un elemento del inventario
}

function submitForm() {
  // Lógica para enviar el formulario de actividades administrativas
}

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const links1 = ref([
  { icon: 'home', text: 'Inicio', href: '/home' },
  { icon: 'newspaper', text: 'Noticias', href: '/news' },
  { icon: 'how_to_reg', text: 'Registrar', href: '/register' },
  { icon: 'account_circle', text: 'Perfil', href: '/profile' },
  { icon: 'account_circle', text: 'Login', href: '/login' }
])

</script>

<style scoped>
.inventory-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.inventory-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.inventory-table th,
.inventory-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.btn-create,
.btn-edit,
.btn-delete {
  margin-left: 10px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.admin-form {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
}

/* Estilos adicionales para el formulario de actividades administrativas */
</style>