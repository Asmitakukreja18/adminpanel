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

const SignupPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box sx={{ background: '#f4f6fa', minHeight: '100vh', p: 27 }}>
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
          {/* Left - Form Section */}
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
                Sign up
              </Typography>
              <Typography variant="body2" sx={{ color: '#888', mb: 3 }}>
                Start your 30-day free trial.
              </Typography>

              <TextField
                fullWidth
                placeholder="Full Name"
                size="small"
                sx={{ mb: 2, background: '#f6f6f6', borderRadius: 1 }}
              />
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

              <Typography variant="caption" sx={{ color: '#888', mb: 2, display: 'block' }}>
                You are agreeing to the{' '}
                <Link href="#" underline="hover">
                  Terms of Services
                </Link>{' '}
                and{' '}
                <Link href="#" underline="hover">
                  Privacy Policy
                </Link>
              </Typography>

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
                Get started
              </Button>

              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                Already a member?{' '}
                <Link href="#" underline="hover">
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Right - Purple Section */}
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
                <strong>Sign up Now</strong>
              </Typography>
              <Box sx={{ mt: 6 }}>
                <img
                  src="https://cdn.prod.website-files.com/62e3b73940ad1b927fdd08ec/63047e3b9de6e9fa652c0a5c_hero%20image%203.png" // replace with your actual image URL
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

export default SignupPage;
