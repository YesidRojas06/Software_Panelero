<template>
  

    <q-layout>
      <q-page-container>
        <div class="title-container"> 
        <h1 class="page-title">Inventario</h1>
      </div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-3">
            <q-card class="Bodegas">
              <q-card-section>
                <router-link to="/Bodegas" class="no-link">
                  <q-icon class="icon q-m" size="130px" name="store" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black;  text-align: center; ">Bodegas</div>
  
                </router-link>
              </q-card-section>
              <q-card-actions>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-3 q-ma-4">
  
            <q-card class="Marcas">
              <q-card-section >
                <router-link to="/" class="no-link">
                  <q-icon class="icon q-m" size="130px" name="verified" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black; position: relative; 
                  text-align: center;">Marcas</div>
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
  
            <q-card class="Categorias">
              <q-card-section>
                <router-link to="/" class="no-link">
                  <q-icon class="icon q-m" size="130px" name="shopping_bag" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black; position: relative; 
           text-align: center;">Categorias</div>
  
  
                </router-link>
              </q-card-section>
              <q-card-actions>
              </q-card-actions>
            </q-card>
  
          </div>
  
          
          <div class="col-3">
  </div>
  
  
  
          <div class="col-3">
  
  
  
  
            <q-card class="Productos">
              <q-card-section>
                <router-link to="/" class="no-link">
                  <q-icon class="icon q-m" size="130px" name="inventory" style="left: 80px; color: black; "></q-icon>
                  <div class="text-h6" style="color: black; position: relative; 
           text-align: center;">Productos</div>
  
  
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
  
  .Bodegas {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
    left: 100px;
  }
  
  .Marcas {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
    left: 350px;
  }
  
  .Costos {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
  }
  
  .Categorias {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
    left: 100px;
  }
  
  .Productos {
    width: 330px;
    height: 250px;
    margin: 10px;
    border-radius: 20px;
    margin-top: 30px;
    left: -15px;
  }
  

  .title-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: -60px;

}

.page-title {
  text-align: center;
  font-size: 50px; /* Ajusta el tamaño de la letra según tus preferencias */
  border-bottom: 1px solid black; /* Agrega una línea sólida de 1px de grosor y color negro */
  padding-bottom: 10px; /* Ajusta el espacio entre el texto y la línea */
  border-bottom: 3px solid black; /* Ajusta el grosor de la línea según tus preferencias */
  width: 10000px; /* Ajusta la anchura del contenedor del título */
}


  
  
  
  </style>
