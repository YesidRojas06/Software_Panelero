import { defineStore } from "pinia"
import axios from "axios"

export const productosStore = defineStore("productos", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getproductos(){
            try {
                 const resp =await axios.get('http://localhost:4000/productos') 
                return(resp.data.productos)
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addproductos(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4000/productos`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async editproductos (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`http://localhost:4000/productos/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeproductos (id){
            try {
                console.log("sr");
                const resp = await axios.put(`http://localhost:4000/prodcutos/activar/${id}`,{}) 
                console.log(resp);
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveproductos (id){
            try {
                
                const resp = await axios.put(`http://localhost:4000/productos/desactivar/${id}`                ) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})


