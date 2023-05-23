import Lotes from "../modelos/lotes.js"

const helperslotes={

    existelotes : async (codigo) => {
        const existe = await Lotes.findById(codigo)

        if (!existe) {
            throw new Error(`El lote no existe ${codigo}`)
        }
    },

    existe_nombres:() => {
        return async (req, res) => {
            const existe = await nombres.findOne({ nombres: req.body.nombres });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El nombre ha sido registrado` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existe_descripcion:() => {
        return async (req, res) => {
            const existe = await descripcion.findOne({ descripcion: req.body.descripcion });
        
                if (existe ) {
                    return res.status(401).json({ msg: `La descripcion ha sido registrada` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existe_estado_sueldo:() => {
        return async (req, res) => {
            const existe = await estadoSueldo.findOne({ estadoSueldo: req.body.estadoSueldo });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El estado del sueldo ha sido registrado` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existe_clase:() => {
        return async (req, res) => {
            const existe = await clase.findOne({ clase: req.body.clase });
        
                if (existe ) {
                    return res.status(401).json({ msg: `La clase ha sido registrada` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existe_padre:() => {
        return async (req, res) => {
            const existe = await padre.findOne({ padre: req.body.padre });
        
                if (existe ) {
                    return res.status(401).json({ msg: `El padre ha sido registrado xdddd` });
                    //throw new Error(`El email ya está registrado`)
                }
        
        }
    },

    existe_densidad:() => {
        return async (req, res) => {
            const existe = await densidad.findOne({ densidad: req.body.densidad });
        
                if (existe ) {
                    return res.status(401).json({ msg: `La densidad ha sido registrado` });
                    //throw new Error(`El email ya está registrado`)
                }
        }
    },

}

export default helperslotes