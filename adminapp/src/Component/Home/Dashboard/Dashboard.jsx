import React from 'react';
import {
  Box, Grid, Typography, Paper, Button, List, ListItem,
  ListItemAvatar, ListItemText, Avatar
} from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import PeopleIcon from '@mui/icons-material/People';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CategoryIcon from '@mui/icons-material/Category';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

const Dashboard = () => {
const statItems = [
  { icon: <PeopleIcon />, label: "Users", value: "35k", color: "#7b47ff" },
  { icon: <TouchAppIcon />, label: "Clicks", value: "1m", color: "#44e0a4" },
  { icon: <ShoppingCartIcon />, label: "Sales", value: "345$", color: "#f87171" },
  { icon: <InsertChartIcon />, label: "Items", value: "68", color: "#38bdf8" },
];


  const items = [
    { title: "Bento 3D Kit", type: "Illustration", color: "#a083ff" },
    { title: "Bento 3D Kit", type: "Coded Template", color: "#8df89d" },
    { title: "Bento 3D Kit", type: "Illustration", color: "#ff7373" },
  ];

  const ageData = Array.from({ length: 10 }, (_, i) => ({
    age: `${10 + i * 5}`,
    sales: Math.floor(Math.random() * 30) + 10
  }));

  const barData = [
    { name: 'Mon', views: 10 },
    { name: 'Tue', views: 22 },
    { name: 'Wed', views: 35 },
    { name: 'Thu', views: 18 },
  ];

  return (
    <Box sx={{ display: 'flex', bgcolor: '#f6f7fb', minHeight: '100vh' }}>
      <Box sx={{ width: 80 }}>
        <Sidebar />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Navbar />

        <Box sx={{ px: 4, py: 2 }} ml={20}>
          <Grid container spacing={3}>
            {/* Left Panel */}
            <Grid item xs={12} md={8} lg={9} sx={{ width: 730 }}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
  <Typography variant="subtitle1" fontWeight={500} color="text.secondary" mb={1}>
    Active users right now
  </Typography>

  <Grid container spacing={2}>
    {/* LEFT SIDE TEXT */}
    <Grid item xs={12} sm={4}>
      <Typography variant="h3" fontWeight={700}>300</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Page views per minute
      </Typography>

      <Box
        sx={{
          width: '100%',
          height: 60,
          backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/1828/1828817.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Typography variant="caption" color="text.secondary" mt={2} display="block">
        Upgrade your payout method in setting
      </Typography>
    </Grid>

    {/* RIGHT SIDE BAR CHART GRADIENT */}
<Grid item xs={12} sm={8}>
  <Box
    sx={{
      width: '60vh',
      height: 130,
      borderRadius: 2,
      background: 'linear-gradient(135deg, #a084f3, #c084fc)',
      position: 'relative',
      px: 2,
      py: 1,
    }}
  >
    {/* Horizontal dashed lines */}
    {[30, 60, 90, 120, 150].map((top, i) => (
      <Box
        key={i}
        sx={{
          position: 'absolute',
          top: top,
          left: 0,
          width: '100vh',
          borderTop: '1px dashed rgba(255,255,255,0.5)',
        }}
      />
    ))}

    {/* White bars like a chart */}
    {Array.from({ length: 8 }).map((_, i) => {
      const height = 40 + Math.floor(Math.random() * 60);
      return (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            bottom: 10,
            left: `calc(${i * 12}% + 10px)`,
            width: 8,
            height: `${height}px`,
            backgroundColor: 'white',
            borderRadius: 2,
          }}
        />
      );
    })}
  </Box>
</Grid>
</Grid>

  {/* STAT CARDS BELOW */}
  <Grid container spacing={2} mt={3}>
    {statItems.map((item, index) => (
      <Grid item xs={6} sm={3} key={index}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 2,
            border: '1px solid #eee',
            textAlign: 'center',
            bgcolor: '#fff',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>{item.icon}</Box>
          <Typography variant="body2" fontWeight={500}>{item.label}</Typography>
          <Typography variant="h6" fontWeight={600} color={item.color}>{item.value}</Typography>
          <Box sx={{ height: 3, mt: 1, borderRadius: 5, backgroundColor: item.color }} />
        </Paper>
      </Grid>
    ))}
  </Grid>
</Paper>


              <Paper elevation={1} sx={{ mt: 3, p: 2, borderRadius: 3 }}>
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
            </Grid>

            {/* Right Panel */}
            <Grid item xs={12} md={9} lg={3} display="flex" flexDirection="column" gap={3}ml={1}>
              <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                <Typography fontWeight={600}>Your earning this month</Typography>
                <Typography variant="h4" color="#2563eb" mt={1}>735.2$</Typography>
                <Typography variant="body2" color="text.secondary">Update your payout method in Setting</Typography>
                <Button variant="outlined" fullWidth sx={{ mt: 2 }}>Withdraw All Earnings</Button>
              </Paper>

              <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                <Typography fontWeight={600}>Earnings by item</Typography>
                <List>
                  {items.map((item, index) => (
                    <ListItem key={index} secondaryAction={<ArrowForwardIosIcon fontSize="small" />}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: item.color }}>
                          <CategoryIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.title} secondary={item.type} />
                    </ListItem>
                  ))}
                </List>
              </Paper>

              <Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
                <Typography fontWeight={600}>Impression</Typography>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#7b47ff" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
