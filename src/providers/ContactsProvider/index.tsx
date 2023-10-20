import { createContext } from 'react'
import {
  IContactProviderProps,
  IContactsProvider,
  TContactRequest,
  TUpdateContact
} from './types'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

export const contactsContext = createContext({} as IContactsProvider)

export const ContactsProvider = ({ children }: IContactProviderProps) => {
  const createContact = async (contactData: TContactRequest) => {
    const token = localStorage.getItem('hello-contacts:token')
    try {
      const response = await api.post('/contacts', contactData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success('Contact created successfully!')
      return response.data
    } catch (error) {
      toast.warning('Oops! Something went wrong')
    }
  }

  const getContacts = async () => {
    const token = localStorage.getItem('hello-contacts:token')

    try {
      const response = await api.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  const updateContact = async (contactData: TUpdateContact, id: string) => {
    const token = localStorage.getItem('hello-contacts:token')
    try {
      const response = await api.patch(`/contacts/${id}`, contactData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success('Updated successfully!')
      return response.data
    } catch {
      toast.warning('Oops! Something went wrong')
    }
  }

  const deleteContact = async (id: string) => {
    try {
      await api.delete(`/contacts/${id}`)
      toast.success('Contact deleted successfully')
      return
    } catch {
      toast.warning('Oops! Something went wrong')
    }
  }

  const value = { getContacts, createContact, updateContact, deleteContact }

  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  )
}
