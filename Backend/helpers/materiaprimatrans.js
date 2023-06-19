import materiaprimatrans from "../modelos/materiaprimatrans.js"

const helpersmateriaprimatrans = {
    existmateriaprimaById: async(id, req) => {
        const exist = await materiaprimatrans.findById(id)
        if(!exist){
            throw new Error(`La materia prima transformada ${id} no existe`)
        }
    },
}

export default helpersmateriaprimatrans
