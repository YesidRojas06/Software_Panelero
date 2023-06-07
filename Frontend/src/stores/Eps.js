import { defineStore } from "pinia"
import axios from "axios"

export const EpsStore = defineStore("Eps", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getEps(){
            try {
                 const resp =await axios.get('http://localhost:4503/Eps') 
                return(resp.data.Eps)
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addEps(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4503/Eps`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async editEps (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`http://localhost:4503/Eps/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeEps (id){
            try {
                const resp = await axios.put(`http://localhost:4503/Eps/activar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveEps (id){
            try {
                
                const resp = await axios.put(`http://localhost:4503/Eps/desactivar/${id}`                ) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})


