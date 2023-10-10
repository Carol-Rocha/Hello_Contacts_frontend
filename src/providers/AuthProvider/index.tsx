import { createContext, useEffect } from 'react'
import { IAuthContextValues, IAuthProviderProps, ILoginResponse } from './types'
import { useNavigate } from 'react-router-dom'
import { TLoginData } from '../../pages/LoginPage/validator'
import { api } from '../../services/api'

export const AuthContext = createContext({} as IAuthContextValues)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('hello-contacts:token')

    if (!token) {
      return
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }, [])

  const signIn = async (data: TLoginData) => {
    try {
      const response = await api.post<ILoginResponse>('/login', data)

      const { token } = response.data
      const { id } = response.data

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      localStorage.setItem('hello-contacts:token', token)
      localStorage.setItem('hello-contacts:id', id)

      navigate('dashboard')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  )
}
