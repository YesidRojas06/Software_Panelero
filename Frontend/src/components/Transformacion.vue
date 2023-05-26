<template>

  <q-layout>
    <q-page-container>
      <div class="title-container"> 
        <h1 class="page-title">Transformación</h1>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-3">
          <q-card class="Proceso">
            <q-card-section>
              <router-link to="/Proceso_diario" class="no-link">
                <q-icon class="icon q-m" size="130px" name="manage_accounts" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black;  text-align: center; ">Proceso Diario</div>

              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-3 q-ma-4">

          <q-card class="materiaPrima">
            <q-card-section >
              <router-link to="/Materia_Prima" class="no-link">
                <q-icon class="icon q-m" size="130px" name="south_america" style="left: 80px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                text-align: center;"> Materia Prima Transformada </div>
              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>


        </div>
        <div class="col-3">


          <q-card class="Empaques">
            <q-card-section>
              <router-link to="/Empaques" class="no-link">
                <q-icon class="icon q-m" size="130px" name="fact_check" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative;
         text-align: center;"> Empaques  </div>


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

<style>
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





</style>