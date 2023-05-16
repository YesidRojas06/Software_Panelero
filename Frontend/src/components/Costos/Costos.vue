<template>
  <div>
  <q-page-container>
    <div class="q-pa-md">
      <q-row class="justify-center">


        
        <q-col cols="col-12 col-sm-6">
          <q-card class="pedido2">
            <q-card-section>
              <router-link to="/Costos/Modulos/Pagos" class="no-link">
                <q-icon class="icon q-m" size="130px" name="engineering" style="left: 80px; color: black;"></q-icon>
                <div class="text-h6" style="color: black; text-align: center;">Pagos</div>
              </router-link>
            </q-card-section>
          </q-card>
        </q-col>



        <q-col cols="col-12 col-sm-6">
          <q-card class="comprobantes">
            <q-card-section>
              <router-link to="/Costos/Modulos/Gastos_Mensuales" class="no-link">
                <q-icon class="icon q-m" size="130px" name="monetization_on" style="left: 80px; color: black;"></q-icon>
                <div class="text-h6" style="color: black; text-align: center;">Gastos Mensuales</div>
              </router-link>
            </q-card-section>
          </q-card>
        </q-col>




        <q-col cols="col-12 col-sm-6">
          <q-card class="consultasp">
            <q-card-section>
              <router-link to="/Costos/Modulos/Gastos_Ocasionales" class="no-link">
                <q-icon class="icon q-m" size="130px" name="shopping_cart" style="left: 80px; color: black;"></q-icon>
                <div class="text-h6" style="color: black; text-align: center;">Gastos Ocasionales</div>
              </router-link>
            </q-card-section>
          </q-card>
        </q-col>






      </q-row>
    </div>
  </q-page-container>
  </div>

  


</template>

<style>
.q-card:hover {
  background-color: rgb(14, 224, 14);
}

.no-link {
  text-decoration: none;
}

.pedido2,
.comprobantes,
.consultasp {
  width: 330px;
  height: 250px;
  margin: 100px;
  border-radius: 0px;
  margin-top: 30px;
  left: 80px;
}

.q-row {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
