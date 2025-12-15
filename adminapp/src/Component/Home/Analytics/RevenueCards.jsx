import { Box, Grid, Typography, Paper } from '@mui/material';

const stats = [
  { title: 'Available to withdraw', value: '$1,567.99', change: '↑ 10.0%', color: 'green' },
  { title: 'Today Revenue', value: '$2,868.99', change: '↓ 3.0%', color: 'red' },
  { title: 'Today Sessions', value: '156k', change: '↑ 3.2%', color: 'green' },
  { title: 'Subscribers', value: '3,422', change: '↑ 8.3%', color: 'blue' }
];

export default function RevenueCards() {
  return (
    <Grid container spacing={2}>
      {stats.map((item, index) => (
        <Grid item xs={12} md={3} key={index}>
          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2">{item.title}</Typography>
            <Typography variant="h6">{item.value}</Typography>
            <Typography variant="caption" color={item.color}>
              {item.change}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
