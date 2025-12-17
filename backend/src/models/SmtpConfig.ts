// src/models/SmtpConfig.ts
import mongoose, { Schema, Document } from 'mongoose'
import { SmtpConfig as SmtpConfigType } from '../types'

export interface SmtpConfigDoc extends SmtpConfigType, Document {}

const SmtpConfigSchema = new Schema<SmtpConfigDoc>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  host: { type: String, required: true },
  port: { type: Number, required: true },
  secure: { type: Boolean, default: false },
  user: { type: String, required: true },
  pass: { type: String, required: true },
  fromEmail: { type: String, required: true },
  fromName: { type: String },
  isDefault: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export const SmtpConfig = mongoose.model<SmtpConfigDoc>('SmtpConfig', SmtpConfigSchema)
