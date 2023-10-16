import cross from '../../../assets/icons/cross.svg'
import { Input } from '../../Input'
import { TModalContainer } from './types'
import { StyledModalContainer } from './style'

export const ModalContainer = ({
  title,
  paragraph,
  submitButton,
  toggleModal,
  handleSubmit,
  register
}: TModalContainer) => {
  return (
    <StyledModalContainer>
      <div className='container-position-relative'>
        <img
          onClick={toggleModal}
          id='icon-close'
          src={cross}
          alt='icon to close modal'
        />{' '}
        <div className='info-modal'>
          <h4 id='modal-title'>{title}</h4>
          <p id='modal-parag'>{paragraph}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            placeholder='Full name'
            register={register('full_name')}
          />
          <Input
            type='email'
            placeholder='Email'
            register={register('email')}
          />
          <Input
            type='tel'
            placeholder='(00) 00000-0000'
            register={register('telephone')}
          />

          <div className='button-box'>
            <button>Cancel</button>
            <button type='submit' id='button-submit'>
              {submitButton}
            </button>
          </div>
        </form>
      </div>
    </StyledModalContainer>
  )
}
