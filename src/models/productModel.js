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
    getProduct: async (product_Id) => {
        try {
            const [rows] = await pool.query("SELECT * FROM products WHERE product_id = ?", [product_Id]);
            return rows;
        } catch (error) {
            console.error("Error al obtener el producto:", error);
            throw new Error("Ocurrió un error al obtener el producto");
        }
    },
    
    createNewProduct: async (productData) => {
        console.log (productData)
        try {
            const [result] = await pool.query("INSERT INTO products SET ?", [productData]);
            return result;
        } catch (error) {
            console.error("Error al crear un nuevo producto:", error);
            throw new Error("Ocurrió un error al crear un nuevo producto");
        }
    },

    updateOneProduct: async (productId, productData) => {
        try {
          const { name, price, category_id } = productData;
          if (!name || !price || !category_id) {
            throw new Error("name, price y category_id son campos obligatorios");
          }
          const query = 'UPDATE products SET name = ?, price = ?, category_id = ? WHERE product_id = ?';
          const [result] = await pool.query(query, [name, price, category_id, productId]);
          console.log(result);
          return result;
        } catch (error) {
          console.error("Error al actualizar el producto:", error);
          throw new Error("Ocurrió un error al actualizar el producto");
        }
      },
    deleteOneProduct: () => {
        return;
    }
};

export { ProductModel }