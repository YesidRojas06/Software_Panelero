import { defineStore } from "pinia"
import axios from "axios"

export const laboresStore = defineStore("labores", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getlabores(){
            try {
                 const resp =await axios.get('http://localhost:4503/labores') 
                return (resp.data.labores);
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addlabores(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4503/labores`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async editlabores(id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`http://localhost:4503/labores/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activelabores (id){
            try {
                const resp = await axios.put(`http://localhost:4503/labores/activar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactivelabores (id){
            try {
                
                const resp = await axios.put(`http://localhost:4503/labores/desactivar/${id}`                ) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})




