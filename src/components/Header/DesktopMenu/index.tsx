import { StyledDesktopNavMenu } from './style'
import { Link } from 'react-router-dom'

export const DesktopMenu = () => {
  return (
    <StyledDesktopNavMenu>
      <ul className='nav-menu'>
        <li>
          <Link to={'/'}>Contacts</Link>
        </li>
        <li>Create contact</li>
        <li>My profile</li>
      </ul>
    </StyledDesktopNavMenu>
  )
}
