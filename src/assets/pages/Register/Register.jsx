import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import register from "../../services/register"

const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#8E7155', // Lighter warm taupe
      main: '#6D503D', // Lighter deep espresso brown
      dark: '#4B3821', // Rich brown
      contrastText: '#FFFFFF', // White text
    },
    secondary: {
      light: '#F0E6DD', // Lighter creamy beige
      main: '#D4C0A1', // Creamy beige
      dark: '#B7A38F', // Slightly darker beige
      contrastText: '#000000', // Black text
    },
  },
})

const Register = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/register', {replace: true})
    } else {
      navigate('/', {replace: true})
    }
    
  }, [navigate])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const credentials = await register(data.get('first_name'), data.get('last_name'), data.get('username'), data.get('password'))

      if (credentials) navigate('/login')
      
    } catch (error) {
      console.log(error)
    }
  };

  return(
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{color: 'white'}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first_name"
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Register