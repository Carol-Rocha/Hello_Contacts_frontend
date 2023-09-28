import { useState } from 'react'
import { StyledDesktopNavMenu } from './style'
import { Link } from 'react-router-dom'
import { ProfileModal } from './profileModal'

export const DesktopMenu = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const toggleModal = () => setIsOpenModal(!isOpenModal)

  return (
    <StyledDesktopNavMenu>
      <ul className='nav-menu'>
        <li>
          <Link to={'/'}>Contacts</Link>
        </li>
        <li>Create contact</li>
        <li onClick={toggleModal}>My profile</li>
        {isOpenModal ? <ProfileModal toggleModal={toggleModal} /> : null}
      </ul>
    </StyledDesktopNavMenu>
  )
}
