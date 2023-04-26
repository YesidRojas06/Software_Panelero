import Usuario from "../models/usuario";

const helpersUsuario={
    existeUsuarioById : async (id) =>{
        const existe = await Usuario.findById(id)

        if (!existe){
            throw new Error(`Ese id no existe ${id}`)
        }
    },

    existeEmail :()=>{
        return async (req, res, next)=> {
            const existe = await Usuario.findOne({email: req.body.email});

            if (existe){
                return res.status(401).json({msg:`El email ya se encuentra registrado`});
            }

        
        }
    },
}

export default helpersUsuario