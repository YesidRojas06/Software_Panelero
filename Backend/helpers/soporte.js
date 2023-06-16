import Support from "../modelos/soporte.js"

const helpersSupport = {
    existSupportId: async(id, req) => {
        const exist = await Support.findById(id)
        if(!exist){
            throw new Error(`El proceso diario ${id} no existe`)
        }
    },
}

export default helpersSupport