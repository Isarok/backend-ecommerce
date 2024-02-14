//acá haremos los llamados a la base de datos de MySql
import {pool} from "../database/BBDD.js";
// In src/services/workoutService.js
const ProductModel = {
    getAllProducts: async () => {
        const [rows] = await pool.query("SELECT * FROM products");
        return rows;
    },
    getProduct: async () => {
        const [rows] = await pool.query("SELECT * FROM products");
        return rows;
    },
    createNewProduct: async () => {
        return;[rows] = await pool.query("INSERT INTO products SET ?", [req.body]);
    },
    updateOneProduct: () => {
        return;
    },
    deleteOneProduct: () => {
        return;
    }
};

export { ProductModel }