import modelousuario from "../modelos/usuarios.js";

const usuariohttp= {
    usuarioget:async(req,res) => {
        const usuario= await modelousuario.find() 
        res.json({usuarios:usuario})
    },
    usuariopost:async(req,res) => { 
        const{nombre,correo,contrasena,rol,estado}= req.body
        const usuario= new modelousuario({nombre,correo,contrasena,rol,estado}) 
        await usuario.save()
        res.send("usario creado")
    },
    usuarioput:async(req,res) => { 
        const{nombre,correo,contrasena,rol,estado}= req.body 
        const{id}=req.params
        const usuario= await modelousuario.findByIdAndUpdate(id,{nombre,correo,contrasena,rol,estado}) 
        await usuario.save()
        res.send("usario actualizado")
    },

}

export default usuariohttp