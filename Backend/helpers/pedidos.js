import pedidos from "../modelos/pedidos.js"

const helpersPedidos = {
    existepedido: async(id, req) => {
        const existe = await pedidos.findById(id)
        if(!existe){
            throw new Error(`El pedido ${id} no existe`)
        }
    },
}

export default helpersPedidos