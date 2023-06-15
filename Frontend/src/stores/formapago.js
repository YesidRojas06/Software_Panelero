import { defineStore } from "pinia"
import axios from "axios"

export const Unidades_MedidaStore = defineStore("formapago", {
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
                const resp =await axios.get('http://localhost:4504/formapago') 
                return resp.data
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addformapago(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4504/formapago`,
                datos
                ) 
               return resp
       
           } catch (error) {
            console.log(error)
               return error
           }
        },
        async editformapago (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`https://software-panelero.onrender.com/formapago/${id}`,
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
                const resp = await axios.put(`http://localhost:4504/formapago/activar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);                                     
               return error
           }

        },
        async inactiveformapago (id){
            try {
                const resp = await axios.put(`http://localhost:4504/formapago/desactivar/${id}`                ) 
                console.log(resp);
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
