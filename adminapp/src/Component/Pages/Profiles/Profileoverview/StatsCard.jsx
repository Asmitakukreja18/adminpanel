import { Grid, Paper, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const stats = [
  { label: 'Average Likes', value: 635, change: '+21.01%', trend: 'up' },
  { label: 'Comments received', value: 123, change: '+4.39%', trend: 'up' },
  { label: 'Av. Engagement rate', value: '23%', change: '-7.9%', trend: 'down' },
];

export default function StatsCards() {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {stats.map((item, idx) => (
        <Grid item xs={12} sm={4} key={idx}>
          <Paper elevation={2} sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Typography variant="h6" fontWeight="bold">{item.value}</Typography>
              <Typography variant="body2" color="text.secondary">{item.label}</Typography>
            </div>
            <Typography color={item.trend === 'up' ? 'green' : 'red'} fontWeight="medium">
              {item.change} {item.trend === 'up' ? <TrendingUpIcon fontSize="small" /> : <TrendingDownIcon fontSize="small" />}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
