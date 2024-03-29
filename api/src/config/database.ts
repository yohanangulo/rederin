import mongoose from 'mongoose'
import config from './config'


export async function connectDB() {
  try {
    const db = await mongoose.connect(config.MONGODB_URI)
    console.log('Database is connected to', db.connection.name)
  } catch (error) {
    console.error(error)
  }
}