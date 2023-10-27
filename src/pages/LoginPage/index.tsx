import { useForm } from 'react-hook-form'
import { TLoginData, loginSchema } from './validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/useAuth'
import { Input } from '../../components/Input'
import { FormContainer } from '../../components/Form'
import { handleGoBack } from '../../utils/navigation'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema)
  })

  const { logIn } = useAuth()
  const navigate = useNavigate()

  return (
    <FormContainer
      title='Login'
      paragraph='Login to your account'
      registration_question='Forgot your password?'
      submitButton='Sign Up'
    >
      <form onSubmit={handleSubmit(logIn)}>
        <Input type='email' placeholder='Email' register={register('email')} />
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
        <div className='nav-buttons'>
          <button onClick={() => handleGoBack(navigate)}>Return</button>
          <button id='button-submit' type='submit'>
            Login
          </button>
        </div>
      </form>
    </FormContainer>
  )
}
