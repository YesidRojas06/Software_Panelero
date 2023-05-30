import { defineStore } from "pinia"
import axios from "axios"

export const UserStore = defineStore("Bodegas", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

        async getBodegas(){
            try {
                 const resp =await axios.get('http://localhost:4100/Bodegas') 
                return resp.data.usuarios
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addBodegas(datos){
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`http://localhost:4100/Bodegas`,
                datos
                ) 
               return resp
       
           } catch (error) {
            console.log(error)
               return error
           }
        },
        async editBodegas (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`https://software-panelero.onrender.com/Bodegas/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeBodegas (id){
            try {
                const resp = await axios.put(`http://localhost:4100/Bodegas/activar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveBodegas (id){
            try {
                const resp = await axios.put(`http://localhost:4100/Bodegas/desactivar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})




