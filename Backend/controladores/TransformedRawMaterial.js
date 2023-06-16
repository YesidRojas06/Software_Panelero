import TransformedRawMaterial from "../../models/Trans/TransformedRawMaterial.js";

//get all transformed material
const transformedRawMaterialHttp = {
    transGet: async (req, res) => {
        const trans = await TransformedRawMaterial.find().populate("lot").populate("farm").populate("type");
        res.json(trans);
    },

    // add new transformed material 
    transPost: async (req, res) => {
        const { type, quantity, lot, farm, date} = req.body;
        const trans = new TransformedRawMaterial({type, quantity, lot, farm, date,
        });
        await trans.save();
        res.json("Nueva materia prima tranformada guardada");
    },

    // Update transformed material
    transPut: async (req, res) => {
        const { id } = req.params;
        const { type, quantity, lot, farm, date } = req.body;
        const transUpdate = await TransformedRawMaterial.findByIdAndUpdate(id, {
            type: type,
            quantity: quantity, 
            lot: lot,
            farm: farm,
            date: date
        });
        await transUpdate.save();
        res.json("Materia prima transformada actualizada");
    },

    //Update state for delete
    transStatePut: async (req, res) => {
        const { id } = req.params;
        const { state } = req.body;
        const update = await TransformedRawMaterial.findByIdAndUpdate(id, {
            state: state,
        });
        await update.save();
        res.json("Estado de materia prima transformada actualizada");
    },
};

export default transformedRawMaterialHttp;
