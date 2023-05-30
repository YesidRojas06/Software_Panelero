<template>
  <q-layout>
    <q-page-container>
      <div class="title-container"> 
        <h1 class="page-title">Home</h1>
      </div>


      <div class="contenedor">
          <div class="contenedor-conciertos">
            <router-link class="lg4" to="/mantenimiento">
              <div class="card">
                <div class="textos">
                  <center><h6>Modulo de mantemiento</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">settings</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/inventario">
              <div class="card">
                <div class="textos">
                  <center><h6>Modulo de inventario</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">article</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/costos">
              <div class="card">
                <div class="textos">
                  <center><h6>Modulo de costos</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">paid</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/pedidos">
              <div class="card">
                <div class="textos">
                  <center><h6>Modulo de pedidos</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">shopping_cart</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Transformacion">
              <div class="card">
                <div class="textos">
                  <center><h6>Modulo de transformación</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">autorenew</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Reportes">
              <div class="card">
                <div class="textos">
                  <center><h6>Modulo de reportes</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">report_problem</i>
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

      <!-- <div class="row">
        <div class="col-2"></div>
        <div class="col-3">
          <q-card class="home">
            <q-card-section>
              <router-link to="/mantenimiento" class="no-link">
                <q-icon class="icon q-m" size="130px" name="settings" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black;  text-align: center; ">Modulo de mantemiento</div>

              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-3 q-ma-4">

          <q-card class="inventario">
            <q-card-section class="">
              <router-link to="/inventario" class="no-link">
                <q-icon class="icon q-m" size="130px" name="article" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                text-align: center;">Modulo de inventario </div>
              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>


        </div>
        <div class="col-3">


          <q-card class="costos">
            <q-card-section>
              <router-link to="/costos" class="no-link">
                <q-icon class="icon q-m" size="130px" name="paid" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative;
                 text-align: center;">Modulo de costos </div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>



        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>

        <div class="col-3">

          <q-card class="pedidos">
            <q-card-section>
              <router-link to="/pedidos" class="no-link">
                <q-icon class="icon q-m" size="130px" name="shopping_cart" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Modulo de pedidos </div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>

        </div>
        <div class="col-3">




          <q-card class="transformacion">
            <q-card-section>
              <router-link to="/transformacion" class="no-link">
                <q-icon class="icon q-m" size="130px" name="autorenew" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Modulo de transformación</div>


              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>




        </div>
        <div class="col-3">
          <q-card class="reportes">
            <q-card-section>
              <router-link to="/reportes" class="no-link">
                <q-icon class="icon q-m" size="130px" name="report_problem" style="left: 90px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">Modulo de reportes</div>

              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>
        </div>
      </div>

    </q-page-container>
  </q-layout>
</template>
  

<style >
.q-card:hover {
  background-color: rgb(14, 224, 14);
}

.no-link {
  text-decoration: none;

}

.home {
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
}

.pedidos {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.transformacion {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.reportes {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}


</style>
  
  
   -->