import { api } from "../boot/axios";


const getUsers = () =>{
    try {
        const resp = api.get('/usario/') 

        console.log(resp);

    } catch (error) {
        
    }
}