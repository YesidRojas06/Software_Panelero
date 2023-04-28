<template>
    <q-layout>
      <q-page-container>
  <div>
    <q-card class="home">
      <q-card-section>
        <router-link to="/mantenimiento">
        <div class="text-h6">Modulo de mantemiento</div>
        <div class="text-body1">Aquí puedes manejar tu mantenimiento.</div>
      </router-link>
      </q-card-section>
      <q-card-actions align="right">
      </q-card-actions>
    </q-card>


    <q-card class="inventario">
      <q-card-section>
        <router-link to="/inventario">
        <div class="text-h6">Modulo de inventario </div>
        <div class="text-body1">Aquí puedes manejar tu inventario.</div>
      </router-link>
      </q-card-section>
      <q-card-actions align="right">  
      </q-card-actions>
    </q-card>



    <q-card class="costos">
      <q-card-section>
        <router-link to="/costos">
        <div class="text-h6">Modulo de costos </div>
        <div class="text-body1">Aquí puedes manejar tus costos.</div>
      </router-link>
      </q-card-section>
      <q-card-actions align="right">
      </q-card-actions>
    </q-card>



    <q-card class="pedidos">
      <q-card-section>
        <router-link to="/pedidos">
        <div class="text-h6">Modulo de pedidos </div>
        <div class="text-body1">Aquí puedes manejar tus pedidos.</div>
      </router-link>
      </q-card-section>
      <q-card-actions align="right">
      </q-card-actions>
    </q-card>




    <q-card class="transformacion">
      <q-card-section>
        <router-link to="/transformacion">
        <div class="text-h6">Modulo de transformación</div>
        <div class="text-body1">Aquí puedes manejar tu transformación.</div>
      </router-link>
      </q-card-section>
      <q-card-actions align="right">
      </q-card-actions>
    </q-card>


    <q-card class="reportes">
      <q-card-section>
        <router-link to="/reportes">
        <div class="text-h6">Modulo de reportes</div>
        <div class="text-body1">Aquí puedes manejar tus reportes.</div>
      </router-link>
      </q-card-section>
      <q-card-actions align="right">
      </q-card-actions>
    </q-card>

  </div>
    </q-page-container>
    </q-layout>
  </template>
  

  <style>
  .home {
  width: 200px;
  height: 250px;
  right: -70px;
  border-radius: 15px;  
  top: 25px;   
}


.inventario {
  width: 200px;
  height: 250px;
  right: -500px;
  border-radius: 15px;   
  top: -220px;  
}

.costos {
  width: 200px;
  height: 250px;
  right: -850px;
  border-radius: 15px;  
  top: -470px;

}

.pedidos {
  width: 200px;
  height: 250px;
  right: -70px;
  border-radius: 15px; 
  top: -400px;    
}


.transformacion {
  width: 200px;
  height: 250px;
  right: -500px;
  border-radius: 15px; 
  top: -640px;    
}

.reportes {
  width: 200px;
  height: 250px;
  right: -850px;
  border-radius: 15px;  
  top: -885px;   
}
</style>
  
  
  