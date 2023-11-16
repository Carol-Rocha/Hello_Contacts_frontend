import { useForm } from 'react-hook-form'
import { useContactsContext } from '../../../hooks/useContacts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../Input'
import { IContact } from '../../../providers/ContactsProvider/types'
import { TUpdateContact, updateContactSchema } from './validator'
import { StyledButtonContainer } from '../../../styles/components/buttonContainer'
import { formatPhoneNumber } from '../../../utils/format'

interface IContactCardProps {
  contact: IContact
  toggleModal: () => void
}

export const ModalEditContact = ({
  contact,
  toggleModal
}: IContactCardProps) => {
  const { updateContact, setReloadList } = useContactsContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TUpdateContact>({
    resolver: zodResolver(updateContactSchema),
    defaultValues: {
      full_name: contact.full_name,
      email: contact.email,
      telephone: contact.telephone
    }
  })

  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        await updateContact(formData, contact.id)
        setReloadList((prevState) => !prevState)
        toggleModal()
      })}
    >
      <Input
        type='text'
        placeholder={contact.full_name}
        register={register('full_name')}
      />
      {errors.full_name ? (
        <p className='error-message'>{errors.full_name.message}</p>
      ) : null}
      <Input
        type='email'
        placeholder={contact.email}
        register={register('email')}
      />
      {errors.email ? (
        <p className='error-message'>{errors.email.message}</p>
      ) : null}
      <Input
        type='tel'
        placeholder={contact.telephone}
        register={register('telephone', {
          valueAsNumber: false,
          onChange: (e) => {
            const input = e.target
            formatPhoneNumber(input)
          }
        })}
      />
      {errors.telephone ? (
        <p className='error-message'>{errors.telephone.message}</p>
      ) : null}

      <StyledButtonContainer>
        <button id='button-return' onClick={toggleModal}>
          Cancel
        </button>

        <button type='submit' id='button-submit'>
          Save
        </button>
      </StyledButtonContainer>
    </form>
  )
}
