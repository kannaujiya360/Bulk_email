// src/routes/dashboard.routes.ts
import { Hono } from 'hono'
import { requireAuth } from '../middleware/auth'

const router = new Hono()

router.get('/stats', requireAuth, async (c) => {
  return c.json({ totalSent: 100, successRate: 95 })
})

router.get('/poll-status', requireAuth, async (c) => {
  return c.json({ polling: true })
})

router.get('/scheduled-jobs', requireAuth, async (c) => {
  return c.json([{ jobId: '123', status: 'running' }])
})

export default router
