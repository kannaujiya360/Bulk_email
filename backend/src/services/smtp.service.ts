// src/services/smtp.service.ts
import { SmtpConfig } from '../models/SmtpConfig'
import nodemailer from 'nodemailer'

export async function testSMTP(id: string) {
  const config = await SmtpConfig.findById(id)
  if (!config) throw new Error('SMTP config not found')

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
  })

  await transporter.verify()
  return true
}
