import Payments from "../../models/Costs/Payments.js"


//  Crear gasto 
const paymentsHttp = {


  // listar todos los gastos
  paymentsAllGet: async ( req, res) =>{
  const payments= await Payments.find().populate("PAYMENT_METHOD").populate("ROL");
  res.json(payments);
  },




    paymentsPost: async (req, res) => {
    console.log(req.body);
    const { DNI, ROL, CONCEPT,  PAYMENT_METHOD, TIME_TO_PAY, Total } = req.body;
    const paymentsAdd = new Payments({ DNI , ROL, CONCEPT,  PAYMENT_METHOD, TIME_TO_PAY, Total  });
    
    await paymentsAdd.save();
    res.json("saved Payments");
   
  },




// modificar por id

paymentsPutId: async (req, res) => {
  const { id } = req.params;
  const { DNI, ROL, CONCEPT,  PAYMENT_METHOD, TIME_TO_PAY, Total   } = req.body;
  const paymentsUpdate = await Payments.findByIdAndUpdate(id, {
    DNI , ROL, CONCEPT,  PAYMENT_METHOD, TIME_TO_PAY , Total
  });
  await paymentsUpdate.save();
  res.json("payments actualizada");
},


//edit state for id
paymentsputState: async (req, res) => {
  const { id } = req.params;
  const { state } = req.body;
  const putState = await Payments.findByIdAndUpdate(id, {
    state: state,
  });
  await putState.save();
  res.json("Estado actualizado");
},

};


export default paymentsHttp;
