import { useContactsContext } from '../../../hooks/useContacts'
import { IContact } from '../../../providers/ContactsProvider/types'
import { StyledButtonContainer } from '../../../styles/components/buttonContainer'

interface IContactCardProps {
  contact: IContact
  toggleModal: () => void
}
export const ModalDeleteContact = ({
  contact,
  toggleModal
}: IContactCardProps) => {
  const { deleteContact, setReloadList } = useContactsContext()

  const handleContactDeletion = async () => {
    await deleteContact(contact.id)
    setReloadList((prevState) => !prevState)
    toggleModal()
  }

  return (
    <StyledButtonContainer>
      <button id='button-return' onClick={toggleModal}>
        Cancel
      </button>
      <button onClick={handleContactDeletion} type='submit' id='button-submit'>
        Delete
      </button>
    </StyledButtonContainer>
  )
}
