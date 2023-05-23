// LOTES

import modelosLotes from "../modelos/lotes.js";

const loteshttp= {

  lotesgetListar:async(req,res) => {
      const lotes= await modelosLotes.find() 
      res.json({lotes: lotes})
  },

  lotesIdGet : async (req, res) => {
    const { codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad } = req.params;
    const lotes = await modelosLotes.findById(
      codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad
    );
    res.json({
      lotes,
    });
  },

  lotesPost : async (req, res) => {
    const { codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad } = req.body;
    const lotes = new modelosLotes({
      codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad,
    });
    await lotes.save();
    res.json({
      msg: "Lote registrado",
    });
  },

  lotesGetBuscar : async (req, res) => {
    const { codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad } = req.query;
    const lotes = await modelosLotes.find({
      codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad,
    });
    res.json({
      lotes,
    });
  },
  
  lotesDelete : async (req, res) => {
    const { codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad } = req.query;
    const lotes = await modelosLotes.findOneAndDelete({
      codigo, nombres, descripcion, tamaño, estadoSueldo, clase, padre, densidad,
    });
    res.json({ "Lote eliminado": lotes });
  }
}

export default loteshttp
