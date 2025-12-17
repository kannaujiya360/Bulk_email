// src/utils/token.ts
import jwt from 'jsonwebtoken'
import { env } from '../env'

export function generateToken(payload: object) {
  return jwt.sign(payload, env.SESSION_SECRET, { expiresIn: env.SESSION_EXPIRES_IN })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, env.SESSION_SECRET)
  } catch (err) {
    return null
  }
}
