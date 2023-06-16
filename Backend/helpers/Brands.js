import Brands from "../../models/Inventory/brands.js"

const helpersBrands = {
    existBrandsId: async(id, req) => {
        const exist = await Brands.findById(id)
        if(!exist){
            throw new Error(`Los gastos ocacionales ${id} no existe`)
        }
    },
}

export default helpersBrands


