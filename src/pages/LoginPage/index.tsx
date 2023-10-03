import { useForm } from 'react-hook-form'
import loginImage from '../../assets/images/Frame.svg'
import closed_password from '../../assets/icons/closed_password.svg'
import { TLoginData, loginSchema } from './validator'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/useAuth'

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<TLoginData>({
    resolver: zodResolver(loginSchema)
  })

  const { signIn } = useAuth()
  return (
    <main>
      <section>
        <div>
          <h1>Login</h1>
          <p>Login to your account</p>
        </div>
        <form onSubmit={handleSubmit(signIn)}>
          <input type='email' placeholder='Email' {...register('email')} />
          <input
            type='password'
            placeholder='Password'
            {...register('password')}
          />
          <img src={closed_password} alt='icon' />
          <div>
            <button>Return</button>
            <button>Login</button>
          </div>
        </form>
        <div>
          <span>Forgot your password?</span>
          <span>Sign Up</span>
        </div>
      </section>
      <img src={loginImage} alt='illustration image' />
    </main>
  )
}
