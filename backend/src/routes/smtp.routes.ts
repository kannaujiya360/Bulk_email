// src/routes/smtp.routes.ts
import { Hono } from 'hono'
import { SmtpConfig } from '../models/SmtpConfig'
import { requireAuth } from '../middleware/auth'

const router = new Hono()

// Get all configs
router.get('/', requireAuth, async (c) => {
  const userId = c.get('userId')
  const configs = await SmtpConfig.find({ userId })
  return c.json(configs)
})

// Create config
router.post('/', requireAuth, async (c) => {
  const userId = c.get('userId')
  const data = await c.req.json()
  const config = new SmtpConfig({ ...data, userId })
  await config.save()
  return c.json(config)
})

// Update config
router.put('/:id', requireAuth, async (c) => {
  const userId = c.get('userId')
  const { id } = c.req.param()
  const data = await c.req.json()
  const updated = await SmtpConfig.findOneAndUpdate({ _id: id, userId }, data, { new: true })
  return c.json(updated)
})

// Delete config
router.delete('/:id', requireAuth, async (c) => {
  const userId = c.get('userId')
  const { id } = c.req.param()
  await SmtpConfig.findOneAndDelete({ _id: id, userId })
  return c.json({ message: 'Deleted' })
})

export default router
