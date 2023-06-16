import TransformedRawMaterial from "../../models/Trans/TransformedRawMaterial.js"

const helpersTransformed = {
    existTransformById: async(id, req) => {
        const exist = await TransformedRawMaterial.findById(id)
        if(!exist){
            throw new Error(`La materia prima transformada ${id} no existe`)
        }
    },
}

export default helpersTransformed
