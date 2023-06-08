import modelosuMedida from "../modelos/unidadesMedida.js";

const unidadesMedidahttp = {
  unidadesMedidaIDget: async (req, res) => {
    const unidadesMedida = await modelosuMedida.find();
    res.json( unidadesMedida);
  },

  unidadesMedidapost: async (req, res) => {
    const { codigo, fecha, descripcion } = req.body;
    const unidadesMedida = new modelosuMedida (
      { codigo, fecha, descripcion }
      );

    await unidadesMedida.save();
    res.json({
      unidadesMedida,
    });
   
  },
  unidadesMedidaSearchForTextGet:async (req, res) => {
    const { codigo, fecha, descripcion } = req.query;
    const unidadesMedida = await modelosuMedida.find({ codigo, fecha, descripcion });
    res.json({
      unidadesMedida,
    });
  },



  

  unidadesMedidaput: async (req, res) => {
    const {codigo, fecha, descripcion } = req.body;
  
    console.log(req.body);
    const { id } = req.params;
    const unidadesMedida = await modelosuMedida.findByIdAndUpdate(id, {

      codigo,
      fecha,
      descripcion,
      
    });
    await unidadesMedida.save();
    res.send(unidadesMedida);
  },

  unidadesMedidaInactivoput:async (req,res) => {
    console.log(req.params);
    const { id } = req.params;
    const unidadesMedida = await modelosuMedida.findByIdAndUpdate(id,{estado:0});
    res.send (unidadesMedida); 
 },

 unidadesMedidaActivoput:async (req,res) => {
  console.log(req.params);
  const { id } = req.params;
  const unidadesMedida = await modelosuMedida.findByIdAndUpdate(id,{estado:1});
  res.send(unidadesMedida);
 },
};

export default unidadesMedidahttp;
