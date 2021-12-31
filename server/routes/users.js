import express from 'express'


const router = express.Router();

import {getUsers, createUser, deleteUser, getUsersBySearch, findUserById, updateUser} from '../controllers/users.js';

router.get('/search', getUsersBySearch);
router.get('/:id', findUserById);
router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updateUser )
router.delete('/:id', deleteUser);


export default router;