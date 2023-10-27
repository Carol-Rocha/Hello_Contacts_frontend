import { useForm } from 'react-hook-form'
import { TRegisterData, registerSchema } from './validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer } from '../../components/Form'
import { Input } from '../../components/Input'
import { useUserContext } from '../../hooks/useUser'
import { handleGoBack } from '../../utils/navigation'
import { useNavigate } from 'react-router-dom'

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TRegisterData>({
    resolver: zodResolver(registerSchema)
  })

  const { sigIn } = useUserContext()

  const navigate = useNavigate()

  return (
    <FormContainer
      title='Register'
      paragraph='Create your account to register your contacts'
      registration_question='Do you have an account?'
      submitButton='Login'
    >
      <form onSubmit={handleSubmit(sigIn)}>
        <Input
          type='text'
          placeholder='Name'
          register={register('full_name')}
        />
        {errors.full_name ? (
          <p className='error-message'>{errors.full_name.message}</p>
        ) : null}
        <Input type='email' placeholder='Email' register={register('email')} />
        {errors.email ? (
          <p className='error-message'>{errors.email.message}</p>
        ) : null}

        <Input
          type='tel'
          placeholder='(00) 00000-0000'
          register={register('telephone')}
        />
        {errors.telephone ? (
          <p className='error-message'>{errors.telephone.message}</p>
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
            Register
          </button>
        </div>
      </form>
    </FormContainer>
  )
}
