import modeloeps from "../modelos/eps.js";

const epshttp= {
  
  epsGet: async (req, res) => {
    const eps = await modeloeps.find();
    res.json({
      eps
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
        nombre,
         n_linea
    });
    res.json({ "Eps eliminada": eps });
  },

  epsput: async (req, res) => {
    const { nombre, n_linea } = req.body;

    console.log(req.body);
    const { id } = req.params;
    const eps = await modeloeps.findByIdAndUpdate(id, {
      nombre,
       n_linea
      
    });
    await eps.save();
    res.send(eps);
  },

  epsInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const eps = await modeloeps.findByIdAndUpdate(id, { estado: 0 });
    res.send(eps);
  },

  epsActivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const eps = await modeloeps.findByIdAndUpdate(id, { estado: 1 });
    res.send(eps);
  },

}

export default epshttp