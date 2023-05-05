<template>
  <q-page padding>
    <h4>Modulo De Costos</h4>
    <!-- reflejar por pantalla -->
    <pre
      >{{ fecha }} --- {{ modulo1 }}  ---  {{ seleccion }} --- {{  modulo3 }} --- {{ modulo4 }} --- {{ modulo5 }}  </pre >
    <q-form
      class="row q-col-gutter-md"
      @submit.prevent="procesarFormulario"
      @reset="reset"
      ref="myForm"
    >
      <div class="col-12 col-sm-6">
        <q-input
          filled
          v-model="fecha"
          mask="date"
          label="Fecha"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'por favor ingrese valor',
          ]"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="fecha">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <!-- compo modulo1 -->
      <div class="col-12 col-sm-6">
        <q-input
          label="Modulo 1"
          v-model="modulo1"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'por favor ingrese valor',
          ]"
        />
      </div>

      <!-- campo selecionar -->
      <div class="col-12 col-sm-6">
        <q-select
          label="Modulo 2"
          v-model="seleccion"
          :options="opciones"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'por favor ingrese valor',
          ]"
        />
      </div>

      <div class="col-12 col-sm-6">
        <q-input
          label="Modulo 3"
          v-model="modulo3"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'por favor ingrese valor',
          ]"
        />
      </div>

      <div class="col-12 col-sm-6">
        <q-input
          label="Modulo 4"
          v-model="modulo4"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'por favor ingrese valor',
          ]"
        />
      </div>

      <div class="col-12 col-sm-6">
        <q-input
          label="Modulo 5"
          v-model="modulo5"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'por favor ingrese valor',
          ]"
        />
      </div>

      <div class="col-12">
        <q-toggle label="seguro de guardar" v-model="terminos" />
      </div>

      <!-- campo de los botones -->
      <div class="col-12">
        <q-btn label="Enviar" color="primary" type="submit" />

        <q-btn
          label="Cancel"
          color="primary"
          outline
          class="q-ml-sm"
          :ripple="false"
          type="reset"
        />

        <!-- tabla dos -->
        <pre>{{ productos }}</pre>
        <q-table
          class="q-mt-md"
          title="Inventario"
          no-data-label="sin productos para mostrar"
          :columns="columns"
          :rows="productos"
        >
        </q-table>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

const columns = [
  {
    name: "fecha",
    label: "Fecha",
    align: "center",
    field: "fecha",
    sortable: true,
  },

  {
    name: "modulo1",
    label: "modulo1",
    align: "center",
    field: "modulo1",
    sortable: true,
  },

  {
    name: "modulo2",
    label: "modulo2",
    align: "center",
    field: "modulo2",
    sortable: true,
  },

  {
    name: "modulo3",
    label: "modulo3",
    align: "center",
    field: "modulo3",
    sortable: true,
  },

  {
    name: "modulo4",
    label: "modulo4",
    align: "center",
    field: "modulo4",
    sortable: true,
  },

  {
    name: "modulo5",
    label: "modulo5",
    align: "center",
    field: "modulo5",
    sortable: true,
  },

];

const rows = [
  {    
    fecha: "Fecha",
    modulo1: "modulo1",
    modulo2: "modulo2",
    modulo3: "modulo3",
    modulo4: "modulo4",
    modulo5: "modulo5",
  },
];

export default {
  props: {
    productos: Array,
  },
  data() {
    return {
      date: null,
    };
  },

  setup() {
    const $q = useQuasar();
    const myForm = ref(null);
    const modulo1 = ref(null);
    const seleccion = ref(null);
    const modulo3 = ref(null);
    const modulo4 = ref(null);
    const modulo5 = ref(null);
    const fecha = ref(null);
    const terminos = ref(false);
    const opciones = ["Trapiche 1", "Trapiche 2", "Trapiche 3", "Trapiche 4"];

    //array del formulario

    const reset = () => {
      modulo1.value = null;
      seleccion.value = null;
      terminos.value = false;
      modulo3.value = null;
      modulo4.value = null;
      modulo5.value = null;
      fecha.value = null;
    };

    const procesarFormulario = () => {
      console.log("le diste click al formulario");
      if (terminos.value === false) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Debe estar seguro de guardar estos datos",
        });
      } else {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done ",
          message: "Datos guardados correctamente",
        });
        myForm.value.resetValidation();

        //procesar el formulario
        productos.value = [
          ...productos.value,
          {
            modulo1: modulo1.value,
            modulo2: seleccion.value,
            modulo3: modulo3.value,
            modulo4: modulo4.value,
            modulo5: modulo5.value,
            fecha: fecha.value,
          },
        ];

        reset();
      }
    };

    //array del formulario
    const productos = ref([]);

    // retornacion
    return {
      modulo1,
      seleccion,
      modulo3,
      modulo4,
      modulo5,
      fecha,
      opciones,
      procesarFormulario,
      terminos,
      reset,
      myForm,
      columns,
      rows,
      productos,
    };
  },
};
</script>


