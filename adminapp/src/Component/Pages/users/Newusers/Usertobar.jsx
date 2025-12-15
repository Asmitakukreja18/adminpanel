import React from 'react';
import { Box, InputBase } from '@mui/material';

const Topbar = () => (
  <Box sx={{ p: 2, borderBottom: '1px solid #eee', bgcolor: '#fff' }}>
    <InputBase
      placeholder="Search anything here..."
      fullWidth
      sx={{ px: 2, py: 1, bgcolor: '#f0f0f5', borderRadius: 2 }}
    />
  </Box>
);

export default Topbar;
