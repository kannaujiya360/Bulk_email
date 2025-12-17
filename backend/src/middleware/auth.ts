// src/middleware/auth.ts
import { Context, Next } from 'hono'
import { env } from '../env'
import jwt from 'jsonwebtoken'

export const requireAuth = async (c: Context, next: Next) => {
  try {
    const token = c.req.headers.get('authorization')?.split(' ')[1] || c.req.cookie('token')

    if (!token) {
      return c.json({ error: 'Unauthorized' }, 401)
    }

    const decoded = jwt.verify(token, env.SESSION_SECRET) as { userId: string }
    c.set('userId', decoded.userId)
    await next()
  } catch (err) {
    return c.json({ error: 'Unauthorized' }, 401)
  }
}
