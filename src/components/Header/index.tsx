import { useState } from 'react'
import frame from '../../assets/icons/Frame.svg'
import logo from '../../assets/icons/paper-plane-top.svg'
import { StyledHeader } from './style'
import angle_down from '../../assets/icons/angle_down.svg'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

export const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false)

  const toggleMenu = () => {
    setisOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu)
  }
  return (
    <StyledHeader>
      <div className='container'>
        <section className='header-branding'>
          <img src={logo} alt='logo' />
          <div className='user-info'>
            <h4 id='user-name'>Carol</h4>
            <span id='user-email'>carol@gmail.com</span>
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
