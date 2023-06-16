import Product from "../../models/Inventory/product.js"

const helpersProduct = {
    existProductId: async(id, req) => {
        const exist = await Product.findById(id)
        if(!exist){
            throw new Error(`El producto ${id} no existe`)
        }
    },
}

export default helpersProduct

