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
                 const resp =await axios.get('http://localhost:4000/formapago') 
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
                const resp = await axios.post(`http://localhost:4000/formapago`,
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
                const resp = await axios.put(`http://localhost:4000/formapago/${id}`,
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
                const resp = await axios.put(`http://localhost:4000/formapago/activar/${id}`  ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveformapago (id){
            try {
                
                const resp = await axios.put(`http://localhost:4000/formapago/desactivar/${id}`) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})