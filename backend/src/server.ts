// src/server.ts
import app from './app'
import { connectDB } from './config/db'
import { env } from './env'

const PORT = env.PORT

connectDB().then(() => {
  app.listen({ port: PORT })
  console.log(`🚀 Server running on port ${PORT}`)
})
