import panela from "../../models/Maintenance/TypePanela.js"

const typePanelaHttp = {
  // post info panela
  panelaPost: async (req, res) => {
    console.log(req.body);
    const { name , price} = req.body;
    const panelaAdd = new panela({ name, price});
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
  const{name,price} = req.body
  const panelaUpdate = await panela.findByIdAndUpdate(id,{
    name:name,
    price: price,
  });
  await panelaUpdate.save()
  res.json("Tipo de panela actualizada")
  },
  //edit state for id
panelaPutState: async(req, res)=>{
    const {id} = req.params;
    const{state} = req.body
    const panelaUpdate = await panela.findByIdAndUpdate(id,{
      state: state
    });
    await panelaUpdate.save()
    res.json("Estado actualizado")
    },
};
export default typePanelaHttp;
