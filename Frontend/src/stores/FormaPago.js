import { defineStore } from "pinia"
import axios from "axios"

export const formapagoStore = defineStore("formapago", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getformapago(){
            try {
                 const resp =await axios.get('https://software-panelero.onrender.com/api/formapago') 
                return (resp.data.formapago)
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addformapago(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`https://software-panelero.onrender.com/api/formapago`,
                datos
                ); 
               return resp;
       
           } catch (error) {
            console.log(error);
               return error;
           }
        },
        async editformapago(id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`https://software-panelero.onrender.com/api/formapago/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeformapago (id){
            try {
                const resp = await axios.put(`https://software-panelero.onrender.com/api/formapago/activar/${id}`  ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveformapago (id){
            try {
                
                const resp = await axios.put(`https://software-panelero.onrender.com/api/formapago/desactivar/${id}`) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})