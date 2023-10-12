import { AuthProvider } from './providers/AuthProvider'
import { ContactsProvider } from './providers/ContactsProvider'
import { UserProvider } from './providers/userProvider'
import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyles } from './styles/Global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer theme='light' />
      <ContactsProvider>
        <UserProvider>
          <AuthProvider>
            <RoutesMain />
          </AuthProvider>
        </UserProvider>
      </ContactsProvider>
    </>
  )
}

export default App
