import app from './app'
import { connectDB } from './database'
import config from './config'

;(async function main() {
  await connectDB()
  app.listen(config.PORT)
  console.log('server on port', config.PORT)
})()
