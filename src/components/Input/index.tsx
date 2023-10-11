import { TInput } from './types'
import closed_password from '../../assets/icons/closed_password.svg'
import { StyledInput } from './style'

export const Input = ({ type, placeholder, register }: TInput) => {
  return (
    <StyledInput>
      <input type={type} placeholder={placeholder} {...register} />
      {type === 'password' ? <img src={closed_password} alt='icon' /> : ''}
    </StyledInput>
  )
}
