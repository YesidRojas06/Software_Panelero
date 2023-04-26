import Usuario from "../models/usuario.js"
import bcryptjs from "bcryptjs"

const usuarioPost=async (req,res)=>{
    const{nombre, fecha_nacimiento, documento, apellido, email, telefono, password}=req.body
    const salt = bcryptjs.genSaltSync(5)
    const usuario = new Usuario ({nombre, fecha_nacimiento, documento, apellido, email, telefono, password})
    usuario.password=bcryptjs.hashSync(password,salt)

    await usuario.save()

    res.json({
        msg:"El registro del usuario fue exitoso"
    })
}

const usuarioGet=async (req,res)=>{
    const usuario=await usuario.find()
    res.json({
        usuario
    })
}

const usuarioGetBuscar=async(req, res)=>{
    const {email}=req.query
    const usuario= await usuario.find({email})
    res.json({
        usuario
    })
}

const usuarioGetLogin=async (req,res)=>{
    const {email} =req.query
    const usuario = await usuario.findOne({email})
    console.log(usuario);
    const verificarPassword=bcryptjs.compareSync(password,usuario.password)

    if (usuario.length>0)
       req.json({"msg":"Ingreso exitoso"})
    else
       res.status(401).json({"msg":"Error, usuario incorrecto"})
}

const usuarioDelete=async (req,res)=>{
    const {email}=req.query
    const usuario=await usuario.findOneAndDelete({email})
    res.json({"Usuario eliminado":usuario})

}

export {usuarioPost, usuarioGet, usuarioGetBuscar, usuarioGetLogin, usuarioDelete}