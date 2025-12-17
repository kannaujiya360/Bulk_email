// src/services/scheduler.service.ts
import { ScheduledJob } from '../models/ScheduledJob'
import { processBatchJob } from './batch.service'

export async function runScheduledJobs() {
  const jobs = await ScheduledJob.find({ status: 'scheduled', scheduledTime: { $lte: new Date() } })
  for (const job of jobs) {
    job.status = 'running'
    await job.save()
    await processBatchJob(job._id)
  }
}
