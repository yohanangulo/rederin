import { Router } from 'express'
import { getAllUsers, createUser, deleteUser } from '../controllers/user.controller'
const router = Router()

router.get('/users', getAllUsers)
router.post('/users', createUser)
router.delete('/users/:userId', deleteUser)

export default router