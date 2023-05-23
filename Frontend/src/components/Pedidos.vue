<template>
  <q-layout>
    <q-page-container>
      <div class="title-container"> 
        <h1 class="page-title">Pedidos</h1>
      </div>
      <div class="row">
        <div class="col-5"></div>
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
  position: relative;
  width: 330px;
  height: 250px;
  margin: 10px;
  border-radius: 20px;
  margin-top: 50px;
  right: 40px;
  top: 50px;
  
}





</style>