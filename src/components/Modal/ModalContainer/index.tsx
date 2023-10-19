import cross from '../../../assets/icons/cross.svg'
import { TModalContainer } from './types'
import { StyledModalContainer } from './style'

export const ModalContainer = ({
  toggleModal,
  children,
  title,
  paragraph
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
        {children}
      </div>
    </StyledModalContainer>
  )
}
