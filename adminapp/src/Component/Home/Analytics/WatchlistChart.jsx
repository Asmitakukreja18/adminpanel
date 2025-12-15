import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box, ButtonGroup, Button } from '@mui/material';

const data = [
  { name: 'Mon', views: 200, watch: 100 },
  { name: 'Tue', views: 340, watch: 160 },
  { name: 'Wed', views: 300, watch: 140 },
];

export default function WatchlistChart() {
  return (
    <Paper elevation={1} sx={{ p: 2, mt: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1">Watchlists</Typography>
        <ButtonGroup size="small">
          <Button>Day</Button>
          <Button>Week</Button>
          <Button>Month</Button>
        </ButtonGroup>
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorView" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00c853" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#00c853" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="views" stroke="#00c853" fillOpacity={1} fill="url(#colorView)" />
        </AreaChart>
      </ResponsiveContainer>
    </Paper>
  );
}
