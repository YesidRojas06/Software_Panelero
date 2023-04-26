import Cliente from "/models/clientes.js"
import bcryptjs from "bcryptjs"

const clientePost = async(req, res)=>{
    const {nombre, documento, apellido, telefono , direccion}=req.body
    const salt= bcryptjs.genSaltSync(5)
    const cliente = new Cliente({nombre, documento, apellido, telefono, direccion})

    await cliente.save()

    res.json({
        msg:"El registro del cliente ha sido exitoso"
    })
}

const clienteGet=async(req,res)=>{
    const cliente = await cliente.find()
    res.json({
        cliente
})
}