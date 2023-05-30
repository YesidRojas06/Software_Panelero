<template>
  <q-layout>
    <q-page-container>
      <div class="title-container"> 
        <h1 class="page-title">Mantenimiento</h1>
      </div>

        <div class="contenedor">
          <div class="contenedor-conciertos">
            <router-link class="lg4" to="/Proceso_diario">
              <div class="card">
                <div class="textos">
                  <center><h6>Proceso_diario</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">store</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Materia_prima">
              <div class="card">
                <div class="textos">
                  <center><h6>materiaPrima_tranformada</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">verified</i>
                </div>
              </div>
            </router-link>°

            <router-link class="lg4" to="/Empaques">
              <div class="card">
                <div class="textos">
                  <center><h6>Empaques</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">shopping_bag</i>
                </div>
              </div>
 
           </router-link>


           
          </div>
          </div>

              </q-page-container>
          </q-layout>
      
          


</template>

<style>
.lg4 {
  text-decoration: none;

}




.contenedor {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 0;  
  display: grid;
  grid-template-columns: 3fr;
  gap: 20px;
}

.contenedor-conciertos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 5px;
}

.card {
  border-radius: 10px;
  min-height: 200px;
  font-weight: bold;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color:white
}

.card:hover {
  background-color: rgb(14, 224, 14);
}

.card .textos {
  height: 100%;
  color: #000000;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}

@media screen and (max-width: 900px) {
  .contenedor-conciertos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media screen and (max-width: 700px) {
  .contenedor-conciertos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media screen and (max-width: 600px) {
  .contenedor-conciertos {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}



</style>









































































<!-- <style>
.q-card:hover {
  background-color: rgb(14, 224, 14);
}

.no-link {
  text-decoration: none;

}

.Proceso{
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.materiaPrima {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.Empaques {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}





</style> -->