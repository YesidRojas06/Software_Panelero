import modeloeps from "../modelos/eps.js";

const epshttp= {
  
  epsGet:async (req, res) => {
    const { nombre, n_linea } = req.params;
    const eps = await modeloeps.findById(nombre, n_linea);
    res.json({
      eps,
    });
  },

  epsPost:async (req, res) => {
    const { nombre, n_linea } = req.body;
    const eps = new modeloeps({ 
      nombre, n_linea 
    });
  
    await eps.save();
    res.json({
      eps,
    });
  },

  epsSearchForTextGet:async (req, res) => {
    const { nombre, n_linea } = req.query;
    const eps = await modeloeps.find({ nombre, n_linea });
    res.json({
      eps,
    });
  },

  epsDelete:async (req, res) => {
    const { nombre, n_linea } = req.query;
    const eps = await modeloeps.findOneAndDelete({
        nombre, n_linea
    });
    res.json({ "Eps eliminada": eps });
  }
}

export default epshttp