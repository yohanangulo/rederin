import User from '../models/user.schema'
import { Request, Response } from 'express'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find()

    res.status(200).json(users)
  } catch (error) {
    console.error(error)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    // console.log('este es el body', req.body)

    // const { data }: { data: string } = req.body

    // check if this is a new pppoe secret added
    // if (!data.includes('ppp') || !data.includes('secret') || !data.includes('added')) {
    //   return res.status(400).send('Invalid entry')
    // }

    // find user between angle brackets
    // const matches = data.match(/<([^>]+)>/)

    // check if matches were found
    // if (matches == null) {
    //   return res.status(400).send('Invalid entry')
    // }

    // extract matches
    // const user = matches[1]

    const newUser = new User({ username: "success "})

    const savedUser = await newUser.save()

    res.json(savedUser)

  } catch (error: any) {
    res.status(500).send('An erro has ocurred: ' + error.message)
    console.error(error)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params

    const userDeleted = await User.findByIdAndDelete(userId)

    if (!userDeleted) {
      return res.status(404).send('User not found')
    }

    res.send('user deleted successfully')
  } catch (error) {
    res.status(500).send('An error has ocurred')
  }
}
