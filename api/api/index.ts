import app from '../src/app'
import config from '../src/config/config'
import { connectDB } from '../src/config/database'

(async function main() {
  await connectDB()
  app.listen(config.PORT)
  console.log('server on port', config.PORT)
})()

export default app