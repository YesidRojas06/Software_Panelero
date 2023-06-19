import monthlyExpenses from "../../models/Costs/monthlyExpenses.js"

const helpersMonthlyExpenses = {
    existMonthlyId: async(id, req) => {
        const exist = await monthlyExpenses.findById(id)
        if(!exist){
            throw new Error(`Los pagos mensuales ${id} no existe`)
        }
    },
}

export default helpersMonthlyExpenses