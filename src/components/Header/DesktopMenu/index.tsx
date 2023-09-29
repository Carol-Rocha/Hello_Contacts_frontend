import { useState } from 'react'
import { StyledDesktopNavMenu } from './style'
import { Link } from 'react-router-dom'
import { ProfileModal } from './profileModal'
import { Modal } from '../../Modal'
import { ModalContainer } from '../../Modal/ModalContainer'

export const DesktopMenu = () => {
  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false)

  const toggleProfileModal = () => setIsOpenProfileModal(!isOpenProfileModal)

  const [isOpenCreateContactModal, setIsOpenCreateContactModal] =
    useState<boolean>(false)

  const toggleCreateContactModal = () =>
    setIsOpenCreateContactModal(!isOpenCreateContactModal)

  return (
    <StyledDesktopNavMenu>
      <ul className='nav-menu'>
        <li>
          <Link to={'/'}>Contacts</Link>
        </li>
        <li onClick={toggleCreateContactModal}>Create contact</li>
        <li onClick={toggleProfileModal}>My profile</li>
        {isOpenProfileModal ? (
          <ProfileModal toggleProfileModal={toggleProfileModal} />
        ) : null}
      </ul>
      {isOpenCreateContactModal ? (
        <Modal>
          <ModalContainer
            title='Create contact'
            paragraph='Enter the new contact information and press the Create button to save the information'
            submitButton='Create'
            toggleCreateContactModal={toggleCreateContactModal}
          />
        </Modal>
      ) : null}
    </StyledDesktopNavMenu>
  )
}
