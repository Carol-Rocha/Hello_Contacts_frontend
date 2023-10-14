import user_pen from '../../../../assets/icons/user-pen.svg'
import exit from '../../../../assets/icons/exit.svg'
import cross from '../../../../assets/icons/cross.svg'
import { StyledProfileModal } from './style'
import { useNavigate } from 'react-router-dom'
import { logOut, profilePage } from '../../../../utils/navigation'

interface IMyProfileModal {
  toggleProfileModal: () => void
}

export const ProfileModal = ({ toggleProfileModal }: IMyProfileModal) => {
  const navigate = useNavigate()

  return (
    <StyledProfileModal>
      <div className='position-relative'>
        <img
          onClick={toggleProfileModal}
          id='icon-close'
          src={cross}
          alt='icon to close modal'
        />
        <ul>
          <li onClick={() => profilePage(navigate)}>
            <span>Edit perfil</span>
            <img src={user_pen} alt='icon to edit user' />
          </li>
          <li onClick={() => logOut(navigate)}>
            <span>Log out</span>
            <img src={exit} alt='icon to exit' />
          </li>
        </ul>
      </div>
    </StyledProfileModal>
  )
}
