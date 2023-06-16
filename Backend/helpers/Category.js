import Category from "../../models/Inventory/category.js"

const helpersCategory = {
    existCategoryId: async(id, req) => {
        const exist = await Category.findById(id)
        if(!exist){
            throw new Error(`la categoria ${id} no existe`)
        }
    },
}

export default helpersCategory

