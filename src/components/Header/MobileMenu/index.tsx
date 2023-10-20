import user_add from '../../../assets/icons/user-add.svg'
import book_contacts from '../../../assets/icons/book.svg'
import user_pen from '../../../assets/icons/user-pen.svg'
import exit from '../../../assets/icons/exit.svg'
import { StyledMobileNavMenu } from './style'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Modal } from '../../Modal'
import { ModalContainer } from '../../Modal/ModalContainer'
import { logOut, profilePage } from '../../../utils/navigation'

import { ModalAddContact } from '../../Modal/ModalAddContact'

interface IMenuToggle {
  isOpenMenu: boolean
}

export const MobileMenu = ({ isOpenMenu }: IMenuToggle) => {
  const navigate = useNavigate()

  const [isOpenCreateContactModal, setIsOpenCreateContactModal] =
    useState<boolean>(false)

  const toggleCreateContactModal = () =>
    setIsOpenCreateContactModal(!isOpenCreateContactModal)

  return (
    <StyledMobileNavMenu>
      <ul className={isOpenMenu ? 'show-menu-info' : 'close-menu-info'}>
        <li onClick={toggleCreateContactModal}>
          <img src={user_add} alt='add new contact' />
          <span>Create Contact</span>
        </li>
        <Link to={'/dashboard'}>
          <img src={book_contacts} alt='contacts' />
          <span>Contacts</span>
        </Link>
        <li onClick={() => profilePage(navigate)}>
          <img src={user_pen} alt='edit user' />
          <span>Edit profile</span>
        </li>
        <li onClick={() => logOut(navigate)}>
          <img src={exit} alt='log out' />
          <span>Log out</span>
        </li>
      </ul>
      {isOpenCreateContactModal ? (
        <Modal>
          <ModalContainer
            title='Create contact'
            paragraph='Enter the new contact information and press the Create button to save the information'
            toggleModal={toggleCreateContactModal}
          >
            <ModalAddContact toggleModal={toggleCreateContactModal} />
          </ModalContainer>
        </Modal>
      ) : null}
    </StyledMobileNavMenu>
  )
}
