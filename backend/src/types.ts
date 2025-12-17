// src/types.ts

export interface User {
  _id?: string
  name: string
  email: string
  passwordHash: string
  createdAt?: Date
  lastLogin?: Date
  isActive?: boolean
}

export interface Session {
  _id?: string
  userId: string
  token: string
  expiresAt: Date
  createdAt?: Date
}

export interface SmtpConfig {
  _id?: string
  userId: string
  name: string
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  fromEmail: string
  fromName?: string
  isDefault?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface ScheduledJob {
  _id?: string
  userId: string
  emailJob: any // JSON object for emails
  batchConfig?: any
  scheduledTime: Date
  notifyEmail?: string
  notifyBrowser?: boolean
  status?: string
  createdAt?: Date
  startedAt?: Date
  completedAt?: Date
  contactCount?: number
  subject?: string
  useBatch?: boolean
  configName?: string
}

export interface EmailLog {
  _id?: string
  userId: string
  jobId: string
  email: string
  status: 'sent' | 'failed'
  error?: string
  sentAt?: Date
}
