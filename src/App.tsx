import { AuthProvider } from './providers/AuthProvider'
import { ContactsProvider } from './providers/ContactsProvider'
import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyles } from './styles/Global'

function App() {
  return (
    <>
      <GlobalStyles />
      <ContactsProvider>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </ContactsProvider>
    </>
  )
}

export default App
