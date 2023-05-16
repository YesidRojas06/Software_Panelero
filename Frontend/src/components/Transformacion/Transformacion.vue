<template>
      <div>
      <q-page-container>
        <div class="q-pa-md">
          <q-row class="justify-center">
    
    
            
            <q-col cols="col-12 col-sm-6">
              <q-card class="pedido2">
                <q-card-section>
                  <router-link to="/Transformacion/Modulos/Iventario" class="no-link">
                    <q-icon class="icon q-m" size="130px" name="inventory" style="left: 80px; color: black;"></q-icon>
                    <div class="text-h6" style="color: black; text-align: center;">Iventario</div>
                  </router-link>
                </q-card-section>
              </q-card>
            </q-col>
    
    
    
            <q-col cols="col-12 col-sm-6">
              <q-card class="comprobantes">
                <q-card-section>
                  <router-link to="/Transformacion/Modulos/Materia_Prima_Tranformada" class="no-link">
                    <q-icon class="icon q-m" size="130px" name="subject" style="left: 80px; color: black;"></q-icon>
                    <div class="text-h6" style="color: black; text-align: center;">Materia_Prima_Tranformada</div>
                  </router-link>
                </q-card-section>
              </q-card>
            </q-col>
    
    
    
    
            <q-col cols="col-12 col-sm-6">
              <q-card class="consultasp">
                <q-card-section>
                  <router-link to="/Transformacion/Modulos/Procesos_Diarios" class="no-link">
                    <q-icon class="icon q-m" size="130px" name="bolt" style="left: 80px; color: black;"></q-icon>
                    <div class="text-h6" style="color: black; text-align: center;">Procesos_Diarios</div>
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
    