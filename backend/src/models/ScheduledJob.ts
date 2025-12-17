// src/models/ScheduledJob.ts
import mongoose, { Schema, Document } from 'mongoose'
import { ScheduledJob as ScheduledJobType } from '../types'

export interface ScheduledJobDoc extends ScheduledJobType, Document {}

const ScheduledJobSchema = new Schema<ScheduledJobDoc>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  emailJob: { type: Schema.Types.Mixed, required: true }, // JSON object
  batchConfig: { type: Schema.Types.Mixed },
  scheduledTime: { type: Date, required: true },
  notifyEmail: { type: String },
  notifyBrowser: { type: Boolean, default: false },
  status: { type: String, default: 'scheduled' },
  createdAt: { type: Date, default: Date.now },
  startedAt: { type: Date },
  completedAt: { type: Date },
  contactCount: { type: Number },
  subject: { type: String },
  useBatch: { type: Boolean, default: false },
  configName: { type: String },
})

export const ScheduledJob = mongoose.model<ScheduledJobDoc>('ScheduledJob', ScheduledJobSchema)
