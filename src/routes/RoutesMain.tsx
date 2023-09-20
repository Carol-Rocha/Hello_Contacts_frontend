import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ProfilePage } from '../pages/ProfilePage'
import { ContactsPage } from '../pages/ContactsPage'

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/Dashboard' element={<ContactsPage />} />
      <Route path='/clients/:id' element={<ProfilePage />} />
    </Routes>
  )
}
