import app from './app'
import config from './config/config'
import { connectDB } from './config/database';

(async function main() {
  await connectDB()
  app.listen(config.PORT)
  console.log('server on port', config.PORT)
})()
