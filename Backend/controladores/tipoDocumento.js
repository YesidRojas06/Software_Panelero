import modelostipoDocumento from "../modelos/tipoDocumento.js"

const tDocumentohttp={
    tDocumentoget: async (req, res) => {
        const tipoDocumento = await modelostipoDocumento.find();
        res.json({ tipoDocumentos: tipoDocumento });
      },
    
      tDocumentopost: async (req, res) => {
        const { nombreT, siglas } = req.body;
        const tipoDocumento = new modelostipoDocumento({nombreT, siglas});
        await tipoDocumento.save();
        res.send("Tipo de documento cerrados");
      },
    
      tDocumentoput: async (req, res) => {
        const { nombreT, siglas } = req.body;
        const tipoDocumento = await modelostipoDocumento.findByIdAndUpdate({nombreT, siglas});
        await tipoDocumento.save();
        res.send(tipoDocumento);
      },

      tDocumentoInactivoput: async (req, res) => {
        console.log(req.params);
        const { id } = req.params;
        const tipoDocumento = await modeloeps.findByIdAndUpdate(id, { estado: 0 });
        res.send(tipoDocumento);
      },
    
      tDocumentoActivoput: async (req, res) => {
        console.log(req.params);
        const { id } = req.params;
        const tipoDocumento = await modeloeps.findByIdAndUpdate(id, { estado: 1 });
        res.send(tipoDocumento);
      },
}

export default tDocumentohttp