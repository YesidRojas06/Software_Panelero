import marcas from "../modelos/marcas.js"

const helpersmarcas = {
    existmarcasId: async(id, req) => {
        const exist = await marcas.findById(id)
        if(!exist){
            throw new Error(`Los gastos ocacionales ${id} no existe`)
        }
    },
}

export default helpersmarcas


