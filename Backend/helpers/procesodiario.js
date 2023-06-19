import procesodiario from "../modelos/procesodiario.js"

const helpersprocesodiario = {
    existdiarioId: async(id, req) => {
        console.log("--")
        try{
        const exist = await procesodiario.findById(id)
        if(!exist){
            throw new Error();
        }
    }catch(err){
        console.log('--' + err);
        throw new Error('El proceso no existe')
    }
    }
};

export default helpersprocesodiario;

