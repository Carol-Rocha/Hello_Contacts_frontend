import { createContext } from 'react'
import { IContactProviderProps, IContactsProvider } from './types'
import { api } from '../../services/api'

export const contactsContext = createContext({} as IContactsProvider)

export const ContactsProvider = ({ children }: IContactProviderProps) => {
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

  const value = { getContacts }

  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  )
}
