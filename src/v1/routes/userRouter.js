import userController from '../../controllers/userController.js';
import { Router } from 'express';

const v1UserRouter = Router();

v1UserRouter
  .get('/', userController.getAllUsers)
  .get('/:id', userController.getUserById)
  .post('/', userController.createUser)
  .put('/:updateRole', userController.updateUserRole)
  .delete('/:id', userController.deleteUser)
  .post('/login', userController.loginUser);

export { v1UserRouter }