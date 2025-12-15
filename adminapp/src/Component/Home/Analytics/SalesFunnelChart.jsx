import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

const data = [
  { day: 11, sales: 45000 },
  { day: 12, sales: 50000 },
  { day: 13, sales: 55000 },
  { day: 14, sales: 60000 },
  { day: 15, sales: 62000 },
  { day: 16, sales: 80000 }, 
  { day: 17, sales: 62000 },
];

export default function SalesFunnelChart() {
  return (
    <Paper elevation={1} sx={{ p: 2, mt: 3 ,width: '90%',
    minWidth: 700, }}>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>Sales Funnel</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8e44ad" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
