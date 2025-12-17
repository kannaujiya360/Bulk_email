// src/app.ts
import { Hono } from 'hono'
import cors from 'cors'
import { corsOptions } from './config/cors'

import authRoutes from './routes/auth.routes'
import smtpRoutes from './routes/smtp.routes'
import sendRoutes from './routes/send.routes'
import dashboardRoutes from './routes/dashboard.routes'
import reportRoutes from './routes/report.routes'
import scheduleRoutes from './routes/schedule.routes'

const app = new Hono()

// Global CORS middleware
app.use('*', cors(corsOptions))

// Health check
app.get('/', (c) => c.json({ message: 'Backend is running' }))

// Mount API routes
app.route('/auth', authRoutes)
app.route('/config/smtp', smtpRoutes)
app.route('/send', sendRoutes)
app.route('/dashboard', dashboardRoutes)
app.route('/report', reportRoutes)
app.route('/schedule', scheduleRoutes)

export default app
