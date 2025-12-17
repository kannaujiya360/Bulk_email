// src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose'
import { User as UserType } from '../types'

export interface UserDoc extends UserType, Document {}

const UserSchema = new Schema<UserDoc>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
  isActive: { type: Boolean, default: true },
})

export const User = mongoose.model<UserDoc>('User', UserSchema)
