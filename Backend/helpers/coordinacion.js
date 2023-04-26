import coordinacion from "../models/coordinacion.js"



const helpersCoordinaciones={
    existeUsuarioById : async (id) => {
        const exists = await coordinacion.findById(id)

        if (!exists) {
            throw new Error(`El id no existe ${id}`)
        }
    },

    existeactividades :() => {
        return async (req, res, next) => {
            const exists = await coordinacion.findOne({ actividades: req.body.actividades });
        
                if (exists) {
                    return res.status(401).json({ msg: `Esa actividad ya estaba autorizada antes`});
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    

}
export default helpersCoordinaciones