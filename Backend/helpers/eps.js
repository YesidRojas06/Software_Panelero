import eps from "../modelos/eps.js"

const helpersEps={
    existeBodegas : async (n_linea) => {
        const existe = await eps.findById(n_linea)

        if (!existe) {
            throw new Error(`La EPS no existe ${n_linea}`)
        }
    },

    existenombres :() => {
        return async (req, res) => {
            const existe = await eps.findOne({ nombre: req.body.nombre });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El nombre ya está registrado` });
                }
        
        }
    },

}

export default helpersEps