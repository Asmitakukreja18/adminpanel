import React from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import Topbar from './Usertobar';
import UserStepper from './Userstepper';
import NewUserForm from './NewUserForm';

const SIDEBAR_WIDTH = 240;

const Mainuser = () => (
  <Box sx={{ display: 'flex' }}>
    <Sidebar />

    {/* Main content shifted right of sidebar */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: '#f6f6fc',
        minHeight: '100vh',
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      }}
    >
      <Topbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="subtitle2" color="primary" mb={2}>
          Users / New User
        </Typography>
        <UserStepper />
        <NewUserForm />
      </Box>
    </Box>
  </Box>
);

export default Mainuser;


