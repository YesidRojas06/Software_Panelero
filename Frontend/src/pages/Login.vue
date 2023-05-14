<template>
    <div class="row background-image ">
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
                <b>Iniciar Sesión</b>
              </h4>

              <q-input style="background-color: white; width: 90%; border-radius: 10px" outlined v-model="user"
                label="Usuario" stack-label :dense="dense" /><br />
              <q-input style="background-color: white; width: 90%; border-radius: 10px" outlined v-model="pass"
                label="Contraseña" stack-label :dense="dense" />
                <p class="forgot-password">
      <router-link to="/formulario">¿Olvidaste tu contraseña?</router-link>
    </p>

              <div style="
                    width: 35%;
                    height: 20px;
                    margin: 0px auto;
                    margin-top: 5px;
                  ">
                <!-- <router-link to="/home"> -->
                  <q-btn @click="login()" style="border-radius: 10px" color="black" label="Iniciar Sesión" />
                <!-- </router-link> -->
    
              </div>
            </div>

            <!-- Imagen -->
            <div style="width: 90%; height: 100%">
              <img style="width: 100%; height: 100%"
                src="../assets/cana-azucar.jpg" alt="" />
            </div>
          </div>

          <div class="col-1"></div>
    </div>
</template>


<script setup>
import axios from 'axios'
import { ref,onBeforeMount } from "vue";
import { getUsers,setUsers,login, } from "../api/users.api";
import { api } from "../../boot/axios"

import { useRouter} from 'vue-router'

import { UserStore} from '../stores/user.js'

let dense = ref(false);
let user= ref("raulyesidII@gmail.com")
let pass = ref("123456")

const router = useRouter()

const store = UserStore()

/* getUsers(); */

// onBeforeMount(async () => {
//   await getUsers().then((res) => {
//   console.log(res)})

// // await login().then((res) => {
//     //gf
// //   }) 

// }),

function login() {
  console.log('en login')
  axios.post('http://localhost:3100/usuario/login', {correo: user.value, contrasena: pass.value})
    .then(response => {
      // Si la respuesta es satisfactoria, guarda el token de autenticación en el local storage
      // localStorage.setItem('token', response.data.token);

      store.createToken(response.data.token)

      console.log(store.token)
      
      // Luego, redirige al usuario a la página de inicio
      router.push('/home'); 
    })
    .catch(error => {
      console.error(error);
    });
}





</script>














<style lang="sass" scoped>
.my-card
  width: 100%
</style>


<style>
  .background-image {
    background-size: cover;
    background-position: center center;
    height: 120vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .forgot-password{
    background-color: white;
    color: black;
    position: relative;
    height: 100px;
    width: 100px;
  }
</style>

