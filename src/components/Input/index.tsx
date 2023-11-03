import { TInput } from './types'
import closed_password from '../../assets/icons/closed_password.svg'
import open_password from '../../assets/icons/open_password.svg'
import { StyledInput } from '../../styles/components/InputContainer'
import { useState } from 'react'

export const Input = ({ type, placeholder, register }: TInput) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <StyledInput>
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        {...register}
      />
      {placeholder === 'Password' ? (
        <img
          id='closed-password-icon'
          src={showPassword ? open_password : closed_password}
          alt='icon'
          onClick={togglePasswordVisibility}
        />
      ) : (
        ''
      )}
    </StyledInput>
  )
}
