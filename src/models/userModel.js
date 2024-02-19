import { pool } from "../database/BBDD.js";

const UserModel = {
  getAllUsers: async () => {
      const query = 'SELECT * FROM users';
      const [users] = await pool.query(query);
      return users;
   
  },
  getUserById: async (userId) => {
      const query = 'SELECT * FROM users WHERE user_id = ?';
      const [user] = await pool.query(query, [userId]);
      return user[0];
  },
  createUser: async (userData) => {
    const { name, email, password, role_id, is_active} = userData;
    if (!name || !email || !password || !role_id || !is_active) {
      throw new Error("Los campos name, email, password y role_id son obligatorios");
    }
    const [result] = await pool.query('INSERT INTO users SET ?', [userData]);
    return result.insertId;
  },
  updateUserRole: async (userId, roleId) => {
      const query = 'UPDATE users SET role_id = ? WHERE user_id = ?';
      const result = await pool.query(query, [roleId, userId]);
      return result.affectedRows > 0;
    
  },
  deleteUser: async (userId) => {
      const query = 'DELETE FROM users WHERE user_id = ?';
      const result = await pool.query(query, [userId]);
      return result.affectedRows > 0;
  },
  loginUser: async (email, password, is_active, name, role_id) => {
    const [result, metadata] = await pool.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}' AND is_active = ${is_active} AND name = '${name}' AND role_id = ${role_id}`);
    return result
  }
};

export { UserModel };