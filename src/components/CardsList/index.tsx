import user_pen from '../../assets/icons/user-pen.svg'
import profile from '../../assets/icons/profile.svg'
import email from '../../assets/icons/email.svg'
import telephone from '../../assets/icons/telephone.svg'
import { StyledCards } from './style'

export const CardsList = () => {
  return (
    <StyledCards>
      <li className='card'>
        <img src={user_pen} alt='edit user icon' className='edit-icon' />
        <div className='card-info'>
          <img src={profile} alt='profile icon' />
          <span>Vanessa Carmargo</span>
        </div>
        <div className='card-info'>
          <img src={email} alt='email icon' />
          <span>vanessa@gmail.com</span>
        </div>
        <div className='card-info'>
          <img src={telephone} alt='phone icon' />
          <span>82988343482</span>
        </div>
        <button>Delete</button>
      </li>
      <li className='card'>
        <img src={user_pen} alt='edit user icon' className='edit-icon' />
        <div className='card-info'>
          <img src={profile} alt='profile icon' />
          <span>Vanessa Carmargo</span>
        </div>
        <div className='card-info'>
          <img src={email} alt='email icon' />
          <span>vanessa@gmail.com</span>
        </div>
        <div className='card-info'>
          <img src={telephone} alt='phone icon' />
          <span>82988343482</span>
        </div>
        <button>Delete</button>
      </li>
      <li className='card'>
        <img src={user_pen} alt='edit user icon' className='edit-icon' />
        <div className='card-info'>
          <img src={profile} alt='profile icon' />
          <span>Vanessa Carmargo</span>
        </div>
        <div className='card-info'>
          <img src={email} alt='email icon' />
          <span>vanessa@gmail.com</span>
        </div>
        <div className='card-info'>
          <img src={telephone} alt='phone icon' />
          <span>82988343482</span>
        </div>
        <button>Delete</button>
      </li>
      <li className='card'>
        <img src={user_pen} alt='edit user icon' className='edit-icon' />
        <div className='card-info'>
          <img src={profile} alt='profile icon' />
          <span>Vanessa Carmargo</span>
        </div>
        <div className='card-info'>
          <img src={email} alt='email icon' />
          <span>vanessa@gmail.com</span>
        </div>
        <div className='card-info'>
          <img src={telephone} alt='phone icon' />
          <span>82988343482</span>
        </div>
        <button>Delete</button>
      </li>
    </StyledCards>
  )
}
