import soporte from "../modelos/soporte.js"

const helperssoporte = {
    existsoporteId: async(id, req) => {
        const exist = await soporte.findById(id)
        if(!exist){
            throw new Error(`El proceso diario ${id} no existe`)
        }
    },
}

export default helperssoporte