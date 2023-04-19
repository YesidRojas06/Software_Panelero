<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-white text-grey-8">
            <q-toolbar class="GNL__toolbar">
                <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu"
                    class="q-mr-sm"><q-tooltip>Menu</q-tooltip></q-btn>
                <q-space />


                <div class="q-gutter-sm row items-center no-wrap">
                    <q-btn round flat>
                        <q-avatar size="26px">
                            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                        <q-tooltip>Perfil</q-tooltip>
                    </q-btn>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-white" :width="280">
            <q-list padding class="text-grey-8">
                <router-link v-for="link in links1" :key="link.text" :to="link.href" style="text-decoration: none;">
                    <q-item class="GNL__drawer-item text-black" v-ripple clickable>

                        <q-item-section avatar>
                            <q-icon :name="link.icon" />
                        </q-item-section>
                        <q-item-section>
                            <q-item-label> {{ link.text }}
                            </q-item-label>
                        </q-item-section>

                    </q-item>
                </router-link>
                <q-separator inset class="q-my-sm" />
                <div class="q-mt-md">
                    <div class="flex flex-center q-gutter-xs">
                        <a class="GNL__drawer-footer-link" aria-label="Privacy">Derechos reservados a WILYECORP</a>
                    </div>
                </div>
            </q-list>
        </q-drawer>

        <!-- <h1>{{userStore.userData}}</h1> -->

        <q-footer class="bg-white text-black" reveal elevated>
            <q-toolbar>

                <q-toolbar-title>Derechos reservados a WILYECORP.</q-toolbar-title>
            </q-toolbar>
        </q-footer>



        <q-page-container>
            <!-- <Home/> -->
            <router-view></router-view>
            
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
])

</script>

