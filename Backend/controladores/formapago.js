import formapago from "../modelos/formapago.js";


const formapagoHttp = {


  
  todopagoGet: async(req, res) =>{
    const todopago = await formapago.find()
    res.json(todopago)
  },


  formapagoPost: async (req, res) => {
    console.log(req.body);
    const { nombre } = req.body;
    const formapagoAdd = new formapago({ nombre });
    await formapagoAdd.save();
    res.json("se registro el metodo de pago");
  },



  formapagoactivoGet: async(req, res) =>{
    const todopago = await formapago.find({state: 1})
    res.json(todopago)
  },


  formapagoinfoPut: async(req, res)=>{
  const {id} = req.params;
  const{nommbre} = req.body
  const formapagoactualizado = await formapago.findByIdAndUpdate(id,{
    nombre:
    nombre,
  });
  await formapagoactualizado.save()
  res.json("Metodo de pago actualizada")
  },



  formapagoestadoPut: async(req, res)=>{
    const {id} = req.params;
    const{estado} = req.body
    const formapagoactualizado = await formapago.findByIdAndUpdate(id,{
      estado: estado
    });
    await formapagoactualizado.save()
    res.json("Estado actualizado")
    },
};


export default formapagoHttp;
