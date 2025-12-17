import 'dotenv/config'

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  FRONTEND_URL: process.env.FRONTEND_URL!,
  SESSION_SECRET: process.env.SESSION_SECRET!,
  UPLOAD_DIR: process.env.UPLOAD_DIR || 'uploads',
  LOG_DIR: process.env.LOG_DIR || 'logs',
  MONGO_URI: process.env.MONGO_URI!,
  DEFAULT_FROM_EMAIL: process.env.DEFAULT_FROM_EMAIL!,
  DEFAULT_FROM_NAME: process.env.DEFAULT_FROM_NAME!
}
