import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import AppleIcon from '@mui/icons-material/Apple'

function isEmailValid(email: string): boolean {
  if (!email) return false
  // Simple RFC5322-ish check; good enough for basic validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
}

function isPhoneValid(phone: string): boolean {
  if (!phone) return false
  // Venezuelan base check (digits only, excluding +58 prefix), allow 7-10 digits
  return /^\d{7,10}$/.test(phone)
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const [emailError, setEmailError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let valid = true
    const emailOk = isEmailValid(email)
    const phoneOk = isPhoneValid(phone)

    // Reset errors first
    setEmailError(null)
    setPhoneError(null)
    setPasswordError(null)

    if (!(emailOk || phoneOk)) {
      valid = false
      if (email || (!email && !phone)) setEmailError('Ingresa un correo válido o usa tu teléfono')
      if (phone || (!email && !phone)) setPhoneError('Ingresa un teléfono válido (sin +58)')
    }

    if (!password.trim()) {
      valid = false
      setPasswordError('La contraseña es requerida')
    }

    if (!valid) return
    // Submit logic placeholder
    // eslint-disable-next-line no-console
    console.log({ email, phone: phone ? `+58 ${phone}` : '', password })
  }

  return (
    <Container maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 6 }}>
        <Stack spacing={2}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h1">Iniciar sesión</Typography>
          </Box>

          <TextField
            label="Teléfono"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            error={Boolean(phoneError)}
            helperText={phoneError ?? 'Escribe tu número sin el prefijo. Ej.: 4121234567'}
            InputProps={{
              startAdornment: <InputAdornment position="start">+58</InputAdornment>,
              inputMode: 'numeric',
            }}
          />

          <TextField
            label="Correo electrónico"
            placeholder="Correo electrónico"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError ?? ' '}
            autoComplete="email"
          />

          <TextField
            label="Contraseña"
            placeholder="Contraseña"
            type={showPass ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError ?? ' '}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    onClick={() => setShowPass((v) => !v)}
                    edge="end"
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" variant="contained" size="large">Iniciar sesión</Button>

          <Stack direction="row" justifyContent="space-between">
            <Link href="/register" underline="hover">Crear cuenta</Link>
            <Link href="/forgot" underline="hover">Olvidé mi contraseña</Link>
          </Stack>

          <Divider>o</Divider>

          <Stack spacing={1}>
            <Button variant="outlined" size="large" startIcon={
              // Google SVG
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
                <path fill="#EA4335" d="M24 9.5c3.37 0 6.41 1.16 8.79 3.42l6.58-6.58C35.5 2.6 30.2 0 24 0 14.62 0 6.53 5.38 2.56 13.2l7.69 5.96C12.09 13.53 17.56 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.1 24.55c0-1.6-.14-3.16-.41-4.65H24v8.8h12.41c-.54 2.9-2.2 5.36-4.67 7.01l7.15 5.54c4.17-3.85 6.51-9.52 6.51-16.7z"/>
                <path fill="#FBBC05" d="M10.25 19.16l-7.69-5.96C.93 15.6 0 19.68 0 24c0 4.26.92 8.27 2.54 11.82l7.71-5.99A14.39 14.39 0 0 1 9.5 24c0-1.69.28-3.32.75-4.84z"/>
                <path fill="#34A853" d="M24 48c6.2 0 11.44-2.04 15.26-5.76l-7.15-5.54c-2 1.35-4.55 2.14-8.1 2.14-6.44 0-11.9-4.03-13.75-9.66l-7.71 5.99C6.53 42.62 14.62 48 24 48z"/>
              </svg>
            }>Continuar con Google</Button>
            <Button variant="outlined" size="large" startIcon={<AppleIcon />}>Continuar con Apple</Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

