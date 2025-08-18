import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1c88f3' },
    success: { main: '#00b894' },
    background: {
      default: '#0b0e14',
      paper: '#0f1420',
    },
    text: { primary: '#e6e9ef', secondary: '#9aa4b2' },
    divider: '#1d2433',
  },
  shape: { borderRadius: 12 },
  components: {
    MuiTextField: { defaultProps: { fullWidth: true, size: 'medium', variant: 'outlined' } },
    MuiButton: { defaultProps: { fullWidth: true, size: 'large' } },
    MuiCard: { styleOverrides: { root: { border: '1px solid #1d2433', backgroundImage: 'none' } } },
  },
})

export default theme

