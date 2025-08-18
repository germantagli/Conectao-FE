import { Topbar } from './components/Topbar/Topbar'
import LoginPage from './pages/Login/Login'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <LoginPage />
    </ThemeProvider>
  )
}

export default App
