import { useForm } from 'react-hook-form'
import { useContactsContext } from '../../../hooks/useContacts'
import { Input } from '../../Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { TCreateContact, createContactSchema } from './validator'
import { StyledButtonContainer } from '../../../styles/components/buttonContainer'

interface IContactCardProps {
  toggleModal: () => void
}

export const ModalAddContact = ({ toggleModal }: IContactCardProps) => {
  const { createContact } = useContactsContext()

  const { register, handleSubmit } = useForm<TCreateContact>({
    resolver: zodResolver(createContactSchema)
  })

  return (
    <form
      onSubmit={handleSubmit((formData) =>
        createContact(formData).then(toggleModal)
      )}
    >
      <Input
        type='text'
        placeholder='Full name'
        register={register('full_name')}
      />
      <Input type='email' placeholder='Email' register={register('email')} />
      <Input
        type='tel'
        placeholder='(00) 00000-0000'
        register={register('telephone')}
      />

      <StyledButtonContainer>
        <button onClick={toggleModal}>Cancel</button>
        <button type='submit' id='button-submit'>
          Create
        </button>
      </StyledButtonContainer>
    </form>
  )
}
