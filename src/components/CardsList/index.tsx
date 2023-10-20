import { StyledCardsList } from './style'
import { useContactsContext } from '../../hooks/useContacts'
import { useEffect, useState } from 'react'
import { IContact } from '../../providers/ContactsProvider/types'
import { Card } from './Card'

export const CardsList = () => {
  const { getContacts, reloadList } = useContactsContext()

  const [contactsList, setContactsList] = useState<IContact[]>([])

  useEffect(() => {
    getContacts().then(setContactsList)
  }, [reloadList])

  return (
    <StyledCardsList>
      {contactsList &&
        contactsList.map((contact) => (
          <Card contact={contact} key={contact.id} />
        ))}
    </StyledCardsList>
  )
}
