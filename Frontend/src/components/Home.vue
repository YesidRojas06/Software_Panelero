<template>
  <q-layout>
    <q-page-container>
      <div class="title-container"> 
        <h1 class="page-title">Home</h1>
      </div>
      <div class="row">
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

/* 
  .home {
  width: 200px;
  height: 250px;
  right: -100px;
  border-radius: 15px;  
  top: 25px;
 
}


.inventario {
  width: 200px;
  height: 250px;
  right: -700px;
  border-radius: 15px;   
  top: -220px;  
}

.costos {
  width: 200px;
  height: 250px;
  right: -1200px;
  border-radius: 15px;  
  top: -470px;

}

.pedidos {
  width: 200px;
  height: 250px;
  right: -100px;
  border-radius: 15px; 
  top: -400px;    
}


.transformacion {
  width: 200px;
  height: 250px;
  right: -700px;
  border-radius: 15px; 
  top: -640px;    
}

.reportes {
  width: 200px;
  height: 250px;
  right: -1200px;
  border-radius: 15px;  
  top: -885px;   
} */
</style>
  
  
  