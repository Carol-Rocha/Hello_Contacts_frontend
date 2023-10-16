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
import { useContactsContext } from '../../../hooks/useContacts'
import { TFormValues } from '../../Modal/ModalContainer/types'
import { createContactSchema } from '../../Modal/ModalContainer/validators'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

interface IMenuToggle {
  isOpenMenu: boolean
}

export const MobileMenu = ({ isOpenMenu }: IMenuToggle) => {
  const navigate = useNavigate()

  const { createContact } = useContactsContext()

  const [isOpenCreateContactModal, setIsOpenCreateContactModal] =
    useState<boolean>(false)

  const toggleCreateContactModal = () =>
    setIsOpenCreateContactModal(!isOpenCreateContactModal)

  const { register, handleSubmit } = useForm<TFormValues>({
    resolver: zodResolver(createContactSchema)
  })

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
            submitButton='Create'
            toggleModal={toggleCreateContactModal}
            handleSubmit={handleSubmit(createContact)}
            register={register}
          />
        </Modal>
      ) : null}
    </StyledMobileNavMenu>
  )
}
