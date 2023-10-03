import { AuthProvider } from './providers/AuthProvider'
import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyles } from './styles/Global'

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  )
}

export default App
