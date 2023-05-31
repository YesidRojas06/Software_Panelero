import unidadesMedida from "../modelos/unidadesMedida.js"

const helpersuMedida={
    existeNombreu:async (nombreU) => {
        const existe = await unidadesMedida.findById(nombreU)

        if (!existe) {
            throw new Error(`La unidad de medida no existe ${nombreU}`)
        }
    },
}

export default helpersuMedida