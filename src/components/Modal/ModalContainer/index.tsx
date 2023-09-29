import { SubmitHandler, useForm } from 'react-hook-form'
import cross from '../../../assets/icons/cross.svg'

type TFormValues = {
  fullName: string
  email: string
  telephone: string
}

interface IModalContainer {
  title: string
  paragraph: string
  submitButton: string
  toggleCreateContactModal?: () => void
  toggleUpdateContactModal?: () => void
}

export const ModalContainer = ({
  title,
  paragraph,
  submitButton,
  toggleCreateContactModal
}: IModalContainer) => {
  const { register, handleSubmit } = useForm<TFormValues>()

  const onSubmit: SubmitHandler<TFormValues> = async (formData) => {
    console.log(formData)
  }

  return (
    <div className='main-modal'>
      <div className='container-position-relative'>
        <img
          onClick={toggleCreateContactModal}
          id='icon-close'
          src={cross}
          alt='icon to close modal'
        />{' '}
        <div className='info-modal'>
          <h4 id='modal-title'>{title}</h4>
          <p id='modal-parag'>{paragraph}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Full name'
            {...register('fullName')}
          />
          <input type='email' placeholder='Email' {...register('email')} />
          <input
            type='tel'
            placeholder='Telephone'
            {...register('telephone')}
          />
          <div className='button-box'>
            <button>Cancel</button>
            <button type='submit' id='button-submit'>
              {submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
