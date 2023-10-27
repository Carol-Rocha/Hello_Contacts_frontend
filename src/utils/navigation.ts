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

export const handleGoBack = (navigate: NavigateFunction) => {
  navigate('/')
}

export const handleButtonClick = (
  event: React.MouseEvent<HTMLButtonElement>
) => {
  const buttonName = event.currentTarget.textContent
  console.log(buttonName)

  if (buttonName === 'Login') {
    window.location.href = '/login'
  } else if (buttonName === 'Sign Up') {
    window.location.href = '/register'
  }
}
