<template>

  <q-layout>
    <q-page-container>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <q-card class="Pagos">
            <q-card-section>
              <router-link to="/" class="no-link">
                <q-icon class="icon q-m" size="130px" name="request_page" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black;  text-align: center; ">Pagos</div>

              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-3 q-ma-4">

          <q-card class="Inventario">
            <q-card-section >
              <router-link to="/" class="no-link">
                <q-icon class="icon q-m" size="130px" name="shopping_cart" style="left: 80px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                text-align: center;"> Gastos Mensuales </div>
              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>


        </div>
        <div class="col-3">


          <q-card class="Gastos">
            <q-card-section>
              <router-link to="/" class="no-link">
                <q-icon class="icon q-m" size="130px" name="fact_check" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative;
         text-align: center;"> Gastos ocacionales  </div>


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

.Pagos{
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.Inventario {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.Gastos {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}



</style>