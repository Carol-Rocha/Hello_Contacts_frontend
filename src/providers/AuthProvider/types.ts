import { ReactNode } from 'react'
import { TLoginData } from '../../pages/LoginPage/validator'

export interface IAuthProviderProps {
  children: ReactNode
}

export interface ILoginResponse {
  token: string
}

export interface IAuthContextValues {
  signIn: (data: TLoginData) => void
}
