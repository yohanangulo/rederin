import { Router } from 'express'
import { getAllUsers, createUser, deleteUser } from '../controllers/user.controller'
const router = Router()

router.get('/api/users', getAllUsers)
router.post('/api/users', createUser)
router.delete('/api/users/:userId', deleteUser)

export default router