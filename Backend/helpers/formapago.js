import formapago from "../modelos/formapago.js"

const helpersformapago={
    existeformapago : async (nombrePago) => {
        const existe = await formapago.findById(nombrePago)

        if (!existe) {
            throw new Error(`La nombrePago no existe ${nombrePago}`)
        }
    },

    existenombres :() => {
        return async (req, res) => {
            const existe = await formapago.findOne({ nombrePago: req.body.nombrePago });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El nombrePago ya está registrado` });
                }
        
        }
    },
}

export default helpersformapago