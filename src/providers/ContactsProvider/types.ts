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
  reloadList: boolean
  setReloadList: React.Dispatch<React.SetStateAction<boolean>>
  getContacts: () => Promise<IContact[]>
  createContact: (contactData: TContactRequest) => Promise<TContactResponse>
  updateContact: (contactData: TUpdateContact, id: string) => Promise<IContact>
  deleteContact: (id: string) => Promise<void>
}

export interface IContactProviderProps {
  children: ReactNode
}
