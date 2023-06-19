import empaques from "../modelos/empaques.js"


//get all packed
const empaquesHttp = {

  empaquesGet: async (req, res) => {
    const empaque = await empaques.find().populate("tipoempaque").populate("tipopanela")

    console.log(empaque);
    res.json(empaque);
  },

// add new packed 
  empaquesPost: async (req, res) => {
    const { nombrebodega, tipoempaque, colorPanela, formPanela, totalPanelas } = req.body;
    const empaques = new empaques({ nombrebodega, tipoempaque, colorPanela, formPanela, totalPanelas});
    await empaques.save();
    res.json("Nuevo empaquetado guardado");
},

// Update packed
empaquesPut: async (req, res) =>{
  const {id} = req.params;
  const {nombrebodega, tipoempaque, colorPanela, formPanela, totalPanelas} = req.body;
  const empaquesUpdate = await empaques.findByIdAndUpdate(id,{
    nombrebodega: nombrebodega,
    tipoempaque: tipoempaque,
    colorPanela: colorPanela,
    formPanela: formPanela,
    totalPanelas: totalPanelas,
  });
  await empaquesUpdate.save();
  res.json("Empaquetado actualizado")
},

//Update state for delete
empaquesestadoPut: async (req, res) =>{
  const {id} = req.params;
  const {estado} = req.body;
  const update= await empaques.findByIdAndUpdate(id,{
  estado: estado,
  });
  await update.save();
  res.json("Estado de empaquetado actualizado")
}


};

export default empaquesHttp;
