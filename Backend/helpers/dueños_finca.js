import Actor from "../models/actores.js"


const helpersActors={
    existenombreById : async (id) => {
        const existe = await Actor.findById(nombre)

        if (!existe) {
            throw new Error(`El nombre no existe ${nombre}`)
        }
    },

    existeapellido :() => {
        return async (req, res, next) => {
            const existe = await apellido.findOne({ apellido: req.body.apellido });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El apellido ya está registrado` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existeidById : async (id) => {
        const existe = await Actor.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }
    },

    

}
export default helpersActors