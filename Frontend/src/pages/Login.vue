<!-- <template>
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
                 <router-link to="/home"> -->
                  <!-- <q-btn @click="login()" style="border-radius: 10px" color="black" label="Iniciar Sesión" /> -->
                <!-- </router-link> -->
    
              <!-- </div>
            </div> -->

            <!-- Imagen -->
            <!-- <div style="width: 90%; height: 100%">
              <img style="width: 100%; height: 100%"
                src="../assets/cana-azucar.jpg" alt="" />
            </div>
          </div>

          <div class="col-1"></div>
    </div>
</template>  -->








<!-- <template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="login-title" style="font-size: xx-large;">Iniciar sesión</h1>
      <form @submit.prevent="login">
        <label for="email">Nombre de usuario</label>
        <input type="email" id="email" name="email" v-model="email" required>

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" v-model="password" required> 

        <button type="submit">Iniciar sesión</button>
        
        <div v-if="showValidationErrors">
          <p>Rellene este campo en ambos campos.</p>
        </div>
      </form>
      <p>¿No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
    </div>
    <div class="image-container"></div>
  </div>
</template>




<script setup>


import axios from 'axios'
import { ref,onBeforeMount } from "vue";
import { getUsers,setUsers} from "../api/users.api";
import { api } from "../../boot/axios"

import { useRouter} from 'vue-router'

import { UserStore} from '../stores/user.js'

let dense = ref(false);
let user= ref("raulyesidII@gmail.com")
let pass = ref("123456")

const router = useRouter()

const store = UserStore() -->

<!-- /* getUsers(); */

// onBeforeMount(async () => {
//   await getUsers().then((res) => {
//   console.log(res)}) -->

<!-- // // await login().then((res) => {
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



<style>


.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  width: 60%;
  max-width: 700px;
  background-color: #ffffff;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-container {
  width: 55%;
  height: 59vh;
  background-image: url('https://elpoderdelconsumidor.org/wp-content/uploads/2019/12/cania.jpg');
  background-size: cover;
  background-position: center;
}

.login-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem; 
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-size: 1.2rem;
}

input {
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  font-size: 1.2rem;
  padding: 0.5rem;
  background-color: #0089ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

p {
  text-align: center;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    height: auto;
  }

  .login-box {
    width: 100%;
    max-width: 500px;
    margin: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #28ff0c;
    padding: 2rem;
  }

  .image-container {
    width: 100%;
    height: 300px;
  }
}

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
 -->



 <template>
 <div class="login-container">
    <div class="login-box">
      <h1 class="login-title" style="font-size: xx-large;">Iniciar sesión</h1>
      <form @submit.prevent="login">
        <label for="email">Nombre de usuario</label>
        <input type="email" id="email" name="email" v-model="email" required>

        <label for="password">Contraseña</label>
        <input type="password" id="password" name="password" v-model="password" required> 

        <button type="submit">Iniciar sesión</button>
        
        <div v-if="showValidationErrors">
          <p>Rellene este campo en ambos campos.</p>
        </div>
      </form>
      <p>¿No tienes una cuenta? <a href="#">Regístrate aquí</a></p>
    </div>
    <div class="image-container"></div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from "vue"
import { useRouter } from 'vue-router'

let email = ref("raulyesidII@gmail.com")
let password = ref("123456")
let showValidationErrors = ref(false)

const router = useRouter()

function login() {
  // Validar contraseña antes de enviar la solicitud
  // Aquí debes implementar la lógica de validación adecuada con el servidor
  // Puedes utilizar axios.post para enviar la solicitud al servidor y verificar la contraseña allí

  // Ejemplo simplificado de validación en el cliente
  if (password.value === "") {
    showValidationErrors.value = true
    return
  }

  // Aquí debes enviar la solicitud al servidor para verificar la contraseña con el correo

  // Si la validación es exitosa, redirige al usuario a la página de inicio
  router.push('/home')
}
</script>

<style>

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  width: 60%;
  max-width: 700px;
  background-color: #ffffff;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-container {
  width: 48%;
  height: 72vh;
  background-image:   url('https://elpoderdelconsumidor.org/wp-content/uploads/2019/12/cania.jpg');
  background-size: cover;
  background-position: center;
}

.login-title {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem; 
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-size: 1.2rem;
}

input {
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  font-size: 1.2rem;
  padding: 0.5rem;
  background-color: #0089ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

p {
  text-align: center;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
    height: auto;
  }

  .login-box {
    width: 100%;
    max-width: 500px;
    margin: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    padding: 2rem;
  }

  .image-container {
    width: 100%;
    height: 300px;
  }
}

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
/* Estilos omitidos por brevedad */
</style>

