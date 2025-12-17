// src/config/cookie.ts
import { env } from '../env'

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  path: '/'
}
