// src/routes/report.routes.ts
import { Hono } from 'hono'
import { requireAuth } from '../middleware/auth'

const router = new Hono()

router.get('/', requireAuth, async (c) => {
  return c.json([{ email: 'test@example.com', status: 'sent', sentAt: new Date() }])
})

router.get('/export/csv', requireAuth, async (c) => {
  return c.text('email,status,sentAt\nexample@test.com,sent,2025-12-17')
})

router.get('/export/json', requireAuth, async (c) => {
  return c.json([{ email: 'example@test.com', status: 'sent', sentAt: new Date() }])
})

router.delete('/clear', requireAuth, async (c) => {
  return c.json({ message: 'Logs cleared' })
})

export default router
