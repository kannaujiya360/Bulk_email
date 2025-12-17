// src/routes/index.ts
import { Hono } from 'hono'

const router = new Hono()

router.get('/', (c) => c.json({ message: 'Backend is running' }))

export default router
