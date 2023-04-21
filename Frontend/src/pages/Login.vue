<template>

  <!-- <div class="row " style="background-image: url('../src/assets/Estudios-mexicanos-de-videojuegos-que-debes-conocer-2.webp')">
    <div class="col-4"></div>
    <div class="col-4 full-height">
ss
    </div>
    <div class="col-4"></div>
  </div> -->
  <!-- <template> -->
  <!-- <q-page> -->
    <div class="row">
      <!-- <div v-show="home == true" style="min-height: 100vh; background-color: green"> -->
        <!-- <div v-show="home == true" class="row" style="min-height: 90vh"> -->
          <div class="col-1"></div>
          <div class="col-10" style="
                background-color: white;
                margin-top: 120px;
                color: white;
                margin-bottom: 30px;
                display: flex;
              " >
            <div style="
                  padding-left: 40px;
                  padding-top: 40px;
                  border-left: 2px solid white;
                  width: 400px;
                ">
              <h4 style="
                    color: black;
                    font-family: Cambria, Cochin, Georgia, Times,
                      'Times New Roman', serif;
                  ">
                <b>Iniciar Seccion</b>
              </h4>

              <q-input style="background-color: white; width: 90%; border-radius: 10px" outlined v-model="user"
                label="Usuario" stack-label :dense="dense" /><br />
              <q-input style="background-color: white; width: 90%; border-radius: 10px" outlined v-model="pass"
                label="Contraseña" stack-label :dense="dense" />

              <div style="
                    width: 35%;
                    height: 40px;
                    margin: 0px auto;
                    margin-top: 10px;
                  ">
                <router-link to="/homee">
                  <q-btn style="border-radius: 10px" color="black" label="Login" />
                </router-link>
                  <!-- <q-btn @click="addUser()" style="border-radius: 10px" color="black" label="Login" /></router-link> -->
              </div>
            </div>

            <!-- Imagen -->
            <div style="width: 90%; height: 100%">
              <img style="width: 100%; height: 100%"
                src="../assets/Estudios-mexicanos-de-videojuegos-que-debes-conocer-2.webp" alt="" />
            </div>
          </div>

          <div class="col-1"></div>
        <!-- </div> -->
      <!-- </div> -->

      <!-- <div v-show="home == false"> -->
        <!-- <h1>Te Registraste</h1> -->
        <!-- <router-view></router-view> -->
      <!-- </div> -->
      <!-- termina div que contiene todo -->
    </div>
  <!-- </q-page> -->
<!-- </template> -->

</template>


<script setup>
import { ref } from "vue";
import { UserStore } from "../stores/user.js"

let home = ref(true);
let dense = ref(false);

function pasarHome() {
  home.value = false;
}

const userStore = UserStore()

let user = ref("w@w.com")
let pass = ref("123456")

const addUser = () => {
  userStore.registerUser(user.value, pass.value)
}
function login() {
  userStore.login(user.value, pass.value)
}

</script>
<style lang="sass" scoped>
.my-card
  width: 100%
</style>