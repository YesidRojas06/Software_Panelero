import coordinacion from "../models/coordinacion.js"
import bcryptjs from "bcryptjs"

// const usuarioPost=async (req,res)=>{
//     const {nombre,telefono,email,password}=req.body
//     const salt =bcryptjs.genSaltSync(5)
//     const usuario = new coordinacion({id,nombre,telefono,email,password})
//     usuario.password=bcryptjs.hashSync(password,salt)
    
//     await usuario.save()

//     res.json({
//         msg:"Registro Exitoso"
//     })
// }

// const coordinacionGet=async(req,res)=>{
//     const coordinaciones=  await  coordinacion.find()
//     res.json({
//         coordinaciones
//     })
// }

const coordinacionesidGet=async(req,res)=>{
    const {id}=req.params
    const coordinaciones=  await  coordinacion.findById(id)
    res.json({
        coordinaciones
    })
}

const coordinacionesautorizGet=async(req,res)=>{
    const {actividades}=req.query
    const coordinaciones=  await  coordinacion.find({actividades})
    res.json({
        coordinaciones
    })
}

// const usuarioGetLogin=async(req,res)=>{
//     let {email,password}=req.query
//     const usuarios=  await  usuario.findOne({email})
//     console.log(usuario);
//     const validarPassword=bcryptjs.compareSync(password,usuario.password)

//     if (usuarios.length>0)
//         res.json({"msg":"Bienvenido"})
//     else
//         res.status(401).json({"msg":"Error"})
// }

// const usuarioDelete=async(req,res)=>{
//     const {email}=req.query
//     const usuario=await usuario.findOneAndDelete({email})
//     res.json({"Eliminado":usuario})
// }
export {coordinacionesidGet,coordinacionesautorizGet}