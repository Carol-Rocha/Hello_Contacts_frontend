import { useForm } from 'react-hook-form'
import homeImage from '../../assets/images/homeImage.svg'
import { Input } from '../../components/Input'
import { TLoginData, loginSchema } from '../LoginPage/validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/useAuth'
import { StyledHomePage } from './style'
import { StyledForm } from '../../styles/components/Form'
import { StyledAskButton } from '../../styles/components/AskButtonComponent'
import { handleButtonClick } from '../../utils/navigation'

export const HomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema)
  })

  const { logIn } = useAuth()

  return (
    <StyledHomePage>
      <div className='image-area hide-container'>
        <img src={homeImage} alt='image' />
      </div>
      <section className='form-section'>
        <div className='form-info'>
          <h4>Hello Again!</h4>
          <p>Check your contact list and register new contacts</p>
        </div>
        <StyledForm onSubmit={handleSubmit(logIn)}>
          <Input
            type='email'
            placeholder='Email'
            register={register('email')}
          />
          {errors.email ? (
            <p className='error-message'>{errors.email.message}</p>
          ) : null}
          <Input
            type='password'
            placeholder='Password'
            register={register('password')}
          />
          {errors.password ? (
            <p className='error-message'>{errors.password.message}</p>
          ) : null}

          <StyledAskButton>
            <span className='ask-button'>Forgot your password?</span>
            <span className='link-button'>Recovery password</span>
          </StyledAskButton>
          <button id='button-submit' type='submit'>
            Login
          </button>
        </StyledForm>
        <StyledAskButton>
          <span className='ask-button'>Do not have an account yet?</span>
          <span onClick={handleButtonClick} className='link-button'>
            Sign Up
          </span>
        </StyledAskButton>
      </section>
    </StyledHomePage>
  )
}
