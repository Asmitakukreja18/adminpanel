import { Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '25.02', likes: 200, comments: 180 },
  { date: '26.02', likes: 150, comments: 120 },
  { date: '27.02', likes: 220, comments: 170 },
  { date: '28.02', likes: 180, comments: 140 },
  { date: '29.02', likes: 160, comments: 130 },
];

export default function InteractionChart() {
  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2 ,width: '90%',
    minWidth: 400, }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={2}>Interaction</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="likes" stroke="#2196f3" />
          <Line type="monotone" dataKey="comments" stroke="#f50057" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
