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
                 const resp =await axios.get('https://software-panelero.onrender.com/api/eps') 
                return(resp.data.eps)
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addEps(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`https://software-panelero.onrender.com/api/eps`,
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
                const resp = await axios.put(`https://software-panelero.onrender.com/api/eps/${id}`,
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
                console.log("sr");
                const resp = await axios.put(`https://software-panelero.onrender.com/api/eps/activar/${id}`,{}) 
                console.log(resp);
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveEps (id){
            try {
                
                const resp = await axios.put(`https://software-panelero.onrender.com/api/eps/desactivar/${id}`                ) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})


