import { ReactNode } from 'react'
import { TRegisterData } from '../../pages/RegisterPage/validator'

export type IUser = {
  id: string
  full_name: string
  email: string
  telephone: string
  createdAt: string
  updatedAt: string
  deletedAt: string | null
}

export type TUpdateUser = {
  full_name?: string | null
  email?: string | null
  telephone?: string | null
}

export interface IUserProvider {
  user: IUser | undefined
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
  getUser: (id: string) => Promise<IUser>
  sigIn: (formData: TRegisterData) => Promise<void>
  updateUser: (formData: TUpdateUser, id: string) => Promise<IUser>
}

export interface IUserProviderProps {
  children: ReactNode
}
