// src/pages/NotificationPage.jsx
import {
    Box,
    Typography,
    Alert,
    AlertTitle,
    Button,
    Stack,
    IconButton,
    Collapse,
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import { useState } from 'react';
  import { useSnackbar } from 'notistack';
  
  const alertColors = [
    { type: 'primary', color: '#c9a5f5' },
    { type: 'secondary', color: '#a788f2' },
    { type: 'success', color: '#8e44fd' },
    { type: 'error', color: '#ff3e3e' },
    { type: 'warning', color: '#3fd8ec' },
    { type: 'info', color: '#d2b4f2' },
    { type: 'light', color: '#d8d8d8' },
    { type: 'dark', color: '#212121' },
  ];
  
  const NotificationPage = () => {
    const [openAlerts, setOpenAlerts] = useState(Array(alertColors.length).fill(true));
    const { enqueueSnackbar } = useSnackbar();
  
    const showNotification = (variant) => () => {
      enqueueSnackbar(`${variant.charAt(0).toUpperCase() + variant.slice(1)} Notification`, {
        variant,
      });
    };
  
    return (
      <Box p={3}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>Alert</Typography>
  
        <Stack spacing={2} mb={4}>
          {alertColors.map((alert, index) => (
            <Collapse in={openAlerts[index]} key={index}>
              <Alert
                severity={alert.type === 'dark' ? undefined : alert.type}
                sx={{
                  bgcolor: alert.color,
                  color: alert.type === 'dark' ? 'white' : 'black',
                }}
                action={
                  <IconButton
                    size="small"
                    onClick={() => {
                      const newState = [...openAlerts];
                      newState[index] = false;
                      setOpenAlerts(newState);
                    }}
                  >
                    <CloseIcon fontSize="inherit" sx={{ color: alert.type === 'dark' ? 'white' : 'black' }} />
                  </IconButton>
                }
              >
                A simple {alert.type} alert with an <a href="#">example link</a>. Give it a click if you like.
              </Alert>
            </Collapse>
          ))}
        </Stack>
  
        <Typography variant="h5" fontWeight="bold" gutterBottom>Notification</Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Notifications on this page use Toasts from notistack.
        </Typography>
  
        <Stack direction="row" spacing={2} mt={2} flexWrap="wrap">
          {['success', 'warning', 'error', 'info'].map((variant) => (
            <Button
              key={variant}
              onClick={showNotification(variant)}
              sx={{
                bgcolor:
                  variant === 'success'
                    ? '#8e44fd'
                    : variant === 'warning'
                    ? '#3fd8ec'
                    : variant === 'error'
                    ? '#ff3e3e'
                    : '#a788f2',
                color: 'white',
                px: 3,
                textTransform: 'none',
                '&:hover': {
                  opacity: 0.9,
                },
              }}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Notification
            </Button>
          ))}
        </Stack>
      </Box>
    );
  };
  
  export default NotificationPage;
  