import Iclientes from "../modelos/ingClientes.js"

const helpersIclientes={

    existeCliente : async (cedula) => {
        const existe = await Iclientes.findById(cedula)

        if (!existe) {
            throw new Error(`El cliente no existe ${cedula}`)
        }
    },

    existenombre :() => {
        return async (req, res) => {
            const existe = await nombre.findOne({ nombre: req.body.nombre });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El nombre ya está registrado` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existedireccion :() => {
        return async (req, res) => {
            const existe = await direccion.findOne({ direccion: req.body.direccion });
        
                if (existe ) {
                    return res.status(401).json({ msg: `La direccion ya está registrada` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },
    
    existeciudad :() => {
        return async (req, res) => {
            const existe = await ciudad.findOne({ ciudad: req.body.ciudad });
        
                if (existe ) {
                    return res.status(401).json({ msg: `La ciudad ya está registrada` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existetelefono :() => {
        return async (req, res) => {
            const existe = await telefono.findOne({ telefono: req.body.telefono });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El telefono ya está registrad` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },
}

export default helpersIclientes