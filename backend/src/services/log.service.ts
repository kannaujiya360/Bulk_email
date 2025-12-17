// src/services/log.service.ts
import { EmailLog } from '../models/EmailLog'

export async function getLogs(userId: string) {
  return await EmailLog.find({ userId })
}

export async function clearLogs(userId: string) {
  return await EmailLog.deleteMany({ userId })
}
