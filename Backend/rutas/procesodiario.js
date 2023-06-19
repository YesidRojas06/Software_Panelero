import { Router } from "express";
import procesodiarioHttp from "../controladores/procesodiario.js";
import helpersprocesodiario from "../helpers/procesodiario.js";
import { check } from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
//import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";
const router = Router();

router.get("/procesodiario",
  [
    // check("token").custom(validarJWT),
    // validarcampos,
  ],
  procesodiarioHttp.procesodiarioGet
);

router.post("/registro",
  [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("descripcion", "La descripción es obligatoria").notEmpty(),
    check("horas", "Las horas son obligatorias").notEmpty(),
    check("usuario", "La persona encargada es obligatoria").notEmpty(),
    check("lote", "El lote es obligatorio").notEmpty(),
    check("finca", "La finca es obligatoria").notEmpty(),
    check("fecha", "La fecha es obligatoria").notEmpty(),

    // check("token").custom(validarJWT),
        //validarcampos,

  ],
  procesodiarioHttp.procesodiarioPost
);

router.put("/update/:id",
  [
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(helpersprocesodiario.existdiarioId),
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("descripcion", "La descripción es obligatoria").notEmpty(),
    check("horas", "Las horas son obligatorias").notEmpty(),
    check("usuario", "La persona encargada es obligatoria").notEmpty(),
    check("lote", "El lote es obligatorio").notEmpty(),
    check("finca", "La finca es obligatoria").notEmpty(),
    check("fecha", "La fecha es obligatoria").notEmpty(),
    // check("token").custom(validarJWT),
    //validarcampos,
  ],
  procesodiarioHttp.procesodiarioPut
);

router.put("/estado/:id",
  [
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check("id").custom(helpersprocesodiario.existdiarioId),

    // check("token").custom(validarJWT),
  ],
  procesodiarioHttp.procesodiarioestadoPut
);

export default router;
