import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import Topbar from './TeamTopbarr';
import TeamManagement from './TeamManagement';

const Team = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <TeamManagement />
      </Box>
    </Box>
  );
};

export default Team;
