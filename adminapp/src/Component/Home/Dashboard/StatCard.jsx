// src/components/StatCard.jsx
import { Box, Paper, Typography } from '@mui/material';

export default function StatCard({ label, value, color }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        flex: 1,
        borderRadius: 3,
        borderBottom: `4px solid ${color}`,
        bgcolor: '#fff',
      }}
    >
      <Typography variant="body2" sx={{ color: 'gray' }}>
        {label}
      </Typography>
      <Typography variant="h5" sx={{ mt: 1 }}>
        {value}
      </Typography>
    </Paper>
  );
}
