import pool from '../db.js'; // Importa la conexión a la base de datos

const RolesModel = {
  // Otras funciones del modelo...

  getAllRoles: async () => {
    try {
      const query = 'SELECT * FROM roles';
      const [roles] = await pool.query(query);
      return roles;
    } catch (error) {
      console.error("Error al obtener los roles:", error);
      throw new Error("Ocurrió un error al obtener los roles");
    }
  }
};

export default RolesModel;