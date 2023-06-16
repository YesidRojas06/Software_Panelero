import panela from "../../models/Maintenance/TypePanela.js"

const helpersPanela = {
    existPanelaId: async(id, req) => {
        const exist = await panela.findById(id)
        if(!exist){
            throw new Error(`La panela ${id} no existe`)
        }
    },
}

export default helpersPanela