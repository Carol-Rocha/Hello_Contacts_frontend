import { useContext } from 'react'
import { userContext } from '../providers/userProvider'

export const useUserContext = () => {
  const context = useContext(userContext)

  return context
}
