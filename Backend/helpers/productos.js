import productos from "../modelos/productos.js"

const helpersproductos = {
    existproductosId: async(id, req) => {
        const exist = await productos.findById(id)
        if(!exist){
            throw new Error(`El producto ${id} no existe`)
        }
    },
}

export default helpersproductos

