import { useContext } from 'react'
import { contactsContext } from '../providers/ContactsProvider'

export const useContactsContext = () => {
  const context = useContext(contactsContext)

  return context
}
