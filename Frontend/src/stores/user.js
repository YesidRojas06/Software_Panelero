import { defineStore } from "pinia"
import axios from "axios"

export const UserStore = defineStore("user", {
    state: () => ({
        userData: ":)"
    }),
    actions:{
        async getUsers(){
            try {
                 const resp =await axios.get('https://software-panelero.onrender.com/usuario') 
                return resp.data.usuarios
        
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async addUser(datos){
            try {
                const resp = await axios.post('https://software-panelero.onrender.com/usuario',{
                    datos
                }) 
               return resp.data.usuarios
       
           } catch (error) {
               console.log(error);
               return error
           }
        },
        async editUser (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`https://software-panelero.onrender.com/usuario/${id}`,{
                    datos
                }) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        }
    }
    
})




