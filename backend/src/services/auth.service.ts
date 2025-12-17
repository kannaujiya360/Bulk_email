// src/services/auth.service.ts
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import { User } from '../models/User'
import { env } from '../env'

export async function registerUser(name: string, email: string, password: string) {
  // Check if user exists
  const existing = await User.findOne({ email })
  if (existing) throw new Error('Email already exists')

  // Hash password with Argon2
  const passwordHash = await argon2.hash(password)

  const user = new User({ name, email, passwordHash })
  await user.save()
  return user
}

export async function loginUser(email: string, password: string) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid credentials')

  // Verify password
  const valid = await argon2.verify(user.passwordHash, password)
  if (!valid) throw new Error('Invalid credentials')

  // Create JWT token
  const token = jwt.sign(
    { userId: user._id },
    env.SESSION_SECRET,
    { expiresIn: env.SESSION_EXPIRES_IN }
  )

  return { user, token }
}
