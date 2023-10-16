import { createContext } from 'react'
import { IContactProviderProps, IContactsProvider } from './types'
import { api } from '../../services/api'
import { TCreateContact } from '../../components/Modal/ModalContainer/validators'
import { toast } from 'react-toastify'

export const contactsContext = createContext({} as IContactsProvider)

export const ContactsProvider = ({ children }: IContactProviderProps) => {
  const createContact = async (contactData: TCreateContact) => {
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

  const value = { getContacts, createContact }

  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  )
}
