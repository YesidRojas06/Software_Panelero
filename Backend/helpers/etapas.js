import Etapas from "../modelos/etapas.js"

const helpersEtapas={
    existe_etapa : async (nombre) => {
        const existe = await Etapas.findById(nombre)

        if (!existe) {
            throw new Error(`La Etapa no existe ${nombre}`)
        }
    },

    existe_descripcion :() => {
        return async (req, res) => {
            const existe = await descripcion.findOne({ descripcion: req.body.descripcion });
        
                if (existe ) {
                    return res.status(401).json({ msg: `La descripcion nombre ya está registrada` });
                }
        
        }
    },

}

export default helpersEtapas