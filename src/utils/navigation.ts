import { NavigateFunction } from 'react-router-dom'

export const logOut = (navigate: NavigateFunction) => {
  localStorage.removeItem('hello-contacts:token')
  localStorage.removeItem('hello-contacts:id')
  navigate('/login')
}

export const profilePage = (navigate: NavigateFunction) => {
  const userId: string | null = localStorage.getItem('hello-contacts:id')
  navigate(`/clients/${userId}`)
}
