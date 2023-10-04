import { ReactNode } from 'react'

export interface IContact {
  id: string
  full_name: string
  email: string
  telephone: string
  createdAt: string
  updatedAt: string
}

export interface IContactsProvider {
  getContacts: () => Promise<IContact[]>
}

export interface IContactProviderProps {
  children: ReactNode
}
