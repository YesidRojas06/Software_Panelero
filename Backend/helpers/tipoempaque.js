import tipoempaque from "../modelos/tipoempaque.js"

const helperstipoempaque = {
    existtipoempaqueId: async(id, req) => {
        const exist = await tipoempaque.findById(id)
        if(!exist){
            throw new Error(`El proceso diario ${id} no existe`)
        }
    },
}

export default helperstipoempaque