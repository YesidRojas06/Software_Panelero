import { defineStore } from "pinia"
import axios from "axios"

export const UserStore = defineStore("user", {
    state: () => ({
        userData: ":)",
        token: null
    }),
    actions:{

        createToken(token){
            this.token = token;
        },

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
            console.log('datos' + datos );
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post('https://software-panelero.onrender.com/usuario',
                datos
                ) 
               return resp
       
           } catch (error) {
            console.log(error)
               return error
           }
        },
        async editUser (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`https://software-panelero.onrender.com/usuario/${id}`,
                    datos
                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
        async activeUser (id){
            try {
                const resp = await axios.put(`http://localhost:4503/usuario/activar/${id}`                ) 
               return resp
       
   
        } catch (error) {
               console.log(error);
               return error
           }

        },
        async inactiveUser (id){
            try {
                const resp = await axios.put(`http://localhost:4503/usuario/desactivar/${id}`                ) 
               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },
       
    }
    
})



