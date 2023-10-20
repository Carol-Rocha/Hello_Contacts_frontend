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
  const { deleteContact } = useContactsContext()

  const handleContactDeletion = () => {
    deleteContact(contact.id)
    toggleModal()
  }

  return (
    <StyledButtonContainer>
      <button onClick={toggleModal}>Cancel</button>
      <button onClick={handleContactDeletion} type='submit' id='button-submit'>
        Delete
      </button>
    </StyledButtonContainer>
  )
}
