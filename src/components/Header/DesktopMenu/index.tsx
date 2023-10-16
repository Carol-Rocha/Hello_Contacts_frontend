import { useState } from 'react'
import { StyledDesktopNavMenu } from './style'
import { Link } from 'react-router-dom'
import { ProfileModal } from './profileModal'
import { Modal } from '../../Modal'
import { ModalContainer } from '../../Modal/ModalContainer'
import { useContactsContext } from '../../../hooks/useContacts'
import { TFormValues } from '../../Modal/ModalContainer/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { createContactSchema } from '../../Modal/ModalContainer/validators'
import { useForm } from 'react-hook-form'

export const DesktopMenu = () => {
  const { createContact } = useContactsContext()

  const [isOpenProfileModal, setIsOpenProfileModal] = useState<boolean>(false)

  const toggleProfileModal = () => setIsOpenProfileModal(!isOpenProfileModal)

  const [isOpenCreateContactModal, setIsOpenCreateContactModal] =
    useState<boolean>(false)

  const toggleCreateContactModal = () =>
    setIsOpenCreateContactModal(!isOpenCreateContactModal)

  const { register, handleSubmit } = useForm<TFormValues>({
    resolver: zodResolver(createContactSchema)
  })

  return (
    <StyledDesktopNavMenu>
      <ul className='nav-menu'>
        <li>
          <Link to={'/dashboard'}>Contacts</Link>
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
            toggleModal={toggleCreateContactModal}
            handleSubmit={handleSubmit(createContact)}
            register={register}
          />
        </Modal>
      ) : null}
    </StyledDesktopNavMenu>
  )
}
