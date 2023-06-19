import pagos from "../modelos/pagos.js"

const helperspagos = {
    existpagosId: async(id, req) => {
        const exist = await pagos.findById(id)
        if(!exist){
            throw new Error(`Los gastos ocacionales ${id} no existe`)
        }
    },
}

export default helperspagos