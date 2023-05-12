<template>
  <q-layout>
    <q-page-container>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <q-card class="pedido2">
            <q-card-section>
              <router-link to="/pedido2" class="no-link">
                <q-icon class="icon q-m" size="130px" name="check_circle" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black;  text-align: center; ">Pedidos realizados</div>
              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>
        </div>
        <div class="col-3 q-ma-4">

          <q-card class="comprobantes">
            <q-card-section class="">
              <router-link to="/Comprobantes" class="no-link">
                <q-icon class="icon q-m" size="130px" name="receipt" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                text-align: center;">Comprobantes de pago</div>
              </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>


        </div>
        <div class="col-3">
          <q-card class="consultasp">
            <q-card-section>
              <router-link to="/costos" class="no-link">
                <q-icon class="icon q-m" size="130px" name="search" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative;
         text-align: center;">Consultas de pedidos</div>
            </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>

</div>      
</div>

      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <q-card class="revisionp">
            <q-card-section>
              <router-link to="/pedidos" class="no-link">
                <q-icon class="icon q-m" size="130px" name="find_in_page" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; text-align: center;">Revisión de pedidos</div>
            </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>

        </div>
        <div class="col-3">
          <q-card class="edicionp">
            <q-card-section>
              <router-link to="/transformacion" class="no-link">
                <q-icon class="icon q-m" size="130px" name="create" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Edición de pedidos</div>
            </router-link>
            </q-card-section>
            <q-card-actions>
            </q-card-actions>
          </q-card>




        </div>
        <div class="col-3">
          <q-card class="eliminacionp">
            <q-card-section>
              <router-link to="/reportes" class="no-link">
                <q-icon class="icon q-m" size="130px" name="delete" style="left: 90px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">Eliminación de pedidos</div>
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

.pedido2 {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.comprobantes {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.consultasp {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.revisionp {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.edicionp {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}

.eliminacionp {
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 30px;
}



</style>