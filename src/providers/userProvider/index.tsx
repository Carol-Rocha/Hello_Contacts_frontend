import { createContext } from 'react'
import { IUserProvider, IUserProviderProps } from './types'
import { api } from '../../services/api'

export const userContext = createContext({} as IUserProvider)

export const UserProvider = ({ children }: IUserProviderProps) => {
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

  const value = { getUser }

  return <userContext.Provider value={value}>{children}</userContext.Provider>
}
