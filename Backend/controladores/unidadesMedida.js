import modelosuMedida from "../modelos/unidadesMedida.js";

const uMedidahttp = {
  uMedidaget: async (req, res) => {
    const uMedida = await modelosuMedida.find({});
    res.json({ uMedidas: uMedida });
  },

  uMedidapost: async (req, res) => {
    let { codigo, nombreU, fecha, descripcion } = req.body;
    const uMedida = new modelosuMedida({ codigo, nombreU, fecha, descripcion });
    try {
      await uMedida.save();
      res.send("Unidad de medida creada");
    } catch (error) {
      res.status(500).send("Error al crear la unidad de medida");
    }
  },

  

  uMedidaput: async (req, res) => {
    const { _id, nombreU } = req.body;
    try {
      const uMedida = await modelosuMedida.findByIdAndUpdate(_id, { nombreU }, { new: true });
      if (!uMedida) {
        return res.status(404).send("Unidad de medida no encontrada");
      }
      res.send("Unidad de medida actualizada");
    } catch (error) {
      res.status(500).send("Error al actualizar la unidad de medida");
    }
  }
};

export default uMedidahttp;
