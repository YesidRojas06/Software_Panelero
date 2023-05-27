<template>
    <q-layout>
      <q-page-container>
        <div class="title-container"> 
        <h1 class="page-title">Inventario</h1>
      </div>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-3">
            <q-card class="Mantenimiento1">
              <q-card-section>

                <router-link to="" class="no-link">


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

                <router-link to="" class="no-link">


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
  
  
  
  
  </style>