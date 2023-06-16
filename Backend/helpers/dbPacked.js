import Packed from "../../models/Trans/Packed.js"

const helpersPacked = {
    existPackedById: async(id, req) => {
        const exist = await Packed.findById(id)
        if(!exist){
            throw new Error(`El empaquetado ${id} no existe`)
        }
    },
}

export default helpersPacked
