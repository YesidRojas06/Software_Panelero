import packaing from "../../models/Maintenance/TypePackaing.js"

const typePackingHttp = {
  // post info packaing
  packingPost: async (req, res) => {
    console.log(req.body);
    const { name , maxWeigth, unitsPerBox} = req.body;
    const packaingAdd = new packaing({ name, maxWeigth,unitsPerBox });
    await packaingAdd.save();
    res.json("Tipo de empaque registrado");
  },
// get all info packaing
packingGetAll: async(req, res) =>{
    const packaings = await packaing.find()
    res.json(packaings)
  },
// get info active packaing
  packingGetActive: async(req, res) =>{
    const packaings = await packaing.find({state: 1})
    res.json(packaings)
  },
  //edit info for id
  packingPutInfo: async(req, res)=>{
  const {id} = req.params;
  const{name, maxWeigth, unitsPerBox } = req.body
  const packaingUpdate = await packaing.findByIdAndUpdate(id,{
    name:name,
    maxWeigth:maxWeigth,
    unitsPerBox: unitsPerBox
  });
  await packaingUpdate.save()
  res.json("Tipo de paquete actualizada")
  },
  //edit state for id
  packingPutState: async(req, res)=>{
    const {id} = req.params;
    const{state} = req.body
    const packaingUpdate = await packaing.findByIdAndUpdate(id,{
      state: state
    });
    await packaingUpdate.save()
    res.json("Estado actualizado")
    },
};
export default typePackingHttp;
