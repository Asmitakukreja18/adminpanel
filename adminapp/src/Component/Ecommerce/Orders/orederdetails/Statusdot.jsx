import React from 'react';
import { Box } from '@mui/material';

const StatusDot = ({ color = 'gray' }) => (
  <Box
    sx={{
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: color,
      display: 'inline-block',
      mr: 1,
    }}
  />
);

export default StatusDot;
