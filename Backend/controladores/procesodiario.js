import procesodiario from "../modelos/procesodiario.js";

// //get all daily process
const procesodiarioHttp = {

  procesodiarioGet: async (req, res) => {
    const daily = await procesodiario.find().populate("usuarios").populate("lotes").populate("Farm");
    console.log(diario);
    res.json(diario);
  },

  // dailyProcessGet: async (req, res) => {
  //       const daily = await dailyProcess.find();
  //       res.json(daily);
  // },

  // add new daily process
  procesodiarioPost: async (req, res) => {
    const { nombre, descripcion, horas, usuario, lote, finca, fecha } = req.body;
    const nuevoproceso = new procesodiario({nombre,descripcion,horas,usuario,lote,finca,fecha,});
    await nuevoproceso.save();
    res.json("Proceso diario registrado ");
  },

  // Update daily process
  procesodiarioPut: async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, horas, usuario, lote, finca, fecha } = req.body;
    const diarioUpdate = await procesodiario.findByIdAndUpdate(id, {
      nombre: nombre,
      descripcion: descripcion,
      horas: horas,
      usuario: usuario,
      fecha: fecha,
      lote: lote,
      finca: finca,
    });
    await diarioUpdate.save();
    res.json("Proceso diario actualizado");
  },

  //Update state for delete
  procesodiarioestadoPut: async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    const update = await procesodiario.findByIdAndUpdate(id, {
      estado: estado,
    });
    await update.save();
    res.json("Estado de proceso diario actualizado");
  },
};

export default procesodiarioHttp;
