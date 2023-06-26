import {defineStore} from "pinia"
import axios from "axios"

export const lotesStore = defineStore("lotes", {
    state: () => ({
        loteData: ":)",
        token: null
}),

actions:{
    createToken(token){
        this.token = token;
    },

    async getlotes(){
        try {
            const resp = await axios.get('https://software-panelero.onrender.com/api/lotes')
            return(resp.data.lotes)
        } catch (error){
            console.log(error);
            return error
        }
        },

        async addlotes(datos){
            console.log ('datos' + datos);
            console.log(JSON.stringify(datos))
            try {
                const resp = await axios.post(`https://software-panelero.onrender.com/api/lotes`,
                datos
                );

                return resp;

            } catch (error) {
            console.log(error);
            return error;
        }
        },
        async editlotes (id, datos){
            try {
                console.log(datos);
                const resp = await axios.put(`https://software-panelero.onrender.com/api/lotes/${id}`,
                datos
                )

                return resp
            } catch (error){
                console.log(error);
                return error
            }
        },

        async activelotes(id){
            try{
                const resp = await axios.put(`https://software-panelero.onrender.com/lotes/activar/${id}`)
                return resp 
            } catch (error) {
                console.log(error);
                return error
            }
        },

        async inactivelotes(id){
            try {
                
                const resp = await axios.put(`https://software-panelero.onrender.com/lotes/desactivar/${id}`) 

               return resp
       
           } catch (error) {
               console.log(error);
               return error
           }

        },

    

            }
        })
    