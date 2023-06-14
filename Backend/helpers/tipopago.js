import tipopago from "../modelos/tipopago.js"

const helperstipopago = {
    existtipopagoid: async(id, req) => {
        const exist = await Pay.findById(id)
        if(!exist){
            throw new Error(`El proceso diario ${id} no existe`)
        }
    },
}

export default helperstipopago