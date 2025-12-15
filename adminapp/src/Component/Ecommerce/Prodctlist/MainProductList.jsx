import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../Home/Dashboard/Sidebar';
import Topbar from './Productlisttopbar';
import ProductList from './ProductList';

const MainProductlist = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Box sx={{ p: 3, backgroundColor: '#f9f9fb', minHeight: '100vh' }}>
          <ProductList />
        </Box>
      </Box>
    </Box>
  );
};

export default MainProductlist;
