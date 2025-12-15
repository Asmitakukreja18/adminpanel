import React from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../Home/Dashboard/Sidebar';
import Topbar from './Edittopbar';
import EditProductForm from './EditProduct';

const EditProductPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Box sx={{ p: 3, backgroundColor: '#f9f9fb', minHeight: '100vh' }}>
          <EditProductForm />
        </Box>
      </Box>
    </Box>
  );
};

export default EditProductPage;
