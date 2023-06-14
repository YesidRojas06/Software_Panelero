import { defineStore } from "pinia"
import axios from "axios"

export const Unidades_MedidaStore = defineStore("UnidadesMedida", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getUnidadesMedida(){
            try {
                const resp =await axios.get('http://localhost:4504/UnidadesMedida') 
                return resp.data
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addUnidadesMedida(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4504/UnidadesMedida`,
                datos
                ) 
               return resp
       
           } catch (error) {
            console.log(error)
               return error
           }
        },
        async editUnidadesMedida (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`https://software-panelero.onrender.com/UnidadesMedida/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeUnidadesMedida (id){
            try {
                const resp = await axios.put(`http://localhost:4504/UnidadesMedida/activar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);                                     
               return error
           }

        },
        async inactiveUnidadesMedida (id){
            try {
                const resp = await axios.put(`http://localhost:4504/UnidadesMedida/desactivar/${id}`                ) 
                console.log(resp);
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
