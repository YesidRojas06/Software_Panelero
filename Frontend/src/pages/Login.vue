


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

