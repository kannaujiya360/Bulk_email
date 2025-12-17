// src/utils/validation.ts
import { z } from 'zod'

// Example: user registration
export const registerSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
})

export function validate(schema: any, data: any) {
  try {
    return { success: true, data: schema.parse(data) }
  } catch (err: any) {
    return { success: false, error: err.errors || err.message }
  }
}
