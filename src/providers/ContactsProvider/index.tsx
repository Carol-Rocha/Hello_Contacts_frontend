import { createContext, useState } from 'react'
import {
  IContact,
  IContactProviderProps,
  IContactsProvider,
  TContactRequest,
  TUpdateContact
} from './types'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

export const contactsContext = createContext({} as IContactsProvider)

export const ContactsProvider = ({ children }: IContactProviderProps) => {
  const [contacts, setContacts] = useState<IContact[]>([])
  const [reloadList, setReloadList] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string | undefined>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filter, setFilter] = useState('')

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
    } catch (error: any) {
      toast.warning(error.response.data.message)
    }
  }

  const getContacts = async (
    searchTerm: string | undefined,
    page: number = 1,
    filter: string
  ) => {
    const token = localStorage.getItem('hello-contacts:token')

    try {
      const response = await api.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          searchBy: searchTerm,
          page: String(page),
          filter: filter
        }
      })

      setContacts(response.data.contacts)

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

  const value = {
    contacts,
    setContacts,
    filter,
    setFilter,
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    reloadList,
    setReloadList,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage
  }

  return (
    <contactsContext.Provider value={value}>
      {children}
    </contactsContext.Provider>
  )
}
