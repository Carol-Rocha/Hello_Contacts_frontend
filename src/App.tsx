import { AuthProvider } from './providers/AuthProvider'
import { ContactsProvider } from './providers/ContactsProvider'
import { UserProvider } from './providers/userProvider'
import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyles } from './styles/Global'

function App() {
  return (
    <>
      <GlobalStyles />
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
