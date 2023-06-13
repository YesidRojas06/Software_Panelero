import modelosLotes from "../modelos/lotes.js";

const loteshttp = {

  lotesgetListar: async (req, res) => {
    const lotes = await modelosLotes.find()
    res.json({ lotes: lotes })
  },

  lotesIdGet: async (req, res) => {
    const lotes = await modelosLotes.find();
    res.json({
      lotes,
    });
  },

  lotesPost: async (req, res) => {
    const { codigo, nombres, descripcion, tamaño,
      estadoSueldo, clase,
      padre, densidad } = req.body;
    const lotes = new modelosLotes({
      codigo,
      nombres,
      descripcion,
      tamaño,
      estadoSueldo,
      clase,
      padre,
      densidad,
    });

    await lotes.save();
    res.json({
      lotes,
    });
  },

  lotesput: async (req, res) => {
    const { codigo, nombres, descripcion, tamaño,
      estadoSueldo, clase,
      padre, densidad} = req.body;

    console.log(req.body);
    const { id } = req.params;
    const lotes = await modelosLotes.findByIdAndUpdate(id, {
      codigo, nombres, descripcion, tamaño,
      estadoSueldo, clase,
      padre, densidad
    });
    await lotes.save();
    res.send(lotes);
  },
  
  lotesSearchForTextGet: async (req, res) => {
    const { name } = req.query;
    const lotes = await modelosLotes.find({ nombres: name });
    res.json({
      lotes,
    });
  },





  lotesGetBuscar: async (req, res) => {
    const { codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad } = req.query;
    const lotes = await modelosLotes.find({
      codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad,
    });
    res.json({
      lotes,
    });
  },

  lotesDelete: async (req, res) => {
    const { codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad } = req.query;
    const lotes = await modelosLotes.findOneAndDelete({
      codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad,
    });
    res.json({ "Lote eliminado": lotes });
  },

  lotesInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const lotes = await modelosLotes.findByIdAndUpdate(id, { estado: 0 });
    res.send(lotes);
  },

  lotesActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const lotes = await modelosLotes.findByIdAndUpdate(id, { estado: 1 });
    res.send(lotes);
  },

}

export default loteshttp
