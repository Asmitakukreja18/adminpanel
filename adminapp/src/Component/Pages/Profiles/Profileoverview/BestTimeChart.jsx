import { Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', value: 20 },
  { day: 'Tue', value: 50 },
  { day: 'Wed', value: 40 },
  { day: 'Thu', value: 60 },
  { day: 'Fri', value: 100 },
  { day: 'Sat', value: 30 },
  { day: 'Sun', value: 10 },
];

export default function BestTimeChart() {
  return (
    <Paper elevation={5} sx={{ p: 2, mb: 2 ,width: '90%',
    minWidth: 800, }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>Best time</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#7c4dff" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
