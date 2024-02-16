import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', UserController.registerUser);
// Otras rutas para iniciar sesión, cerrar sesión, etc.

export default router;