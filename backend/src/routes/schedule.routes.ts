// src/routes/schedule.routes.ts
import { Hono } from 'hono'
import { requireAuth } from '../middleware/auth'

const router = new Hono()

router.get('/jobs', requireAuth, async (c) => {
  return c.json([{ id: 'job1', status: 'scheduled' }])
})

router.get('/jobs/:id', requireAuth, async (c) => {
  const { id } = c.req.param()
  return c.json({ id, status: 'running' })
})

router.delete('/jobs/:id', requireAuth, async (c) => {
  return c.json({ message: 'Job cancelled' })
})

router.get('/status', requireAuth, async (c) => {
  return c.json({ scheduler: 'running' })
})

export default router
