import { StyledInput } from '../../../styles/components/InputContainer'
import { TProfilePageInput } from './types'

export const ProfilePageInput = ({
  type,
  placeholder,
  register,
  icon,
  alt
}: TProfilePageInput) => {
  return (
    <StyledInput>
      <img className='profilePageicons' src={icon} alt={alt} />
      <input
        className='profilePageInput'
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </StyledInput>
  )
}
