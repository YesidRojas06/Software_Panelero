<template>
  <q-layout>
    <q-page-container>
      <div class="title-container"> 
        <h1 class="page-title">Mantenimiento</h1>
      </div>

        <div class="contenedor">
          <div class="contenedor-conciertos">
            <router-link class="lg4" to="/usuarios">
              <div class="card">
                <div class="textos">
                  <center><h6>Usuarios</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">person_search</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Labores">
              <div class="card">
                <div class="textos">
                  <center><h6>Labores</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">engineering</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Forma de Pago</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">shopping_cart</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Tipo de Pago</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">transform</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Unidad de Medida</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">inventory</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>EPS</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">health_and_safety</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Tipo de Documento</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">assignment_ind</i>
                </div>
              </div>
            </router-link>


            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Lotes</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">terrain</i>
                </div>
              </div>
            </router-link>


            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Numero de Etapa</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">settings_brightness</i>
                </div>
              </div>
            </router-link>


            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Numero de Finca</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">terrain</i>
                </div>
              </div>
            </router-link>


            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Empaques</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">settings_applications</i>
                </div>
              </div>
            </router-link>


            <router-link class="lg4" to="">
              <div class="card">
                <div class="textos">
                  <center><h6>Soporte</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">density_medium</i>
                </div>
              </div>
            </router-link>
          </div>
        </div>
    </q-page-container>
  </q-layout>
  
</template>
  


<style >

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



















 <!-- .usuario {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.inventario {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.costos {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}  -->



 <!-- <div class="contenedor">

      <div class="contenedor-second">
        <div class="card"></div>
        <div class="">
          <q-card class="home">
            <q-card-section>
              <router-link to="/usuarios" class="no-link">
                <q-icon class="icon q-m" size="130px" name="person_search" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black;  text-align: center; ">Usuario</div>

              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>
        </div> -->

        <!-- <div class="card">

<q-card class="contenedor-second">
  <q-card-section class="">
    <router-link to="" class="no-link">
      <q-icon class="icon q-m" size="130px" name="engineering" style="left: 80px; color: black;  "></q-icon>
      <div class="text-h6" style="color: black; position: relative; 
      text-align: center;"> Labores </div>
    </router-link>
  </q-card-section>
  <q-card-actions>
  </q-card-actions>
</q-card>


</div>

        
        <div class="card">

          <q-card class="contenedor-second">
            <q-card-section class="">
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="engineering" style="left: 80px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                text-align: center;"> Labores </div>
              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>


        </div>

        <div class="card">

          <q-card class="contenedor-second">
            <q-card-section class="">
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="engineering" style="left: 80px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                text-align: center;"> Labores </div>
              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>


        </div> -->
        <!-- <div class="card">


          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="request_page" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative;
         text-align: center;">Forma de Pago </div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>


        </div>
      </div> -->
        <!-- <div class="card"></div>



          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="request_page" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Tipo de Pago </div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>

        </div> -->
        <!-- <div class="card">




          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="square_foot" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Unidad de Medida</div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card> -->




        <!-- </div>
        <div class="card">
          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="health_and_safety" style="left: 90px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">EPS</div>

              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>


           </div> -->

        <!-- <div class="card"></div>

          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="assignment_ind" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Tipo de documento </div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>
        <div class="card"> -->




          <!-- <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="terrain" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;"> Lotes </div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card> -->




        <!-- </div>
        <div class="card">
          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="settings_brightness" style="left: 90px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">Numero de Etapa</div>

              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>

      </div> -->
      
        <!-- <div class="card"></div>


          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="terrain" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Numero de Finca</div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card> -->



        <!-- <div class="card">




          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="settings_applications" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Empaques</div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card> -->




        <!-- </div>
        <div class="card">
          <q-card class="contenedor-second">
            <q-card-section>
              <router-link to="" class="no-link">
                <q-icon class="icon q-m" size="130px" name="density_medium" style="left: 90px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">Soporte</div>

              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>
        </div> -->