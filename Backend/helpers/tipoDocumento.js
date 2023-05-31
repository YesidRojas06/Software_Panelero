import tipoDocumento from "../modelos/tipoDocumento.js"

const helperstDocumento={
    existenombreT:async (nombreT) => {
        const existe = await tipoDocumento.findById(nombreT)

        if (!existe) {
            throw new Error(`El nombre del documento no existe ${nombreT}`)
        }
    },

    existesiglas:async (siglas) => {
        const existe = await tipoDocumento.findById(siglas)

        if (!existe) {
            throw new Error(`las siglas del documento no existen ${siglas}`)
        }
    },
}
export default helperstDocumento