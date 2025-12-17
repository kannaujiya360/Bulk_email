// src/routes/auth.routes.ts
import { Hono } from 'hono'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import { User } from '../models/User'
import { env } from '../env'
import { requireAuth } from '../middleware/auth'

const router = new Hono()

// Register
router.post('/register', async (c) => {
  const { name, email, password } = await c.req.json()
  const existing = await User.findOne({ email })
  if (existing) return c.json({ error: 'Email already exists' }, 400)

  // Hash password with Argon2
  const passwordHash = await argon2.hash(password)
  const user = new User({ name, email, passwordHash })
  await user.save()

  return c.json({ message: 'User registered', userId: user._id })
})

// Login
router.post('/login', async (c) => {
  const { email, password } = await c.req.json()
  const user = await User.findOne({ email })
  if (!user) return c.json({ error: 'Invalid credentials' }, 401)

  // Verify password with Argon2
  const valid = await argon2.verify(user.passwordHash, password)
  if (!valid) return c.json({ error: 'Invalid credentials' }, 401)

  const token = jwt.sign(
    { userId: user._id },
    env.SESSION_SECRET,
    { expiresIn: env.SESSION_EXPIRES_IN }
  )

  c.header('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=604800`) // 7 days

  return c.json({ message: 'Login successful', token })
})

// Logout
router.post('/logout', requireAuth, async (c) => {
  c.header('Set-Cookie', `token=; HttpOnly; Path=/; Max-Age=0`)
  return c.json({ message: 'Logged out' })
})

// Current user
router.get('/me', requireAuth, async (c) => {
  const userId = c.get('userId')
  const user = await User.findById(userId).select('-passwordHash')
  if (!user) return c.json({ error: 'User not found' }, 404)
  return c.json(user)
})

export default router
