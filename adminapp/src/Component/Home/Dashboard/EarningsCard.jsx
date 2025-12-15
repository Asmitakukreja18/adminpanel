import React from 'react';
import { Paper, Typography, Button } from '@mui/material';

export default function EarningsCard() {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="subtitle2" color="textSecondary">
        Your earning this month
      </Typography>
      <Typography variant="h4" color="primary" fontWeight="bold">
        735.2$
      </Typography>
      <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
        Update your payout method in Setting
      </Typography>
      <Button variant="outlined" sx={{ mt: 2 }} size="small">
        Withdraw All Earnings
      </Button>
    </Paper>
  );
}
