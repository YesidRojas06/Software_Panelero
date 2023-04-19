<template>
  <q-layout>
    <q-page-container>
    <!-- <q-page> -->
      <p>Perfil</p>
    <!-- </q-page> -->
  </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
// import Home from '../components/Home.vue'
// import { useUserStore } from "../stores/user.js"

// const userStore = useUserStore()
const leftDrawerOpen = ref(false)


function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

let links1 = ref([
    { icon: 'home', text: 'Inicio', href: '/home' },
    { icon: 'newspaper', text: 'Noticias', href: '/news' },
    { icon: 'how_to_reg', text: 'Registrar', href: '/register' },
    { icon: 'account_circle', text: 'Perfil', href: '/profile' },
    { icon: 'account_circle', text: 'Login', href: '/login' }
])

</script>

