import User from '../models/user.schema'
import { Request, Response } from 'express'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    
    res.json(users)
  } catch (error) {
    console.error(error)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = new User({
      username: 'yohan Angulo'
    })

    const savedUser = await newUser.save()

    res.json(savedUser)
  } catch (error) {
    res.status(500)
    console.error(error)
  }
}

export const deleteUser = (req: Request, res: Response) => {
  try {

  } catch (error) {
    res.status(500)
  }
}