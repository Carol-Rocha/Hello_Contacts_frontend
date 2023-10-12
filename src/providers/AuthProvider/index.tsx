import { createContext, useEffect } from 'react'
import { IAuthContextValues, IAuthProviderProps, ILoginResponse } from './types'
import { useNavigate } from 'react-router-dom'
import { TLoginData } from '../../pages/LoginPage/validator'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

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

  const logIn = async (data: TLoginData) => {
    try {
      const response = await api.post<ILoginResponse>('/login', data)

      const { token } = response.data
      const { id } = response.data

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      localStorage.setItem('hello-contacts:token', token)
      localStorage.setItem('hello-contacts:id', id)

      navigate('dashboard')
    } catch (error) {
      toast.warning('Invalid email and/or password!')
    }
  }
  return (
    <AuthContext.Provider value={{ logIn }}>{children}</AuthContext.Provider>
  )
}
