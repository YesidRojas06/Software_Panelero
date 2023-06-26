// import { defineStore } from "pinia"
// import axios from "axios"

// export const FpagoStore = defineStore("Forma de pago", {
//     state: () => ({
//         userData: ":)",
//         token: null
//     }),
//     actions:{

//         createToken(token){
//             this.token = token;
//         },

//         async getFpago(){
//             try {
//                  const resp =await axios.get('http://localhost:4504/Fpago') 
//                 return (resp.data.Fpago);
        
//             } catch (error) {
//                 console.log(error);
//                 return error
//             }
//         },

//         async addFpago(datos){
//             console.log('datos' + datos );
//             console.log(JSON.stringify(datos))
//             try {
//                 const resp = await axios.post(`http://localhost:4504/Fpago`,
//                 datos
//                 ); 
//                return resp;
       
//            } catch (error) {
//             console.log(error);
//                return error;
//            }
//         },
//         async editFpago(id, datos){
//             try {
//                 console.log(datos);
//                 const resp = await axios.put(`http://localhost:4504/Fpago/${id}`,
//                     datos
//                 ) 
//                return resp
       
//            } catch (error) {
//                console.log(error);
//                return error
//            }

//         },
//         async activeFpago (id){
//             try {
//                 const resp = await axios.put(`http://localhost:4504/Fpago/activar/${id}`                ) 
//                return resp
       
//            } catch (error) {
//                console.log(error);
//                return error
//            }

//         },
//         async inactiveFpago (id){
//             try {
                
//                 const resp = await axios.put(`http://localhost:4504/Fpago/desactivar/${id}`                ) 

//                return resp
       
//            } catch (error) {
//                console.log(error);
//                return error
//            }

//         },
       
//     }
    
// })