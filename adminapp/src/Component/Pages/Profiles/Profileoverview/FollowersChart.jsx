import { Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '25.02', income: 400000, outcome: 320000 },
  { date: '26.02', income: 420000, outcome: 300000 },
  { date: '27.02', income: 500000, outcome: 280000 },
  { date: '28.02', income: 450000, outcome: 250000 },
  { date: '29.02', income: 300000, outcome: 200000 },
];

export default function FollowersChart() {
  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2,width: '90%',
    minWidth: 400,  }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>Followers</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#f44336" />
          <Line type="monotone" dataKey="outcome" stroke="#673ab7" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
