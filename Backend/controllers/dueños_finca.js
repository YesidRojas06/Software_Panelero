import Actor from "../models/actores.js"


const ActorGetListar=async(req,res)=>{
    const actor=  await  Actor.find({})
    res.json({
        actor
    })
}


const ActorPost=async (req,res)=>{
    console.log(req.files.foto)
    const {nombre, apellido,edad,foto}=req.body
    
    const pelicula = new Actor({nombre, apellido,edad,foto})
    
    
    await pelicula.save()

    res.json({
        "msg":"Actor agregado"
    })
}

const ActorGet=async(req,res)=>{
    const actores1=  await  Actor.find()
    res.json({
        actores1
    })
}

const ActorGetbuscar=async(req,res)=>{
    const {nombre}=req.query
    const actores=  await  Actor.find({nombre})
    res.json({
        actores
    })
}


const ActorGetbuscarid=async(req,res)=>{
    const {id}=req.params
    const actores=  await  Actor.findById(id)
    res.json({
        actores
    })
}


const ActorDelete=async(req,res)=>{
    const {id}=req.params
    const actores=await Actor.findByIdAndDelete(id)
    res.json({"Eliminado":actores})
}


const ActorPut=async (req,res)=>{
    const {nombre, apellido,edad,foto}=req.body
    const{id}=req.params
    const actor = await Actor.findByIdAndUpdate(id,{nombre, apellido,edad,foto})
    res.json({
        "msg":"Actor editado"
    })
}

export {ActorPost,ActorGet,ActorGetbuscar,ActorDelete,ActorGetbuscarid,ActorPut,ActorGetListar}