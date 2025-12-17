// src/services/email.service.ts
import nodemailer from 'nodemailer'
import { SmtpConfig } from '../models/SmtpConfig'

export async function sendEmail(smtpId: string, to: string, subject: string, html: string) {
  const smtp = await SmtpConfig.findById(smtpId)
  if (!smtp) throw new Error('SMTP config not found')

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: { user: smtp.user, pass: smtp.pass },
  })

  const info = await transporter.sendMail({
    from: `"${smtp.fromName}" <${smtp.fromEmail}>`,
    to,
    subject,
    html,
  })

  return info
}
