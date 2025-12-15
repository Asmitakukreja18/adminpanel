import React from 'react';
import { Box, Typography, Grid, Card, CardContent, InputBase, IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import Sidebar from '../../../Home/Dashboard/Sidebar';
ChartJS.register(CategoryScale, LinearScale, BarElement);

const Usersreports = () => {
  const barData = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
    datasets: [
      {
        label: 'Sales',
        data: [120, 150, 80, 60, 190, 100, 200, 150, 250, 130, 300],
        backgroundColor: '#a78bfa',
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const smallBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Amount',
        data: [2, 3.5, 4.2, 3, 4.5],
        backgroundColor: '#6d28d9',
        borderRadius: 10,
        barThickness: 20,
      },
    ],
  };

  const chartOptions = {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
  };

  return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f6f7fb' }}>
   <Sidebar /> 
   
  <Box sx={{ flexGrow: 1, px: 4, py: 3 }}>

     
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
     
        <Typography variant="h6" color="primary">Users/Reports</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 2,
            boxShadow: 1,
            width: 300,
          }}
        >
          <InputBase placeholder="Search anything here..." sx={{ flex: 1 }} />
          <IconButton size="small">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {[
          { label: 'Payment', value: '$8,098.32' },
          { label: 'Loan income', value: '$901,256.01' },
          { label: 'Gross amount', value: '$987,256.98' },
          { label: 'Jobs create', value: '$564,164.57' },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.value}</Typography>
                <Typography color="text.secondary">{item.label}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ mt: 3  ,width:'100%' }}  >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
              <Typography fontWeight={500}>Statistics</Typography>
              <Typography variant="h6">Sales closed</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Typography variant="body2" color="text.secondary">Month</Typography>
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          </Box>
          <Bar data={barData} options={chartOptions} height={100} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            {['T', 'M', 'P', 'H', 'J', 'L', 'W', 'A', 'K'].map((char, idx) => (
              <Avatar key={idx} sx={{ mx: 0.5, width: 32, height: 32, fontSize: 14 }}>{char}</Avatar>
            ))}
          </Box>
        </CardContent>
      </Card>

      <Grid container spacing={2} sx={{ mt: 2 }}>
     <Grid item xs={12} md={6} lg={6.5}>

          <Card>
            <CardContent width={100}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Payments</Typography>
                  <Typography variant="h6">$7,124.80</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <Typography variant="body2" color="text.secondary">Month</Typography>
                  <KeyboardArrowDownIcon fontSize="small" />
                </Box>
              </Box>
              <Bar data={smallBarData} options={chartOptions} height={150} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={5.5}>

          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Loan income</Typography>
                  <Typography variant="h6">$860,472.29</Typography>
                </Box>
              </Box>
              <Bar data={smallBarData} options={chartOptions} height={150} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
};

export default Usersreports;
