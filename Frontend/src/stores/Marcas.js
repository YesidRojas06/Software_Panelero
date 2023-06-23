import { defineStore } from "pinia"
import axios from "axios"

export const MarcasStore = defineStore("Marcas", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getMarcas(){
            try {
                 const resp =await axios.get('http://localhost:4000/api/marcas') 
                return(resp.data.marcas)
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addMarcas(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4000/api/marcas`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async editMarcas (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`http://localhost:4000/api/marcas/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeMarcas (id){
            try {
                const resp = await axios.put(`http://localhost:4000/api/marcas/activar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveMarcas (id){
            try {
                
                const resp = await axios.put(`http://localhost:4000/api/marcas/desactivar/${id}`) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})
