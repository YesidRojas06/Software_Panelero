import tipoempaque from "../modelos/tipoempaque.js"

const tipoempaqueHttp = {
  // post info packaing
  tipoempaquePost: async (req, res) => {
    console.log(req.body);
    const { nombre , peso, unidadescaja} = req.body;
    const tipoempaqueAdd = new tipoempaque({ nombre, peso,unidadescaja });
    await tipoempaqueAdd.save();
    res.json("Tipo de empaque registrado");
  },
// get all info packaing
tipoempaqueGetAll: async(req, res) =>{
    const tipoempaques = await tipoempaque.find()
    res.json(tipoempaques)
  },
// get info active packaing
tipoempaqueGetActive: async(req, res) =>{
    const tipoempaques = await tipoempaque.find({state: 1})
    res.json(tipoempaques)
  },
  //edit info for id
  tipoempaquePutInfo: async(req, res)=>{
  const {id} = req.params;
  const{nombre, peso, unidadescaja } = req.body
  const tipoempaqueUpdate = await tipoempaque.findByIdAndUpdate(id,{
    nombre:nombre,
    peso:peso,
    unidadescaja: unidadescaja
  });
  await tipoempaqueUpdate.save()
  res.json("Tipo de paquete actualizada")
  },
  //edit state for id
  tipoempaquePutestado: async(req, res)=>{
    const {id} = req.params;
    const{estado} = req.body
    const tipoempUpdate = await tipoempaque.findByIdAndUpdate(id,{
      estado: estado
    });
    await tipoempUpdate.save()
    res.json("Estado actualizado")
    },
};
export default tipoempaqueHttp;
