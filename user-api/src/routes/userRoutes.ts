import { Router } from 'express';
import { createUser, getAllUsers, getUser, loginUser } from '../controllers/userController';

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/:id', getUser);

export default router;