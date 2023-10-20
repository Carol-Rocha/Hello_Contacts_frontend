import { useForm } from 'react-hook-form'
import { useContactsContext } from '../../../hooks/useContacts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../Input'
import { IContact } from '../../../providers/ContactsProvider/types'
import { TUpdateContact, updateContactSchema } from './validator'
import { StyledButtonContainer } from '../../../styles/components/buttonContainer'

interface IContactCardProps {
  contact: IContact
  toggleModal: () => void
}

export const ModalEditContact = ({
  contact,
  toggleModal
}: IContactCardProps) => {
  const { updateContact } = useContactsContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TUpdateContact>({
    resolver: zodResolver(updateContactSchema)
  })

  return (
    <form
      onSubmit={handleSubmit((formData) =>
        updateContact(formData, contact.id).then(toggleModal)
      )}
    >
      <Input
        type='text'
        placeholder={contact.full_name}
        register={register('full_name', {
          value: contact.full_name
        })}
      />

      {errors.full_name ? (
        <p className='error-message'>{errors.full_name.message}</p>
      ) : null}
      <Input
        type='email'
        placeholder={contact.email}
        register={register('email', { value: contact.email })}
      />
      {errors.email ? (
        <p className='error-message'>{errors.email.message}</p>
      ) : null}
      <Input
        type='tel'
        placeholder={contact.telephone}
        register={register('telephone', {
          value: contact.telephone
        })}
      />
      {errors.telephone ? (
        <p className='error-message'>{errors.telephone.message}</p>
      ) : null}

      <StyledButtonContainer>
        <button onClick={toggleModal}>Cancel</button>

        <button type='submit' id='button-submit'>
          Save
        </button>
      </StyledButtonContainer>
    </form>
  )
}
