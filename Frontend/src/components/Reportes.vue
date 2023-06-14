<template>
    <q-layout>
      <q-page-container>
        <div class="title-container"> 
        <h1 class="page-title">Reportes</h1>
      </div>

        <div class="contenedor" >
          <div class="contenedor-conciertos">
            <router-link class="lg4" to="Mantenimiento">
              <div class="card">
                <div class="textos">
                  <center><h6>Mantenimiento</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">settings</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="Costos">
              <div class="card">
                <div class="textos">
                  <center><h6>Costos</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">engineering</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="Pedidos">
              <div class="card">
                <div class="textos">
                  <center><h6>Pedidos</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">shopping_cart</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="TranSformacion">
              <div class="card" style="left: 600px;">
                <div class="textos">
                  <center><h6>Transformación</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">transform</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="Inventario">
              <div class="card" style="right: 220px;">
                <div class="textos">
                  <center><h6>Inventario</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">inventory</i>
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
            <q-card class="Mantenimiento1">
              <q-card-section>

                <router-link to="/Mantenimiento" class="no-link">


                  <q-icon class="icon q-m" size="130px" name="engineering" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black;  text-align: center; ">Mantenimiento</div>
  
                </router-link>
              </q-card-section>
              <q-card-actions>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3 q-ma-4">
  
            <q-card class="Costos1">
              <q-card-section >

                <router-link to="/Costos" class="no-link">

                  <q-icon class="icon q-m" size="130px" name="monetization_on" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">Costos</div>
                </router-link>
              </q-card-section>
              <q-card-actions>
              </q-card-actions>
            </q-card>
  
  
          </div>
          <div class="col-3">
  
  
            <q-card class="Pedidos1">
              <q-card-section>

                <router-link to="/Pedidos" class="no-link">


                  <q-icon class="icon q-m" size="130px" name="shopping_cart" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black; position: relative;
                   text-align: center;">Pedidos</div>
  
  
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
  
            <q-card class="Transformacion1">
              <q-card-section>

     <router-link to="/Transformacion" class="no-link">

                  <q-icon class="icon q-m" size="130px" name="move_up" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black; position: relative; 
           text-align: center;">Transformacion</div>
  
  
                </router-link>
              </q-card-section>
              <q-card-actions>
              </q-card-actions>
            </q-card>
  
          </div>
  
          
          <div class="col-3">
  </div>
  
  
  
          <div class="col-3">
  
  
  
  
            <q-card class="Inventario1">
              <q-card-section>



                <router-link to="/Inventario" class="no-link">

                  <q-icon class="icon q-m" size="130px" name="inventory" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black; position: relative; 
           text-align: center;">Inventario</div>
  
  
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
  
  .Mantenimiento1 {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
  }
  
  .Costos1 {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
  }
  
  .Pedidos1 {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
  }
  
  .Transformacion1 {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
    left: 150px;
  }
  
  .Inventario1 {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
    left: -150px;
  }
  
  
  
  
  </style> -->