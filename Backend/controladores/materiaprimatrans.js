import materiaprimatrans from "../modelos/materiaprimatrans.js";

//get all transformed material
const materiaprimatransHttp = {
    
    materiaprimatransGet: async (req, res) => {
        const trans = await materiaprimatrans.find().populate("Lotes").populate("finca").populate("type");
        res.json(trans);
    },

    // add new transformed material 
    materiaprimatransPost: async (req, res) => {
        const { type, cantidad, lotes, finca, fecha} = req.body;
        const trans = new materiaprimatrans({tipo, cantidad, lotes, finca, fecha,
        });
        await trans.save();
        res.json("Nueva materia prima tranformada guardada");
    },

    // Update transformed material
    materiaprimatransPut: async (req, res) => {
        const { id } = req.params;
        const { tipo, cantidad, lotes, finca, fecha } = req.body;
        const transUpdate = await materiaprimatrans.findByIdAndUpdate(id, {
            tipo: tipo,
            cantidad: cantidad, 
            lotes: lotes,
            finca: finca,
            fecha: fecha
        });
        await transUpdate.save();
        res.json("Materia prima transformada actualizada");
    },

    //Update state for delete
    materiaprimatransestadoPut: async (req, res) => {
        const { id } = req.params;
        const { estado } = req.body;
        const update = await materiaprimatrans.findByIdAndUpdate(id, {
            estado: estado,
        });
        await update.save();
        res.json("Estado de materia prima transformada actualizada");
    },
};

export default materiaprimatransHttp;
