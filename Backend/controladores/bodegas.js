import modelobodegas from "../modelos/bodegas.js";

const bodegahttp = {
  bodegasIDGet: async (req, res) => {
    // const { id } = req.params;
    const bodega = await modelobodegas.find();
    res.json({
      bodega,
    });
  },

  bodegasPost: async (req, res) => {
    const { codigo, nombres, descripcion,  rol, estado } = req.body;
    const bodega = new modelobodegas({
      codigo,
      nombres,
      descripcion,
      rol,
      estado,
    });

    await bodega.save();
    res.json({
      bodega,
    });
  },

  bodegasSearchForTextGet: async (req, res) => {
    const { name } = req.query;
    const bodegas = await modelobodegas.find({ nombres: name });
    res.json({
      bodegas,
    });
  },

  bodegasDelete: async (req, res) => {
    const { codigo, nombres, descripcion,  rol, estado } = req.params;
    const bodega = await modelobodegas.findOneAndDelete({
      codigo,
      nombres,
      descripcion,
      rol,
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
