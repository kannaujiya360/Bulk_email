// src/services/batch.service.ts
import { ScheduledJob } from '../models/ScheduledJob'
import { EmailLog } from '../models/EmailLog'
import { sendEmail } from './email.service'

export async function processBatchJob(jobId: string) {
  const job = await ScheduledJob.findById(jobId)
  if (!job) throw new Error('Job not found')

  const emails = job.emailJob.contacts // assume contacts array
  for (const contact of emails) {
    try {
      await sendEmail(job.emailJob.smtpId, contact.email, job.subject, job.emailJob.html)
      await EmailLog.create({ userId: job.userId, jobId: job._id, email: contact.email, status: 'sent' })
    } catch (err: any) {
      await EmailLog.create({ userId: job.userId, jobId: job._id, email: contact.email, status: 'failed', error: err.message })
    }
  }

  job.status = 'completed'
  await job.save()
}
