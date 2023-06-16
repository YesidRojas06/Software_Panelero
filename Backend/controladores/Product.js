import product from "../../models/Inventory/product.js"


const ProductsHttp = {
    ProductPost: async (req, res) => {
    console.log(req.body);
    const {amount, expense_name, administrator, Finca, description,   PAYMENT_METHOD, cost_value, total  } = req.body;
    const productAdd = new product({ amount, expense_name, administrator, Finca, description,   PAYMENT_METHOD, cost_value, total  });
    await productAdd.save();
    res.json("saved Product");
  },


// listar todos los gastos
ProductAllGet: async ( req, res) =>{
const pruductList= await product.find().populate("PAYMENT_METHOD").populate("Finca");
res.json(pruductList);
},

// modificar por id

ProductPutId: async (req, res) => {
const { id } = req.params;
const { amount, expense_name, administrator, Finca, description,   PAYMENT_METHOD, cost_value, total } = req.body;
const productUpdate = await product.findByIdAndUpdate(id, {
  amount, expense_name, administrator, Finca, description,   PAYMENT_METHOD, cost_value, total
});
await productUpdate.save();
res.json("product actualizada");
},


//edit state for id
ProductPutState: async (req, res) => {
const { id } = req.params;
const { state } = req.body;
const ProductUpdateState = await product.findByIdAndUpdate(id, {
  state: state,
});
await ProductUpdateState.save();
res.json("Estado actualizado");
},

};


export default ProductsHttp;