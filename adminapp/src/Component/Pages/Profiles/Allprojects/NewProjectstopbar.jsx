import React from 'react';
import {
  AppBar, Toolbar, Box, InputBase, Button
} from '@mui/material';
import { Search } from '@mui/icons-material';

const drawerWidth = 240;

export default function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: '#fff',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid #eee',
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#F3F4F6',
            px: 2,
            py: 0.5,
            borderRadius: 2,
          }}
        >
          <Search sx={{ mr: 1 }} />
          <InputBase placeholder="Search anything here…" fullWidth />
        </Box>
        <Button variant="outlined" sx={{ ml: 2 }}>App</Button>
        <Button variant="outlined" sx={{ ml: 1 }}>Messages</Button>
        <Button variant="outlined" sx={{ ml: 1 }}>Settings</Button>
      </Toolbar>
    </AppBar>
  );
}
