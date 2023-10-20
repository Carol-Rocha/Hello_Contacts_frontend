import { ReactNode } from 'react'
import { IUser } from '../userProvider/types'

export type IContact = {
  id: string
  full_name: string
  email: string
  telephone: string
  createdAt: string
  updatedAt: string
}

export type TContactRequest = {
  full_name: string
  email: string
  telephone: string
}

export type TContactResponse = IContact & {
  client: IUser
}
export type TUpdateContact = {
  full_name?: string | null
  email?: string | null
  telephone?: string | null
}

export interface IContactsProvider {
  getContacts: () => Promise<IContact[]>
  createContact: (contactData: TContactRequest) => Promise<TContactResponse>
  updateContact: (contactData: TUpdateContact, id: string) => Promise<IContact>
}

export interface IContactProviderProps {
  children: ReactNode
}
