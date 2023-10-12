import { ReactNode } from 'react'
import { TRegisterData } from '../../pages/RegisterPage/validator'

export interface IUser {
  id: string
  full_name: string
  email: string
  telephone: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export interface IUserProvider {
  getUser: (id: string) => Promise<IUser>
  sigIn: (formData: TRegisterData) => Promise<void>
}

export interface IUserProviderProps {
  children: ReactNode
}
