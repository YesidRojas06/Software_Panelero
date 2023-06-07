import modelosuMedida from "../modelos/unidadesMedida.js";

const uMedidahttp = {
  uMedidaIDget: async (req, res) => {
    const uMedida = await modelosuMedida.find({});
    res.json({ uMedida });
  },

  uMedidapost: async (req, res) => {
    const { codigo, fecha, descripcion } = req.body;
    const uMedida = new modelosuMedida({ codigo, fecha, descripcion });

    await uMedida.save();
    res.json({
      uMedida,
    });
   
  },

  

  uMedidaput: async (req, res) => {
    const {codigo, fecha, descripcion } = req.body;
  
    console.log(req.body);
    const { id } = req.params;
    const uMedida = await modelosuMedida.findByIdAndUpdate(id, {

      codigo,
      fecha,
      descripcion,
      
    });
    await uMedida.save();
    res.send(uMedida);
  },

  uMedidaInactivoput:async (req,res) => {
    console.log(req.params);
    const { id } = req.params;
    const uMedida = await modelosuMedida.findByIdAndUpdate(id,{estado:0});
    res.send (uMedida); 
 },

 uMedidaActivoput:async (req,res) => {
  console.log(req.params);
  const { id } = req.params;
  const uMedida = await modelosuMedida.findByIdAndUpdate(id,{estado:1});
  res.send(uMedida);
 },
};

export default uMedidahttp;
