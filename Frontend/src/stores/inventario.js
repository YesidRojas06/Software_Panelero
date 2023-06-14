import { defineStore } from "pinia"
import axios from "axios"

export const inventarioStore = defineStore("inventario", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getinventario(){
            try {
                 const resp =await axios.get('http://localhost:4504/inventario') 
                return(resp.data.inventario)
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addinventario(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4504/inventario`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async editinventario(id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`http://localhost:4504/inventario/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeinventario (id){
            try {
                const resp = await axios.put(`http://localhost:4504/inventario/activar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveinventario (id){
            try {
                
                const resp = await axios.put(`http://localhost:4504/inventario/desactivar/${id}`) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})




