import { defineStore } from "pinia"
import axios from "axios"

export const tipoDocumentoStore = defineStore("tipoDocumento", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async gettipoDocumento(){
            try {
                 const resp =await axios.get('http://localhost:4000/api/tipoDocumento') 
                return(resp.data.tipoDocumento)
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addtipoDocumento(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4000/api/tipoDocumento`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async edittipoDocumento(id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`http://localhost:4000/api/tipoDocumento/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activetipoDocumento (id){
            try {
                const resp = await axios.put(`http://localhost:4000/api/tipoDocumento/activar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactivetipoDocumento (id){
            try {
                
                const resp = await axios.put(`http://localhost:4000/api/tipoDocumento/desactivar/${id}`) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})




