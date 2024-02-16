
const UserController = {
    registerUser: async (req, res) => {
      try {
        const { username, email, password } = req.body;
        // Realiza validaciones de los datos del usuario si es necesario
        const userId = await UserModel.createUser({ username, email, password });
        res.json({ userId });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    // Otras funciones del controlador como loginUser, etc.
  };
  
  export default UserController;

