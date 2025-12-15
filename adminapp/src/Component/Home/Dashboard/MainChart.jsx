import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';

const data = [
  { name: '1', views: 100 },
  { name: '2', views: 200 },
  { name: '3', views: 150 },
  { name: '4', views: 180 },
  { name: '5', views: 130 },
  { name: '6', views: 220 },
];

export default function MainChart() {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Page views per minute</Typography>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="views" fill="url(#colorUv)" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}

