import modelobodegas from "../modelos/bodegas.js";

const bodegahttp = {
  bodegasIDGet: async (req, res) => {
    const bodega = await modelobodegas.find();
    res.json({
      bodega,
    });
  },

  bodegasPost: async (req, res) => {
    const { codigo, nombres, descripcion,  } = req.body;
    const bodega = new modelobodegas({
      codigo,
      nombres,
      descripcion,
    
    });

    await bodega.save();
    res.json({
      bodega,
    });
  },

  bodegaput: async (req, res) => {
    const { nombres, codigo,  descripcion } = req.body;

    console.log(req.body);
    const { id } = req.params;
    const bodega = await modelobodegas.findByIdAndUpdate(id, {
      nombres,
      codigo,
      descripcion
      
    });
    await bodega.save();
    res.send(bodega);
  },

  bodegasSearchForTextGet: async (req, res) => {
    const { name } = req.query;
    const bodegas = await modelobodegas.find({ nombres: name });
    res.json({
      bodegas,
    });
  },

  bodegasDelete: async (req, res) => {
    const { codigo, nombres, descripcion,  estado } = req.params;
    const bodega = await modelobodegas.findOneAndDelete({
      codigo,
      nombres,
      descripcion,
      estado,
    });
    res.json({ "Bodega eliminada": bodega });
  },

  bodegasInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const bodega = await modelobodegas.findByIdAndUpdate(id, { estado: 0 });
    res.send(bodega);
  },

  bodegasActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const bodega = await modelobodegas.findByIdAndUpdate(id, { estado: 1 });
    res.send(bodega);
  },
};

export default bodegahttp;
