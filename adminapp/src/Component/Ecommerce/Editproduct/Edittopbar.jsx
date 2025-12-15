import React from 'react';
import {
  AppBar, Toolbar, Typography, InputBase, Box
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #eee' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: '#8000ff' }}>
          Edit Product
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', background: '#f1f1f1', px: 1, borderRadius: 1 }}>
          <SearchIcon sx={{ mr: 1, color: '#999' }} />
          <InputBase placeholder="Search anything here..." sx={{ color: '#333', width: 200 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
