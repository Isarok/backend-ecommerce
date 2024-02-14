
import productController from "../../controllers/productController.js";
import { Router } from "express";
import { ProductModel } from "../../model/productModel.js";


const v1ProductRouter = Router();

v1ProductRouter
    .get("/", productController.getAllProducts)
    .get("/:productId", productController.getProduct)
    .post("/", productController.createNewProduct)
    .patch("/:productId", productController.updateOneProduct)
    .delete("/:productId", productController.deleteOneProduct)

export { v1ProductRouter };