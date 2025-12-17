// src/models/BatchJob.ts
import mongoose, { Schema, Document } from 'mongoose'

export interface BatchJobDoc extends Document {
  scheduledJobId: Schema.Types.ObjectId
  batchNumber: number
  status: 'pending' | 'running' | 'completed' | 'failed'
  sentCount: number
  failedCount: number
  startedAt?: Date
  completedAt?: Date
}

const BatchJobSchema = new Schema<BatchJobDoc>({
  scheduledJobId: { type: Schema.Types.ObjectId, ref: 'ScheduledJob', required: true },
  batchNumber: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'running', 'completed', 'failed'], default: 'pending' },
  sentCount: { type: Number, default: 0 },
  failedCount: { type: Number, default: 0 },
  startedAt: { type: Date },
  completedAt: { type: Date },
})

export const BatchJob = mongoose.model<BatchJobDoc>('BatchJob', BatchJobSchema)
