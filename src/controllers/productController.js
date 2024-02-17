// llama al servicio toda la logica asociada a express
import { ProductModel } from "../models/productModel.js";


const ProductController = {
    getAllProducts: async ( _req, res) => {
        const allProducts = await ProductModel.getAllProducts();
         res.send(allProducts);
    },
    getProduct: async (_req, res) => {
        try {
            const product = await ProductModel.getProduct(_req.params.product_Id);
            if (product.length > 0) {
                res.json(product[0]); // Enviar el primer producto encontrado como respuesta en formato JSON
            } else {
                res.status(404).send("Producto no encontrado"); // Enviar un mensaje si el producto no se encuentra
            }
        } catch (error) {
            console.error("Error al obtener el producto:", error);
            res.status(500).send("Ocurrió un error al obtener el producto");
        }
    },
    createNewProduct: async (req, res) => {
        try {
            const { body } = req;
    
            if (!body.name || !body.price || !body.category_id || !body.description) {
                return res.status(400).send("Faltan campos obligatorios");
            }
    
            const newProduct = {
                user_id : "1",
                is_available: "1",
                name: body.name || '', // Incluir el campo name incluso si está vacío
                description: body.description || '', // Incluir el campo description incluso si está vacío
                price: body.price || '', // Incluir el campo price incluso si está vacío
                category_id: body.category_id || '' // Incluir el campo category incluso si está vacío
            };
            
            const createdProduct = await ProductModel.createNewProduct(newProduct);
            console.log (createdProduct)
            res.status(201).json({ status: "OK", data: createdProduct });
        } catch (error) {
            console.error("Error al crear un nuevo producto:", error);
            res.status(500).send("Ocurrió un error al crear un nuevo producto");
        }
    },
    updateOneProduct: async (req, res) => {
        console.log(req.params.product_Id, req.body);
        try {
          const updatedProduct = await ProductModel.updateOneProduct(req.params.product_Id, req.body);
          res.json(updatedProduct);
        } catch (error) {
          console.error("Error al actualizar el producto:", error);
          res.status(500).send("Ocurrió un error al actualizar el producto");
        }
      },
    
      deleteOneProduct: async (req, res) => {
        try {
          await ProductModel.deleteOneProduct(req.params.product_Id);
          res.send(`Product ${req.params.product_Id} has been deleted`);
        } catch (error) {
          console.error("Error al borrar el producto:", error);
          res.status(500).send("Ocurrió un error al borrar el producto");
        }
      },
      updateStock: async (req, res) => {
        const { product_Id, is_available } = req.body;
        try {
          // Realizar la actualización del stock en el modelo
          await ProductModel.updateStock(product_Id, is_available);
      
          // Actualizar el campo "is_available" basado en el nuevo stock
          const isAvailable = is_available > 0; // Establecer is_available a true si el nuevo stock es mayor que 0
      
          // Lógica para actualizar el campo "is_available" en el modelo
          await ProductModel.updateStock(product_Id, isAvailable);
      
          res.json({ message: "Stock y disponibilidad actualizados correctamente" });
        } catch (error) {
          console.error("Error al actualizar el stock y la disponibilidad del producto:", error);
          res.status(500).json({ error: "Ocurrió un error al actualizar el stock y la disponibilidad del producto" });
        }
      
      }
}

  
export default ProductController 