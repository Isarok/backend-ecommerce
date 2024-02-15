//acá haremos los llamados a la base de datos de MySql
import {pool} from "../database/BBDD.js";

// In src/services/workoutModel.js
const ProductModel = {
    getAllProducts: async () => {
        try {
            const [rows] = await pool.query("SELECT * FROM products");
            return rows;
        } catch (error) {
            // Aquí puedes manejar el error, ya sea registrándolo, enviando una respuesta específica, o realizando cualquier otra acción necesaria.
            console.error("Error al obtener todos los productos:", error);
            throw new Error("Ocurrió un error al obtener los productos");
        }
    },
    getProduct: async (productId) => {
        try {
            const [rows] = await pool.query("SELECT * FROM products WHERE product_id = ?", [productId]);
            return rows;
        } catch (error) {
            console.error("Error al obtener el producto:", error);
            throw new Error("Ocurrió un error al obtener el producto");
        }
    },
    createNewProduct: async () => {
        const [rows] = await pool.query("INSERT INTO products SET ?", [req.body]);
        return rows
    },
    updateOneProduct: () => {
        return;
    },
    deleteOneProduct: () => {
        return;
    }
};

export { ProductModel }