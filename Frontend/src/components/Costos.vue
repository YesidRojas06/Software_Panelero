<template>

  <q-layout>
    <q-page-container>
      <div class="title-container"> 
        <h1 class="page-title">Costos</h1>
      </div>


      <div class="contenedor">
          <div class="contenedor-conciertos">
            <router-link class="lg4" to="/Pagos">
              <div class="card">
                <div class="textos">
                  <center><h6>Pagos</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">request_page</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Gastos_Mensuales">
              <div class="card">
                <div class="textos">
                  <center><h6>Gastos_Mensuales</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">shopping_cart</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Gastos_Ocacionales">
              <div class="card">
                <div class="textos">
                  <center><h6>Gastos_ocacionales</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">fact_check</i>
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
          <q-card class="Pagos">
            <q-card-section>

              <router-link to="/Pagos" class="no-link">


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


              <router-link to="/Gastos_Mensuales" class="no-link">

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

              <router-link to="/Gastos_ocacionales" class="no-link">

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





</style> -->