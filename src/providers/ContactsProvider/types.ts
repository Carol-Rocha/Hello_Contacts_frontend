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

export interface IContactsProvider {
  getContacts: () => Promise<IContact[]>
  createContact: (contactData: TContactRequest) => Promise<TContactResponse>
}

export interface IContactProviderProps {
  children: ReactNode
}
