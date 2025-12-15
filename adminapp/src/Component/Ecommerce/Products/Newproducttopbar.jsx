
import React from 'react';
import { Box, Button, InputBase,  AppBar,
    Toolbar,  Typography, TextField,} from '@mui/material';

const TopBar = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', p: 2, bgcolor: '#fff', borderBottom: '1px solid #eee' }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: 'white', boxShadow: 'none', mb: 4 }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ color: '#6366f1' }}>
              New Product
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <TextField
              placeholder="Search anything here..."
              size="small"
              sx={{ backgroundColor: '#f0f0f0', borderRadius: 1, width: 250 }}
            />
          </Toolbar>
        </AppBar>
    </Box>
  );
};

export default TopBar;
