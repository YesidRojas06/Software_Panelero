import modelostipoDocumento from "../modelos/tipoDocumento.js"

const tipoDocumentohttp={

  tipoDocumentoget: async (req, res) => {
        const tipoDocumento = await modelostipoDocumento.find();
        res.json({ 
          tipoDocumento
        });
      },
    
      tipoDocumentoPost:async (req, res) => {
        const { nombreT, siglas } = req.body;
        const tipoDocumento = new modelostipoDocumento({ 
          nombreT,
          siglas
        });
      
        await tipoDocumento.save();
        res.json({
          tipoDocumento
        });
      },

      tipoDocumentoSearchForTextGet:async (req, res) => {
        const { nombreT, siglas } = req.query;
        const tipoDocumento = await modelostipoDocumento.find({ 
          nombreT, siglas });
        res.json({
          tipoDocumento,
        });
      },

    
      tipoDocumentoput: async (req, res) => {
        const { nombreT, siglas } = req.body;
    
        console.log(req.body);
        const { id } = req.params;
        const tipoDocumento = await modelostipoDocumento.findByIdAndUpdate(id, {
          nombreT,
           siglas
          
        });
        await tipoDocumento.save();
        res.send(tipoDocumento);
      },



      tipoDocumentoInactivoput: async (req, res) => {
        console.log(req.params);
        const { id } = req.params;
        const tipoDocumento = await modelostipoDocumento.findByIdAndUpdate(id, { estado: 0 });
        res.send(tipoDocumento);
      },
    
      tipoDocumentoActivoput: async (req, res) => {
        console.log(req.params);
        const { id } = req.params;
        const tipoDocumento = await modelostipoDocumento.findByIdAndUpdate(id, { estado: 1 });
        res.send(tipoDocumento);
      },
}

export default tipoDocumentohttp;