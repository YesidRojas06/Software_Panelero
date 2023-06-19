import pagos from "../modelos/pagos.js"


//  Crear gasto 
const pagosHttp = {


  // listar todos los gastos
  pagosAllGet: async ( req, res) =>{
  const pagos= await pagos.find().populate("formapago").populate("rol");
  res.json(pagos);
  },




  pagosPost: async (req, res) => {
    console.log(req.body);
    const { dni, rol, concepto,  formapago, tiempoparapagar, Total } = req.body;
    const pagosAdd = new pagos({ dni , rol, concepto,  formapago, tiempoparapagar, Total  });
    
    await pagosAdd.save();
    res.json("pagos guardados");
   
  },




// modificar por id

pagosPutId: async (req, res) => {
  const { id } = req.params;
  const { dni, rol, concepto,  formapago, tiempoparapagar, Total   } = req.body;
  const pagosUpdate = await pagos.findByIdAndUpdate(id, {
    dni , rol, concepto,  formapago, tiempoparapagar , Total
  });
  await pagosUpdate.save();
  res.json("payments actualizada");
},



pagosputestado: async (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  const pagosputState = await pagos.findByIdAndUpdate(id, {
    estado: estado,
  });
  await pagosputState.save();
  res.json("Estado actualizado");
},

};


export default pagosHttp;
