import occasionalExpenses from "../../models/Costs/occasionalExpenses.js"

const helpersOccasionalExpenses = {
    existExpensesId: async(id, req) => {
        const exist = await occasionalExpenses.findById(id)
        if(!exist){
            throw new Error(`Los gastos ocacionales ${id} no existe`)
        }
    },
}

export default helpersOccasionalExpenses