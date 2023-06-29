import { defineStore } from "pinia"
import axios from "axios"

export const categoriaStore = defineStore("Categoria", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getcategoria(){
            try {
                 const resp =await axios.get('https://software-panelero.onrender.com/api/categoria') 
                 console.log(resp)
                return (resp.data)
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addcategoria(datos){
             console.log('datos' + datos );
             console.log(JSON.stringify(datos))
            try {
               
                const resp = await axios.post(`https://software-panelero.onrender.com/api/categoria`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async editcategoria (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`https://software-panelero.onrender.com/api/categoria/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activecategoria (id){
            try {
                console.log("sr");
                const resp = await axios.put(`https://software-panelero.onrender.com/api/categoria/activar/${id}`,{}) 
                console.log(resp);
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactivecategoria (id){
            try {
                
                const resp = await axios.put(`https://software-panelero.onrender.com/api/categoria/desactivar/${id}`                ) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})


