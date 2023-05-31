import modelosuMedida from "../modelos/unidadesMedida.js"

const uMedidahttp={
    uMedidaget: async (req, res) => {
        const uMedida = await modelosuMedida.find();
        res.json({ uMedidas: uMedida });
      },
    
      uMedidapost: async (req, res) => {
        const { nombreU } = req.body;
        const uMedida = new modelosuMedida({nombreU});
        await uMedida.save();
        res.send("Unidad de medida cerrada");
      },
    
      uMedidaput: async (req, res) => {
        const { nombreU } = req.body;
        const uMedida = await modelosuMedida.findByIdAndUpdate({nombreU});
        await uMedida.save();
        res.send("Unidad de medida actualizada ;)");
      }
}

export default uMedidahttp