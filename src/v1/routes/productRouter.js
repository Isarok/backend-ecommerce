
import productController from "../../controllers/productController.js";
import { Router } from "express";



const v1ProductRouter = Router();

v1ProductRouter
    .get("/", productController.getAllProducts)
    .get("/:product_Id", productController.getProduct)
    .post("/", productController.createNewProduct)
    .patch("/:product_Id", productController.updateOneProduct)
    .delete("/:product_Id", productController.deleteOneProduct)

export { v1ProductRouter };