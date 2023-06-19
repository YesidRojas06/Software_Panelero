import empaques from "../modelos/empaques.js"

const helpersempaques = {
    existempaquesById: async(id, req) => {
        const exist = await empaques.findById(id)
        if(!exist){
            throw new Error(`El empaquetado ${id} no existe`)
        }
    },
}

export default helpersempaques
