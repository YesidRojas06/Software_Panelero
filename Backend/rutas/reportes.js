import { Router } from "express";
import ReportesHttp from "../controllers/Reports/reportes.js";
import {check} from "express-validator";
import { validarJWT } from "../middlewares/Login/validar-jwt.js";
const router=Router();

router.post('/',[check("token").custom(validarJWT)], ReportesHttp.reportPost)
router.get('/listar',[check("token").custom(validarJWT)], ReportesHttp.reportGet)
router.get('/listar/login',[check("token").custom(validarJWT)], ReportesHttp.reportGetLogin)
router.get('/listar/pedidos',[check("token").custom(validarJWT)], ReportesHttp.reportGetPedidos)

router.get('/listar/transformationDailyProcess',[check("token").custom(validarJWT)], ReportesHttp.reportGetTransformationDailyProcess)
router.get('/listar/transformationPacked',[check("token").custom(validarJWT)], ReportesHttp.reportGetTransformationPacked)
router.get('/listar/transformedRawMaterial',[check("token").custom(validarJWT)], ReportesHttp.reportGetTransformationtransformedRawMaterial)



router.get('/listar/eps',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceEps)
router.get('/listar/farmRegistry',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceFarmRegistry)
router.get('/listar/lots',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceLots)
router.get('/listar/measurementUnits',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceMeasurementUnits)
router.get('/listar/paymentMethod',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenancePaymentMethod)
router.get('/listar/stages',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceStages)
router.get('/listar/support',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceSupport)
router.get('/listar/typeDocument',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceTypeDocument)
router.get('/listar/typePackaing',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceTypePackaing)
router.get('/listar/typePay',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceTypePay)
router.get('/listar/typeWork',[check("token").custom(validarJWT)], ReportesHttp.reportGetMaintenanceTypework)


router.get('/:id',[check("token").custom(validarJWT)], ReportesHttp.reportGetId)


export default router