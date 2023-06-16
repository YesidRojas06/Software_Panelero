import Packaing from "../../models/Maintenance/TypePackaing.js"

const helpersPacking = {
    existPackaingId: async(id, req) => {
        const exist = await Packaing.findById(id)
        if(!exist){
            throw new Error(`El proceso diario ${id} no existe`)
        }
    },
}

export default helpersPacking