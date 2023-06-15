import Payment from "../modelos/formapago"

const helpersformapago = {
    existformapagoId: async(id, req) => {
        const exist = await Payment.findById(id)
        if(!exist){
            throw new Error(`El proceso diario ${id} no existe`)
        }
    },
}

export default helpersformapago