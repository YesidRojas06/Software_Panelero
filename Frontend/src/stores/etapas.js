import { defineStore } from "pinia"
import axios from "axios"

export const etapasStore = defineStore("etapas", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getetapas(){
            try {
                 const resp =await axios.get('http://localhost:4000/etapas') 
                return(resp.data.etapas)
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addetapas(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4000/etapas`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async editetapas (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`http://localhost:4000/etapas/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeetapas(id){
            try {
                console.log("sr");
                const resp = await axios.put(`http://localhost:4000/etapas/activar/${id}`,{}) 
                console.log(resp);
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveetapas (id){
            try {
                
                const resp = await axios.put(`http://localhost:4000/etapas/desactivar/${id}`                ) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})


