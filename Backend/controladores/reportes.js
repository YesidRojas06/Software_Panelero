import reportes  from "../../models/Reporte/reportes.js";
import login  from "../../models/Login/login.js";
import pedidos  from "../../models/Pedidos/pedidos.js";
import DailyProcess from "../../models/Trans/DailyProcess.js";
import Packed from "../../models/Trans/Packed.js";
import TransformedRawMaterial from "../../models/Trans/TransformedRawMaterial.js";
import Maintenance  from "../../models/Maintenance/Epss.js";
import Maintenance2  from "../../models/Maintenance/FarmRegistry.js";
import Maintenance3  from "../../models/Maintenance/Lots.js";
import Maintenance4  from "../../models/Maintenance/MeasurementUnits.js";
import Maintenance5  from "../../models/Maintenance/PaymentMethod.js";
import Maintenance6  from "../../models/Maintenance/Stages.js";
import Maintenance7  from "../../models/Maintenance/Support.js";
import Maintenance8  from "../../models/Maintenance/TypeDocument.js";
import Maintenance9  from "../../models/Maintenance/TypePackaing.js";
import Maintenance10  from "../../models/Maintenance/TypePay.js";
import Maintenance11  from "../../models/Maintenance/TypeWork.js";




const ReportesHttp={
    loginGet: async(req, res) =>{
        const { search } = req.query;
        const report = await reportes.find();
        res.json({
            report
        })
    },

// add report
reportPost: async (req, res) =>{
const {Modulo,Fecha,DescripcionModulo} =req.body
const newreport= new reportes( Modulo,Fecha,DescripcionModulo  )
await newreport.save()
res.json('Reporte Guardado')
},

// listar all reports
reportGet: async ( req, res) =>{
    const report= await reportes.find();
    res.json(report)
    },

// listar reports de login
reportGetLogin: async ( req, res) =>{
    const report= await login.find();
    res.json(report)
    },

// listar reports de Pedidos
reportGetPedidos: async ( req, res) =>{
    const report= await pedidos.find();
    res.json(report)
    },





// listar reports de Transformation dailyProcess
reportGetTransformationDailyProcess: async ( req, res) =>{
    const report= await DailyProcess.find();
    res.json(report)
    },

// listar reports de Transformation packed
reportGetTransformationPacked: async ( req, res) =>{
    const report= await Packed.find();
    res.json(report)
    },


// listar reports de Transformation transformedRawMaterial
reportGetTransformationtransformedRawMaterial: async ( req, res) =>{
    const report= await TransformedRawMaterial.find();
    res.json(report)
    },


// listar reports de maintenance eps
reportGetMaintenanceEps: async ( req, res) =>{
    const report= await Maintenance.find();
    res.json(report)
    },

// listar reports de maintenance farmRegistry
reportGetMaintenanceFarmRegistry: async ( req, res) =>{
    const report= await Maintenance2.find();
    res.json(report)
    },

// listar reports de maintenance lots
reportGetMaintenanceLots: async ( req, res) =>{
    const report= await Maintenance3.find();
    res.json(report)
    },
// listar reports de maintenance measurementUnits
reportGetMaintenanceMeasurementUnits: async ( req, res) =>{
    const report= await Maintenance4.find();
    res.json(report)
    },
// listar reports de maintenance paymentMethod
reportGetMaintenancePaymentMethod: async ( req, res) =>{
    const report= await Maintenance5.find();
    res.json(report)
    },
// listar reports de maintenance stages
reportGetMaintenanceStages: async ( req, res) =>{
    const report= await Maintenance6.find();
    res.json(report)
    },
// listar reports de maintenance support
reportGetMaintenanceSupport: async ( req, res) =>{
    const report= await Maintenance7.find();
    res.json(report)
    },
// listar reports de maintenance typeDocument
reportGetMaintenanceTypeDocument: async ( req, res) =>{
    const report= await Maintenance8.find();
    res.json(report)
    },
// listar reports de maintenance TypePackaing
reportGetMaintenanceTypePackaing: async ( req, res) =>{
    const report= await Maintenance9.find();
    res.json(report)
    },
// listar reports de maintenance typePay
reportGetMaintenanceTypePay: async ( req, res) =>{
    const report= await Maintenance10.find();
    res.json(report)
    },
// listar reports de maintenance typeWork
reportGetMaintenanceTypework: async ( req, res) =>{
    const report= await Maintenance11.find();
    res.json(report)
    },





// // listar por id 
reportGetId: async (req, res) =>{
const {id}= req.params;
const report= await reportes.find({_id:id})
res.json(report)
},

}
export default ReportesHttp