import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { ProfilePage } from '../pages/ProfilePage'
import { ContactsPage } from '../pages/ContactsPage'
import { PageNotFound } from '../pages/PageNotFound'
import { HomePage } from '../pages/Home'

export const RoutesMain = () => {
  return (
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/Dashboard' element={<ContactsPage />} />
      <Route path='/clients/:id' element={<ProfilePage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
