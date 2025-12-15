import React from 'react';
import { Box, Typography, Button, CardMedia } from '@mui/material';

const PaymentMethodCard = () => (
  <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2, flex: 1 }}>
    <Typography fontWeight={600}>Payment method</Typography>
    <Typography variant="body2" color="text.secondary" mb={2}>Change how you pay for your plan.</Typography>

    <Box display="flex" alignItems="center" justifyContent="space-between" bgcolor="#f0f0f5" p={2} borderRadius={1}>
      <Box>
        <Typography fontWeight={500}>💳 Visa ending in 6789</Typography>
        <Typography variant="caption" color="text.secondary">Expiry 01/2023</Typography>
      </Box>
      <Button variant="contained" color="primary">Edit</Button>
    </Box>
  </Box>
);

export default PaymentMethodCard;
