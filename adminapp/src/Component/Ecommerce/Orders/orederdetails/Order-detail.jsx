import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import TopBar from '../../../Chats/Topchatsnavbar';
import OrderDetailPage from './Orderdetail';

const Orderdetail = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
        <OrderDetailPage />
      </Box>
    </Box>
  );
};

export default Orderdetail;
