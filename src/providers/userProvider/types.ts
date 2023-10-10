import { ReactNode } from 'react'

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
}

export interface IUserProviderProps {
  children: ReactNode
}
