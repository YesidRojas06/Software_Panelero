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
                 const resp =await axios.get('https://software-panelero.onrender.com/api/productos') 
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
                const resp = await axios.post(`https://software-panelero.onrender.com/api/productos`,
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
                const resp = await axios.put(`https://software-panelero.onrender.com/api/productos/${id}`,
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
                const resp = await axios.put(`https://software-panelero.onrender.com/api/prodcutos/activar/${id}`,{}) 
                console.log(resp);
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveproductos (id){
            try {
                
                const resp = await axios.put(`https://software-panelero.onrender.com/api/productos/desactivar/${id}`                ) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})


