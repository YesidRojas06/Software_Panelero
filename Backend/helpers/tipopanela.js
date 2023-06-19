import tipopanela from "../modelos/tipopanela"

const helperstipopanela = {
    existPanelaId: async(id, req) => {
        const exist = await tipopanela.findById(id)
        if(!exist){
            throw new Error(`La panela ${id} no existe`)
        }
    },
}

export default helperstipopanela