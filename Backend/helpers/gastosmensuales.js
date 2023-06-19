import gastosmensuales from "../modelos/gastosmensuales.js"

const helpersgastosmensuales = {
    existmensualesId: async(id, req) => {
        const exist = await gastosmensuales.findById(id)
        if(!exist){
            throw new Error(`Los pagos mensuales ${id} no existe`)
        }
    },
}

export default helpersgastosmensuales