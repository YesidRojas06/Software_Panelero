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
        }
    }
    
})