import { ProductModel } from "../model/productModel.js";


const ProductController = {
    getAllProducts: async ( _req, res) => {
        const allProducts = await ProductModel.getAllProducts();
         res.send(allProducts);
    },
    getProduct: async (_req, res) => {
        const product = await ProductModel.getProduct(req.params.productId);
        res.send(`Get one product ${_req.params.productId}`);
    },
    createNewProduct: async (_req, res) => {
        const createdProduct = await ProductModel.createNewProduct(req.params.productId);
        res.send(`Create one product ${_req.params.productId}`);
    },
    updateOneProduct: (res, req) => {
        const updatedProduct = ProductModel.updateOneProduct(req.params.productId);
        res.send(`Update product ${req.params.productId}`);;
    },
    deleteOneProduct: (res, req) => {
        ProductModel.deleteOneProduct(req.params.productId);
        res.send(`Delete product ${req.params.productId}`);
    }
}

  
export default ProductController 