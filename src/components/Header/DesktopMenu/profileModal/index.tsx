import user_pen from '../../../../assets/icons/user-pen.svg'
import exit from '../../../../assets/icons/exit.svg'
import cross from '../../../../assets/icons/cross.svg'
import { StyledProfileModal } from './style'

interface IProfileModal {
  toggleModal: () => void
}

export const ProfileModal = ({ toggleModal }: IProfileModal) => {
  return (
    <StyledProfileModal>
      <div className='position-relative'>
        <img
          onClick={toggleModal}
          id='icon-close'
          src={cross}
          alt='icon to close modal'
        />
        <ul>
          <li>
            <span>Edit perfil</span>
            <img src={user_pen} alt='icon to edit user' />
          </li>
          <li>
            <span>Log out</span>
            <img src={exit} alt='icon to exit' />
          </li>
        </ul>
      </div>
    </StyledProfileModal>
  )
}
