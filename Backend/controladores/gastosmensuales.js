import monthlExpenses from "../../models/Costs/monthlyExpenses.js"
import bcryptjs from "bcryptjs";

const monthlyExpensesHttp = {
    monthlyExpensesPost: async (req, res) => {
    console.log(req.body);
    const { Name_spent, Finca, Description,  PAYMENT_METHOD, costValue, Total } = req.body;
    const monthlyExpensesAdd = new monthlExpenses({ Name_spent, Finca, Description,  PAYMENT_METHOD, costValue, Total });
    await monthlyExpensesAdd.save();
    console.log("3crea");
    res.json("saved monthlyExpenses");
  },


// listar todos los gastos

monthlyExpensesAllGet: async ( req, res) =>{
const monthlyExpens= await monthlExpenses.find().populate("PAYMENT_METHOD").populate("Finca");
res.json(monthlyExpens);
},

// modificar por id

monthlyExpensesPutId: async (req, res) => {
const { id } = req.params;
const { Name_spent, Finca, Description,  PAYMENT_METHOD, costValue, Total  } = req.body;
const monthlyExpensesUpdate = await monthlExpenses.findByIdAndUpdate(id, {
  Name_spent, Finca, Description, PAYMENT_METHOD, costValue, Total
});
await monthlyExpensesUpdate.save();
res.json("monthlyExpenses actualizada");
},


//edit state for id
monthlyExpensesPutState: async (req, res) => {
const { id } = req.params;
const { state } = req.body;
const monthlyExpenseState = await monthlExpenses.findByIdAndUpdate(id, {
  state: state,
});
await monthlyExpenseState.save();
res.json("Estado actualizado");
},

};




export default monthlyExpensesHttp;