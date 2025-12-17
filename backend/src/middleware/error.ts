// src/middleware/error.ts
import { Context, Next } from 'hono'

export const errorHandler = async (c: Context, next: Next) => {
  try {
    await next()
  } catch (err: any) {
    console.error('❌ Error:', err)
    return c.json({ error: err.message || 'Internal Server Error' }, err.status || 500)
  }
}
