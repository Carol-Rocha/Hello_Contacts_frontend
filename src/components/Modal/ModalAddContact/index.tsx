import { useForm } from 'react-hook-form'
import { useContactsContext } from '../../../hooks/useContacts'
import { Input } from '../../Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { TCreateContact, createContactSchema } from './validator'

export const ModalAddContact = () => {
  const { createContact } = useContactsContext()

  const { register, handleSubmit } = useForm<TCreateContact>({
    resolver: zodResolver(createContactSchema)
  })
  return (
    <form onSubmit={handleSubmit(createContact)}>
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

      <div className='button-box'>
        <button>Cancel</button>
        <button type='submit' id='button-submit'>
          Create
        </button>
      </div>
    </form>
  )
}
