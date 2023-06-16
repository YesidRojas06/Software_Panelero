import packed from "../../models/Trans/Packed.js"


//get all packed
const packedHttp = {
  packedGet: async (req, res) => {
    const pack = await packed.find().populate("typePacking").populate("formPanela")

    console.log(pack);
    // .populate("typePanela");
    res.json(pack);
  },

// add new packed 
  packedPost: async (req, res) => {
    const { cellarName, typePacking, colorPanela, formPanela, totalPanelas } = req.body;
    const packe = new packed({ cellarName, typePacking, colorPanela, formPanela, totalPanelas});
    await packe.save();
    res.json("Nuevo empaquetado guardado");
},

// Update packed
packedPut: async (req, res) =>{
  const {id} = req.params;
  const {cellarName, typePacking, colorPanela, formPanela, totalPanelas} = req.body;
  const packedUpdate = await packed.findByIdAndUpdate(id,{
    cellarName: cellarName,
    typePacking: typePacking,
    colorPanela: colorPanela,
    formPanela: formPanela,
    totalPanelas: totalPanelas,
  });
  await packedUpdate.save();
  res.json("Empaquetado actualizado")
},

//Update state for delete
packedStatePut: async (req, res) =>{
  const {id} = req.params;
  const {state} = req.body;
  const update= await packed.findByIdAndUpdate(id,{
  state: state,
  });
  await update.save();
  res.json("Estado de empaquetado actualizado")
}


};

export default packedHttp;
