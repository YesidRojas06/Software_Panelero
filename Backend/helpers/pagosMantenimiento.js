import pagosMantenimiento from "../modelos/pagosMantenimiento.js"

const helperspagos={
    existeTipo_pago:async (tipo_pago) => {
        const existe = await pagosMantenimiento.findById(tipo_pago)

        if (!existe) {
            throw new Error(`El pago no existe ${tipo_pago}`)
        }
    },
}
export default helperspagos