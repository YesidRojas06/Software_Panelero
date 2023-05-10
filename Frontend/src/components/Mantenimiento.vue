<template>
  <q-layout>
    <q-page-container>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
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

.usuario {
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







</style>