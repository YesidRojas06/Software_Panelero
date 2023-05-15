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
                <q-icon class="icon q-m" size="130px" name="engineering" style="left: 80px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                text-align: center;">Modulo de Trabajo </div>
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
                <q-icon class="icon q-m" size="130px" name="request_page" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative;
         text-align: center;">Forma de Pago </div>


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

          <q-card class="pedidos">
            <q-card-section>
              <router-link to="/pedidos" class="no-link">
                <q-icon class="icon q-m" size="130px" name="request_page" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Tipo de Pago </div>


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
                <q-icon class="icon q-m" size="130px" name="square_foot" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Unidad de Medida</div>


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
                <q-icon class="icon q-m" size="130px" name="health_and_safety" style="left: 90px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">EPS</div>

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

          <q-card class="pedidos">
            <q-card-section>
              <router-link to="/pedidos" class="no-link">
                <q-icon class="icon q-m" size="130px" name="assignment_ind" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Tipo de documento </div>


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
                <q-icon class="icon q-m" size="130px" name="terrain" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;"> Lotes </div>


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
                <q-icon class="icon q-m" size="130px" name="settings_brightness" style="left: 90px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">Numero de Etapa</div>

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

          <q-card class="pedidos">
            <q-card-section>
              <router-link to="/pedidos" class="no-link">
                <q-icon class="icon q-m" size="130px" name="terrain" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Numero de Finca</div>


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
                <q-icon class="icon q-m" size="130px" name="settings_applications" style="left: 80px; color: black; "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
         text-align: center;">Empaques</div>


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
                <q-icon class="icon q-m" size="130px" name="density_medium" style="left: 90px; color: black;  "></q-icon>
                <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">Soporte</div>

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