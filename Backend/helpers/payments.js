import Payments from "../../models/Costs/Payments.js"

const helpersPayments = {
    existPaymentsId: async(id, req) => {
        const exist = await Payments.findById(id)
        if(!exist){
            throw new Error(`Los gastos ocacionales ${id} no existe`)
        }
    },
}

export default helpersPayments
