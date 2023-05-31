// Bodegas

import modelobodegas from "../modelos/bodegas.js";

const bodegahttp= {
  
  bodegasIDGet:async (req, res) => {
    const { id } = req.params;
    const bodegas = await modelobodegas.findById(id);
    res.json({
      bodegas,
    });
  },

  bodegasPost:async (req, res) => {
    const { codigo, nombres, descripcion } = req.body;
    const bodegas = new modelobodegas({ 
      codigo, nombres, descripcion 
    });
  
    await bodegas.save();
    res.json({
      bodegas,
    });
  },

  bodegasSearchForTextGet:async (req, res) => {
    const { name } = req.query;
    const bodegas = await modelobodegas.find({ name });
    res.json({
      bodegas,
    });
  },

  bodegasDelete:async (req, res) => {
    const { codigo, nombres, descripcion } = req.query;
    const bodegas = await modelobodegas.findOneAndDelete({
      codigo, nombres, descripcion,
    });
    res.json({ "Bodega eliminada": bodegas });
  },

  
  bodegasEdit: async (req, res) => {
    const { id } = req.params;
    const { codigo, nombres, descripcion } = req.body;
  
    try {
      const bodega = await modelobodegas.findByIdAndUpdate(
        id,
        { codigo, nombres, descripcion },
        { new: true }
      );
  
      res.json({ bodega });
    } catch (error) {
      res.status(500).json({ error: "Error al editar la bodega" });
    }
  }
}

export default bodegahttp
