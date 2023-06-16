import { Router } from "express";
import dailyProcessHttp from "../../controllers/Transformation/DailyProcess.js";
import helpersdailyProcess from "../../helpers/Transformation/dbDailyProcess.js";
import { check } from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";
const router = Router();

router.get("/dailyProcess",
  [
    // check("token").custom(validarJWT),
    // validarcampos,
  ],
  dailyProcessHttp.dailyProcessGet
);

router.post("/register",
  [
    check("name", "El nombre es obligatorio").notEmpty(),
    check("description", "La descripción es obligatoria").notEmpty(),
    check("hours", "Las horas son obligatorias").notEmpty(),
    check("people", "La persona encargada es obligatoria").notEmpty(),
    check("lot", "El lote es obligatorio").notEmpty(),
    check("farm", "La finca es obligatoria").notEmpty(),
    check("date", "La fecha es obligatoria").notEmpty(),

    // check("token").custom(validarJWT),
        validarcampos,

  ],
  dailyProcessHttp.dailyProcessPost
);

router.put("/update/:id",
  [
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(helpersdailyProcess.existDailyId),
    check("name", "El nombre es obligatorio").notEmpty(),
    check("description", "La descripción es obligatoria").notEmpty(),
    check("hours", "Las horas son obligatorias").notEmpty(),
    check("people", "La persona encargada es obligatoria").notEmpty(),
    check("lot", "El lote es obligatorio").notEmpty(),
    check("farm", "La finca es obligatoria").notEmpty(),
    check("date", "La fecha es obligatoria").notEmpty(),
    // check("token").custom(validarJWT),
    validarcampos,
  ],
  dailyProcessHttp.dailyProcessPut
);

router.put("/state/:id",
  [
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(helpersdailyProcess.existDailyId),

    // check("token").custom(validarJWT),
  ],
  dailyProcessHttp.dailyProcessStatePut
);

export default router;
