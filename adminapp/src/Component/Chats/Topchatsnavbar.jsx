
import React from 'react';
import { Box, Button, InputBase } from '@mui/material';

const TopBar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: '#fff', borderBottom: '1px solid #eee' }}>
      <img src="/logo.svg" alt="Logo" style={{ height: 40, marginRight: 16 }} />
      <InputBase placeholder="Search anything here…" sx={{ flexGrow: 1, bgcolor: '#f0f0f5', borderRadius: 2, px: 2 }} />
      <Button variant="contained" sx={{ bgcolor: '#8e44ad', mx: 1 }}>App</Button>
      <Button variant="outlined" sx={{ mx: 1 }}>Message</Button>
      <Button variant="outlined" sx={{ mx: 1 }}>Setting</Button>
    </Box>
  );
};

export default TopBar;
