import occasionalExpenses from "../../models/Costs/occasionalExpenses.js"


const occasionalExpensesHttp = {
  occasionalExpensesPost: async (req, res) => {
    console.log(req.body);
    const { Name_spent, Finca, Description,  PAYMENT_METHOD, costValue, Total } = req.body;
    const occasionalExpensesAdd = new occasionalExpenses({ Name_spent, Finca, Total, Description, PAYMENT_METHOD, costValue });
    await occasionalExpensesAdd.save();
    res.json("saved occasionalExpensesHttp");
    console.log("oka");
  },



// listar todo

occasionalExpensesGet: async ( req, res) =>{
const occasionalExpense= await occasionalExpenses.find().populate("PAYMENT_METHOD").populate("Finca");
res.json(occasionalExpense);
},

// modificar por id

occasionalExpensesPutId: async (req, res) => {
const { id } = req.params;
const {Name_spent, Finca, Description,  PAYMENT_METHOD, costValue, Total } = req.body;
const occasionalExpensesUpdate = await occasionalExpenses.findByIdAndUpdate(id, {
  Name_spent, Finca, Description,  PAYMENT_METHOD, costValue, Total
});
await occasionalExpensesUpdate.save();
res.json("occasionalExpenses actualizada");
},




//edit state for id
occasionalExpensesPutState: async (req, res) => {
const { id } = req.params;
const { state } = req.body;
const occasionalExpensesState = await occasionalExpenses.findByIdAndUpdate(id, {
  state: state,
});
await occasionalExpensesState.save();
res.json("Estado actualizado");
},
}

export default occasionalExpensesHttp;