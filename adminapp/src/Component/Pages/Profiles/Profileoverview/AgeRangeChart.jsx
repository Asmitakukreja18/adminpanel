import { Paper, Typography } from '@mui/material';

export default function AgeRangeCard() {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>Age range</Typography>
      <Typography variant="body2">All</Typography>
    </Paper>
  );
}
