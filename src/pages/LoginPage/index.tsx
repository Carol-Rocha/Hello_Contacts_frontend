import { useForm } from 'react-hook-form'
import { TLoginData, loginSchema } from './validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/useAuth'
import { Input } from '../../components/Input'
import { FormContainer } from '../../components/Form'

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema)
  })

  const { logIn } = useAuth()

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
          <button>Return</button>
          <button id='button-submit' type='submit'>
            Login
          </button>
        </div>
      </form>
    </FormContainer>
  )
}
