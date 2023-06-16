import typePay from "../modelos/tipodepago.js"

const typePayHttp = {
  // post info typePay
  typePayPost: async (req, res) => {
    const { name } = req.body;
    const typePayAdd = new typePay({ name });
    await typePayAdd.save();
    res.json("Tipo de pago guardado");
  },
// get all info pay
  typePayGetAll: async(req, res) =>{
    const type = await typePay.find()
    res.json(type)
  },
// get info active pay
  typePayGetActive: async(req, res) =>{
    const type = await typePay.find({state: 1})
    res.json(type)
  },
  //edit info for id
  typePayPutInfo: async(req, res)=>{
  const {id} = req.params;
  const{name} = req.body
  const typePayUpdate = await typePay.findByIdAndUpdate(id,{
    name:name,
  });
  await typePayUpdate.save()
  res.json("Tipo de pago actualizado")
  },
  //edit state for id
  typePayStatePut: async(req, res)=>{
    const {id} = req.params;
    const{state} = req.body
    const typePayStateUpdate = await typePay.findByIdAndUpdate(id,{
      state: state
    });
    await typePayStateUpdate.save()
    res.json("Estado actualizado")
    },
};
export default typePayHttp;
