import search from '../../../assets/icons/search.svg'
import user_add from '../../../assets/icons/user-add.svg'
import book_contacts from '../../../assets/icons/book.svg'
import user_pen from '../../../assets/icons/user-pen.svg'
import exit from '../../../assets/icons/exit.svg'
import { StyledMobileNavMenu } from './style'

interface IMenuToggle {
  isOpenMenu: boolean
}

export const MobileMenu = ({ isOpenMenu }: IMenuToggle) => {
  return (
    <StyledMobileNavMenu>
      <ul className={isOpenMenu ? 'show-menu-info' : 'close-menu-info'}>
        <li>
          <img src={search} alt='search' />
          <span>Search</span>
        </li>
        <li>
          <img src={user_add} alt='add new contact' />
          <span>Create Contact</span>
        </li>
        <li>
          <img src={book_contacts} alt='contacts' />
          <span>Contacts</span>
        </li>
        <li>
          <img src={user_pen} alt='edit user' />
          <span>Edit profile</span>
        </li>
        <li>
          <img src={exit} alt='log out' />
          <span>Log out</span>
        </li>
      </ul>
    </StyledMobileNavMenu>
  )
}
