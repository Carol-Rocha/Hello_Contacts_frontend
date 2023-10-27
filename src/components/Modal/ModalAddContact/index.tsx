import { useForm } from 'react-hook-form'
import { useContactsContext } from '../../../hooks/useContacts'
import { Input } from '../../Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { TCreateContact, createContactSchema } from './validator'
import { StyledButtonContainer } from '../../../styles/components/buttonContainer'
import { formatPhoneNumber } from '../../../utils/format'

interface IContactCardProps {
  toggleModal: () => void
}

export const ModalAddContact = ({ toggleModal }: IContactCardProps) => {
  const { createContact, setReloadList } = useContactsContext()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TCreateContact>({
    resolver: zodResolver(createContactSchema)
  })

  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        await createContact(formData)
        setReloadList((prevState) => !prevState)
        toggleModal()
      })}
    >
      <Input type='text' placeholder='Name' register={register('full_name')} />
      {errors.full_name ? (
        <p className='error-message'>{errors.full_name.message}</p>
      ) : null}
      <Input type='email' placeholder='Email' register={register('email')} />
      {errors.email ? (
        <p className='error-message'>{errors.email.message}</p>
      ) : null}
      <Input
        type='tel'
        placeholder='(00) 00000-0000'
        register={register('telephone', {
          valueAsNumber: false, // Impede a conversão automática em número
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
          Create
        </button>
      </StyledButtonContainer>
    </form>
  )
}
