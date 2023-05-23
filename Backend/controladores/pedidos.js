import modelopedido from "../modelos/pedidos.js";



const pedidohttp = {
    pedidoget : async (req, res) => {
        const pedido = await modelopedido.find()
        res.json({pedidos: pedido})
    },

    pedidopost: async( req , res) => {
        let {documento, fecha , nombre_pedido , telefono, cantidad, estado, comprobante_pago, direccion, saldo, total } = req.body    
        const pedido = new modelopedido({documento , fecha , nombre_pedido, telefono, cantidad, estado, comprobante_pago, direccion, saldo, total})
        await pedido.save()
        res.send ("pedido creado")
    },

    pedidoput: async (req ,res) => {
        const{documento, telefono, comprobante_pago, saldo} = req.body
        console.log(req.body);
        const{id} = req.params
        const pedido = await modelopedido.findByIdAndUpdate(id,{documento, telefono, comprobante_pago, saldo})
        await pedido.save()
        res.send(pedido)
    },


}

export default pedidohttp