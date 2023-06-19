import categoria from "../modelos/categoria.js"

const helperscategoria = {
    existcategoriaId: async(id, req) => {
        const exist = await categoria.findById(id)
        if(!exist){
            throw new Error(`la categoria ${id} no existe`)
        }
    },
}

export default helperscategoria

