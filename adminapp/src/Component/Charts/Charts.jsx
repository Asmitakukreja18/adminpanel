// src/pages/Charts.jsx
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const lineData = [...Array(20)].map((_, i) => ({ x: i * 25, y: 10 + Math.random() * 20 }));
const barData = [
  { name: 'Jan', uv: 2000, pv: 2400 },
  { name: 'Feb', uv: 2780, pv: 2000 },
  { name: 'Mar', uv: 1890, pv: 2181 },
];
const pieData = [{ name: 'Men', value: 35 }, { name: 'Women', value: 45 }];
const COLORS = ['#8e44fd', '#d2b4f2'];

const Charts = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>Charts</Typography>

      <Grid container spacing={3}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography>Line Chart</Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <Line type="monotone" dataKey="y" stroke="#8e44fd" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography>Pie Chart</Typography>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieData} dataKey="value" innerRadius={60} outerRadius={80} startAngle={180} endAngle={0}>
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <Box display="flex" justifyContent="space-between" px={2}>
                <Typography color="primary">35% Men</Typography>
                <Typography color="secondary">45% Women</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">$860,472.29</Typography>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" stackId="a" fill="#8e44fd" />
                  <Bar dataKey="pv" stackId="a" fill="#d2b4f2" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Gradient Line Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography>Line Chart Gradient</Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <defs>
                    <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8e44fd" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8e44fd" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <Line type="monotone" dataKey="y" stroke="url(#colorLine)" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Charts;
