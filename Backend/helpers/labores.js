import labores from "../modelos/labores.js"

const helpersLabores={

    existenombre :() => {
        return async (req, res) => {
            const existe = await labores.findOne({ nombre: req.body.nombre });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El nombre ya está registrado` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existearea :() => {
        return async (req, res) => {
            const existe = await area.findOne({ area: req.body.area });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El área ya está registrada` });
                }
        
        }
    },

    existepago_diario :() => {
        return async (req, res) => {
            const existe = await pago.findOne({ pago: req.body.pago });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El pago ya está registrado` });
                }
        
        }
    },

}

export default helpersLabores