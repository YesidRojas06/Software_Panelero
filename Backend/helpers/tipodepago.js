import Pay from "../modelos/tipodepago.js"

const helpersPay = {
    existPayId: async(id, req) => {
        const exist = await Pay.findById(id)
        if(!exist){
            throw new Error(`El proceso diario ${id} no existe`)
        }
    },
}

export default helpersPay