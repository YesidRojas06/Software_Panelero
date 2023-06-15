<template>
  <q-layout>
    <q-page-container>
      <div class="title-container"> 
        <h1 class="page-title">Inventario</h1>
      </div>

        <div class="contenedor">
          <div class="contenedor-conciertos">
            <router-link class="lg4" to="/Bodegas">
              <div class="card">
                <div class="textos">
                  <center><h6>Bodegas</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">store</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Marcas">
              <div class="card">
                <div class="textos">
                  <center><h6>Marcas</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">verified</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Categorias">
              <div class="card">
                <div class="textos">
                  <center><h6>Categorias</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">shopping_bag</i>
                </div>
              </div>
            </router-link>

            <router-link class="lg4" to="/Productos">
              <div class="card" style="left: 405px;">
                <div class="textos">
                  <center><h6>Productos</h6></center>
                  <!-- <q-separator style="background-color: #000000" dark inset /> -->
                  <i class="material-icons" style="font-size: 100px;">inventory</i>
                </div>
              </div>
            </router-link>

          </div>
          </div>

              </q-page-container>
          </q-layout>
         
  
</template>

<style>
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



<!-- <template>
  

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
                <router-link to="/Marcas" class="no-link">
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
                <router-link to="/Categorias" class="no-link">
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
                <router-link to="/Productos" class="no-link">
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


  
  
  
  </style> -->
