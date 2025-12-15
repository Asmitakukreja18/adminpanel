import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';

const ageData = [
  { age: '10 to 15', sales: 10 },
  { age: '15 to 20', sales: 35 },
  { age: '20 to 25', sales: 30 },
  { age: '25 to 30', sales: 28 },
  { age: '30 to 35', sales: 20 },
  { age: '35 to 40', sales: 10 },
];

export default function AgeChart() {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3, width: '100%',
    minWidth: 400, }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>Sales by Age</Typography>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={ageData}>
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#7b47ff" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
