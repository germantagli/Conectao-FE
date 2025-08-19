import { Topbar } from './components/Topbar/Topbar'
import Login from './pages/Login'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <Login />
    </ThemeProvider>
  )
}

export default App
