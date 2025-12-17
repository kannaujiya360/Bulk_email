// src/services/user.service.ts
import { User } from '../models/User'

export async function getUserById(id: string) {
  return await User.findById(id).select('-passwordHash')
}

export async function getAllUsers() {
  return await User.find().select('-passwordHash')
}
