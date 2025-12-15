
import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../Home/Dashboard/Sidebar';
import ChatWindow from './Chatwindow';
import TopBar from './Topchatsnavbar';

const ChatLayout = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f9f9fb' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <ChatWindow />
      </Box>
    </Box>
  );
};

export default ChatLayout;
