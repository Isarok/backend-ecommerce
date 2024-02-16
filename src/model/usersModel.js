import pool from '../BBDD.js';

const UsersModel = {
  getAllUsers: async () => {
    try {
      const query = 'SELECT * FROM users';
      const [users] = await pool.query(query);
      return users;
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
      throw new Error("Ocurrió un error al obtener los usuarios");
    }
  },
  // Otras funciones del modelo como createUser, getUserById, etc.
};

export default UsersModel;