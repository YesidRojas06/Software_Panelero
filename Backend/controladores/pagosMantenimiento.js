import modelospagos from "../modelos/pagosMantenimiento.js"

const pagoshttp={
    pagosget: async (req, res) => {
        const pagos = await modelospagos.find();
        res.json({ pago: pagos });
      },
    
      pagospost: async (req, res) => {
        const { tipo_pago } = req.body;
        const pagos = new modelospagos({tipo_pago});
        await pagos.save();
        res.send("Tipo de pagos cerrados");
      },
    
      pagosput: async (req, res) => {
        const { tipo_pago } = req.body;
        const pagos = await modelospagos.findByIdAndUpdate({tipo_pago});
        await pagos.save();
        res.send("pagos actualizado ;)");
      }
}

export default pagoshttp