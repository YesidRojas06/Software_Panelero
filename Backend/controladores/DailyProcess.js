import dailyProcess from "../../models/Trans/DailyProcess.js";

// //get all daily process
const dailyProcessHttp = {
  dailyProcessGet: async (req, res) => {
    const daily = await dailyProcess.find().populate("people").populate("lot").populate("farm");
    console.log(daily);
    res.json(daily);
  },

  // dailyProcessGet: async (req, res) => {
  //       const daily = await dailyProcess.find();
  //       res.json(daily);
  // },

  // add new daily process
  dailyProcessPost: async (req, res) => {
    const { name, description, hours, people, lot, farm, date } = req.body;
    const newProcess = new dailyProcess({
      name,
      description,
      hours,
      people,
      lot,
      farm,
      date,
    });
    await newProcess.save();
    res.json("Proceso diario registrado ");
  },

  // Update daily process
  dailyProcessPut: async (req, res) => {
    const { id } = req.params;
    const { name, description, hours, people, date, lot, farm } = req.body;
    const dailyUpdate = await dailyProcess.findByIdAndUpdate(id, {
      name: name,
      description: description,
      hours: hours,
      people: people,
      date: date,
      lot: lot,
      farm: farm,
    });
    await dailyUpdate.save();
    res.json("Proceso diario actualizado");
  },

  //Update state for delete
  dailyProcessStatePut: async (req, res) => {
    const { id } = req.params;
    const { state } = req.body;
    const update = await dailyProcess.findByIdAndUpdate(id, {
      state: state,
    });
    await update.save();
    res.json("Estado de proceso diario actualizado");
  },
};

export default dailyProcessHttp;
