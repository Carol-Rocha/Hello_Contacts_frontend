import { createContext } from 'react'
import { IUser, IUserProvider, IUserProviderProps, TUpdateUser } from './types'
import { api } from '../../services/api'
import { TRegisterData } from '../../pages/RegisterPage/validator'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const userContext = createContext({} as IUserProvider)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate()

  const sigIn = async (formData: TRegisterData) => {
    try {
      await api.post<IUser>('/clients', formData)
      navigate('login')
      toast.success('Account created successfully!')
    } catch (error) {
      toast.warning('Oops! Something went wrong')
    }
  }

  const getUser = async (userId: string) => {
    const token = localStorage.getItem('hello-contacts:token')

    try {
      const response = await api.get(`/clients/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return response.data
    } catch (error) {
      return error
    }
  }

  const updateUser = async (userData: TUpdateUser, id: string) => {
    const token = localStorage.getItem('hello-contacts:token')
    try {
      const response = await api.patch(`/clients/${id}`, userData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success('Updated successfully!')
      return response.data
    } catch {
      toast.warning('Oops! Something went wrong')
    }
  }

  const value = { getUser, sigIn, updateUser }

  return <userContext.Provider value={value}>{children}</userContext.Provider>
}
