//acá haremos los llamados a la base de datos de MySql
import { pool } from "../database/BBDD.js";

// In src/services/workoutModel.js
const ProductModel = {
  getAllProducts: async () => {
            const [rows] = await pool.query("SELECT * FROM products");
            return rows;     
  },
  getProduct: async (product_Id) => {
            const [rows] = await pool.query("SELECT * FROM products WHERE product_id = ?", [product_Id]);
            return rows;
   
  },
  createNewProduct: async (productData) => {
        console.log (productData)
            const [result] = await pool.query("INSERT INTO products SET ?", [productData]);
            return result;
    },
  updateOneProduct: async (productId, productData) => {
          const { name, price, category_id, description } = productData;
          if (!name || !price || !category_id || !description) {
            throw new Error("name, price y category_id son campos obligatorios");
          }
          const query = 'UPDATE products SET name = ?, price = ?, category_id = ?, description = ? WHERE product_id = ?';
          const [result] = await pool.query(query, [name, price, category_id, description, productId]);
          console.log(result);
          return result;
      },
  deleteOneProduct: async (productId) => {
          const query = 'DELETE FROM products WHERE product_id = ?';
          const [result] = await pool.query(query, [productId]);
          return result;
      },
  updateStock: async (product_id, is_available) => {
          const query = 'UPDATE products SET is_available = ? WHERE product_id = ?';
          const [result] = await pool.query(query, [is_available, product_id]);
          return result;
      },
};

export { ProductModel }