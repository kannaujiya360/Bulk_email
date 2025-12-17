// src/routes/send.routes.ts
import { Hono } from 'hono'
import { requireAuth } from '../middleware/auth'

const router = new Hono()

router.post('/', requireAuth, async (c) => {
  // TODO: implement immediate/batch/scheduled email sending
  return c.json({ message: 'Send emails API' })
})

router.post('/preview', requireAuth, async (c) => {
  // TODO: generate email preview
  return c.json({ message: 'Preview email' })
})

router.post('/pause', requireAuth, async (c) => {
  return c.json({ message: 'Batch paused' })
})

router.post('/resume', requireAuth, async (c) => {
  return c.json({ message: 'Batch resumed' })
})

router.post('/cancel', requireAuth, async (c) => {
  return c.json({ message: 'Batch cancelled' })
})

export default router
