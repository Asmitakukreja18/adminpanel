import React from 'react';
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  InputAdornment,
  Paper
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box sx={{ background: '#f4f6fa', minHeight: '100vh', p: 2 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          minHeight: '90vh'
        }}
      >
        <Grid container>
          {/* Left - Login Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: 4
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 350 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Sign in
              </Typography>
              <Typography variant="body2" sx={{ color: '#888', mb: 3 }}>
                Welcome back! Please login to your account.
              </Typography>

              <TextField
                fullWidth
                placeholder="Email Address"
                size="small"
                sx={{ mb: 2, background: '#f6f6f6', borderRadius: 1 }}
              />
              <TextField
                fullWidth
                placeholder="Password"
                size="small"
                type={showPassword ? 'text' : 'password'}
                sx={{ mb: 1.5, background: '#f6f6f6', borderRadius: 1 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#8000ff',
                  fontWeight: 600,
                  borderRadius: 1,
                  py: 1.3,
                  mb: 2
                }}
              >
                Sign in
              </Button>

              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Don't have an account?{' '}
                <Link href="#" underline="hover">
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Right - Purple Info Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundColor: '#8000ff',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: 4
            }}
          >
            <Box sx={{ textAlign: 'left', maxWidth: 350, width: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Very good works are <br />
                waiting for you <br />
                <strong>Sign in Now</strong>
              </Typography>
              <Box sx={{ mt: 6 }}>
                <img
                  src="https://i.ibb.co/w60gyRs/lady.png" // Update with your image if needed
                  alt="lady"
                  style={{ maxWidth: '100%' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LoginPage;
