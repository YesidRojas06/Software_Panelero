import tipopanela from "../modelos/tipopanela.js"

const tipopanelaHttp = {
  // post info panela
  panelaPost: async (req, res) => {
    console.log(req.body);
    const { nombre , precio} = req.body;
    const panelaAdd = new panela({ nombre, precio});
    await panelaAdd.save();
    res.json("Tipo de panela registrado");
  },
// get all info panela
panelaGetAll: async(req, res) =>{
    const panelas = await panela.find()
    res.json(panelas)
  },
// get info active panela
  panelaGetActive: async(req, res) =>{
    const panelas = await panela.find({state: 1})
    res.json(panelas)
  },
  //edit info for id
panelaPutInfo: async(req, res)=>{
  const {id} = req.params;
  const{nombre,precio} = req.body
  const panelaUpdate = await panela.findByIdAndUpdate(id,{
    nombre:nombre,
    precio: precio,
  });
  await panelaUpdate.save()
  res.json("Tipo de panela actualizada")
  },
  //edit state for id
panelaPutestado: async(req, res)=>{
    const {id} = req.params;
    const{estado} = req.body
    const panelaUpdate = await panela.findByIdAndUpdate(id,{
      estado: estado
    });
    await panelaUpdate.save()
    res.json("Estado actualizado")
    },
};
export default tipopanelaHttp;
