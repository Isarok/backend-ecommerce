// llama al servicio toda la logica asociada a express
import { ProductModel } from "../model/productModel.js";


const ProductController = {
    getAllProducts: async ( _req, res) => {
        const allProducts = await ProductModel.getAllProducts();
         res.send(allProducts);
    },
    getProduct: async (_req, res) => {
        const product = await ProductModel.getProduct(_req.params.product_Id);
        res.send(`Get one product ${_req.params.product_Id}`);
    },
    createNewProduct: async (_req, res) => {
        const createdProduct = await ProductModel.createNewProduct(_req.params.productId);
        res.send(`Create one product ${_req.params.productId}`);
    },
    updateOneProduct: async (res, _req) => {
        const updatedProduct = await ProductModel.updateOneProduct(_req.params.productId);
        res.send(`Update product ${_req.params.productId}`);;
    },
    deleteOneProduct: (res, _req) => {
        ProductModel.deleteOneProduct(_req.params.productId);
        res.send(`Delete product ${_req.params.productId}`);
    }
}

  
export default ProductController 