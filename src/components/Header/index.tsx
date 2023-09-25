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
      <section className='header-branding'>
        <img src={logo} alt='logo' />
        <div className='user-info'>
          <h4>Carol</h4>
          <span>carol@gmail.com</span>
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
    </StyledHeader>
  )
}
