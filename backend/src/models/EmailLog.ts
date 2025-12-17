// src/models/EmailLog.ts
import mongoose, { Schema, Document } from 'mongoose'
import { EmailLog as EmailLogType } from '../types'

export interface EmailLogDoc extends EmailLogType, Document {}

const EmailLogSchema = new Schema<EmailLogDoc>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: Schema.Types.ObjectId, ref: 'ScheduledJob', required: true },
  email: { type: String, required: true },
  status: { type: String, enum: ['sent', 'failed'], required: true },
  error: { type: String },
  sentAt: { type: Date, default: Date.now },
})

export const EmailLog = mongoose.model<EmailLogDoc>('EmailLog', EmailLogSchema)
