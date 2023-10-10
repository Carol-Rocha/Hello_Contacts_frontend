import { useEffect, useState } from 'react'
import frame from '../../assets/icons/Frame.svg'
import logo from '../../assets/icons/paper-plane-top.svg'
import { StyledHeader } from './style'
import angle_down from '../../assets/icons/angle_down.svg'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { useUserContext } from '../../hooks/useUser'
import { IUser } from '../../providers/userProvider/types'

export const Header = () => {
  const { getUser } = useUserContext()

  const [isOpenMenu, setisOpenMenu] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>()

  const toggleMenu = () => {
    setisOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu)
  }

  const userId = localStorage.getItem('hello-contacts:id')

  useEffect(() => {
    if (userId) {
      getUser(userId).then(setUser)
    }
  }, [])

  return (
    <StyledHeader>
      <div className='container'>
        <section className='header-branding'>
          <img src={logo} alt='logo' />
          <div className='user-info'>
            <h4 id='user-name'>{user?.full_name}</h4>
            <span id='user-email'>{user?.email}</span>
          </div>
        </section>
        <button
          onClick={toggleMenu}
          className={isOpenMenu ? 'open-menu-button' : ' menu-button'}
        >
          <img
            src={isOpenMenu ? angle_down : frame}
            alt='navigation menu button'
          />
        </button>
        <MobileMenu isOpenMenu={isOpenMenu} />
        <DesktopMenu />
      </div>
    </StyledHeader>
  )
}
