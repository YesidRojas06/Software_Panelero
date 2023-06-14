import tipopago from "../modelos/tipopago.js"

const tipopagoHttp = {


  tipopagoPost: async (req, res) => {
    const { nombre } = req.body;
    const tipopagoAdd = new tipopago({ nombre });
    await tipopagoAdd.save();
    res.json("Tipo de pago guardado");
  },

  todotipopGet: async(req, res) =>{
    const type = await tipopago.find()
    res.json(type)
  },


  tipopagoactivoGet: async(req, res) =>{
    const type = await tipopago.find({estado: 1})
    res.json(type)
  },


  tipopagoinfoPut: async(req, res)=>{
  const {id} = req.params;
  const{nombre} = req.body
  const tipopagoactualizado = await tipopago.findByIdAndUpdate(id,{
    nombre:nombre,
  });
  await tipopagoactualizado.save()
  res.json("Tipo de pago actualizado")
  },
 

  tipopagoestadoPut: async(req, res)=>{
    const {id} = req.params;
    const{estado} = req.body
    const tipopagoactualizado = await tipopago.findByIdAndUpdate(id,{
      estado: estado
    });
    await tipopagoactualizado.save()
    res.json("Estado actualizado")
    },
};

export default tipopagoHttp;
