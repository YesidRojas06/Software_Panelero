import gastosocasionales from "../modelos/gastosocasionales.js"

const helpersgastosocasionales = {
    existocasionalesId: async(id, req) => {
        const exist = await gastosocasionales.findById(id)
        if(!exist){
            throw new Error(`Los gastos ocacionales ${id} no existe`)
        }
    },
}

export default helpersgastosocasionales