import { StyledCard } from './style'
import user_pen from '../../../assets/icons/user-pen.svg'
import profile from '../../../assets/icons/profile.svg'
import email from '../../../assets/icons/email.svg'
import telephone from '../../../assets/icons/telephone.svg'
import { IContact } from '../../../providers/ContactsProvider/types'

interface IContactCardProps {
  contact: IContact
}

export const Card = ({ contact }: IContactCardProps) => {
  return (
    <StyledCard className='card'>
      <img src={user_pen} alt='edit user icon' className='edit-icon' />
      <div className='card-info'>
        <img src={profile} alt='profile icon' />
        <span>{contact.full_name}</span>
      </div>
      <div className='card-info'>
        <img src={email} alt='email icon' />
        <span>{contact.email}</span>
      </div>
      <div className='card-info'>
        <img src={telephone} alt='phone icon' />
        <span>{contact.telephone}</span>
      </div>
      <button>Delete</button>
    </StyledCard>
  )
}
