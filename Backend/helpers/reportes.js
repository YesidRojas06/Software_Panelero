import reportes from "../models/Reporte/reportes.js"

const helpersReportes = {
    existReportId: async(id, req) => {
        const exist = await reportes.findById(id)
        if(!exist){
            throw new Error(`El report ${id} no existe`)
        }
    },
    existReportModulo: async(Modulo, req) =>{
        const exist = await reportes.find({
            Modulo: new RegExp(Modulo, "i"),
        })
        if (!exist){
            throw new Error(`el modulo ${Modulo} no existe`)   
        }
    },
    existReportFecha: async(Fecha, req) => {
        const exist = await reportes.find({
            Fecha: new RegExp(Fecha, "i"),
        })
        if(!exist){
            throw new Error(`La fecha ${Fecha} no existe`)
        }
    },
    existReportDescripcionModulo: async(DescripcionModulo, req) => {
        const exist = await reportes.find({
            DescripcionModulo: new RegExp(DescripcionModulo, "i"),
        })
        if(!exist){
            throw new Error(`Esa descripcion de modulo ${DescripcionModulo} no existe`)
        }
    },
}

export default helpersReportes
