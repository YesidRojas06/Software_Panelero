import Usuario from "../modelos/usuarios.js";

const helpersUsuarios = {
  existeUsuarioById: async (id) => {
    const existe = await Usuario.findById(id);

    if (!existe) {
      throw new Error(`El id no existe ${id}`);
    }
  },

  existeEmail: async (req, res, next) => {
    console.log(req.body);
      const existe = await Usuario.findOne({ correo: req.body.correo });

      if (existe) {
        return res.status(401).json({ msg: `El correo ya está registrado` });
        //throw new Error(`El email ya está registrado`)
      }
    // };
  },
};
export default helpersUsuarios;
