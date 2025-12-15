import React from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField
} from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';

const drawerWidth = 220;

const orders = [
    {
      customer: 'David',
      email: 'david@gmail.com',
      product: 'BKLOG Hoodie',
      id: '#10421',
      status: 'Paid',
      revenue: '243598234',
      date: '12 Jan, 2023',
      avatar: 'D',
      color: '#F28B82',
    },
    {
      customer: 'Warner',
      email: 'warner@gmail.com',
      product: 'MacBook Pro',
      id: '#10422',
      status: 'Canceled',
      revenue: '877712',
      date: '13 Jan, 2023',
      avatar: 'W',
      color: '#81C995',
    },
    {
      customer: 'Smith',
      email: 'smith@gmail.com',
      product: 'Metro Bar Stool',
      id: '#10423',
      status: 'Refunded',
      revenue: '0134729',
      date: '14 Jan, 2023',
      avatar: 'S',
      color: '#A7A9BE',
    },
    {
      customer: 'Devo',
      email: 'devo@gmail.com',
      product: 'Alchimia Chair',
      id: '#10424',
      status: 'Paid',
      revenue: '113213',
      date: '15 Jan, 2023',
      avatar: 'D',
      color: '#F28B82',
    },
    {
      customer: 'Victory',
      email: 'victory@gmail.com',
      product: 'Fendi Gradient Coat',
      id: '#10425',
      status: 'Paid',
      revenue: '634729',
      date: '16 Jan, 2023',
      avatar: 'V',
      color: '#FDD663',
    },
    {
      customer: 'Henry',
      email: 'henry@gmail.com',
      product: 'Off White Cotton',
      id: '#10426',
      status: 'Canceled',
      revenue: '634729',
      date: '17 Jan, 2023',
      avatar: 'H',
      color: '#B9B9B9',
    },
    {
      customer: 'Mark',
      email: 'mark@gmail.com',
      product: 'Y-3 Yohji Yamamoto',
      id: '#10427',
      status: 'Refunded',
      revenue: '634729',
      date: '18 Jan, 2023',
      avatar: 'M',
      color: '#9AD0EC',
    },
    {
      customer: 'Anderson',
      email: 'anderson@gmail.com',
      product: 'Fendi Gradient Coat',
      id: '#10428',
      status: 'Refunded',
      revenue: '113213',
      date: '19 Jan, 2023',
      avatar: 'A',
      color: '#EF9A9A',
    },
    {
      customer: 'John',
      email: 'john@gmail.com',
      product: 'Metro Bar Stool',
      id: '#10429',
      status: 'Paid',
      revenue: '877712',
      date: '20 Jan, 2023',
      avatar: 'J',
      color: '#9575CD',
    },
    {
      customer: 'Duplesis',
      email: 'duplesis@gmail.com',
      product: 'MacBook Pro',
      id: '#10430',
      status: 'Canceled',
      revenue: '0134729',
      date: '21 Jan, 2023',
      avatar: 'D',
      color: '#AED581',
    },
    {
      customer: 'Miz',
      email: 'miz@gmail.com',
      product: 'BKLOG Hoodie',
      id: '#10431',
      status: 'Canceled',
      revenue: '877712',
      date: '22 Jan, 2023',
      avatar: 'M',
      color: '#FFD54F',
    },
    {
      customer: 'Watson',
      email: 'watson@gmail.com',
      product: 'Alchimia Chair',
      id: '#10432',
      status: 'Refunded',
      revenue: '243598234',
      date: '23 Jan, 2023',
      avatar: 'W',
      color: '#90CAF9',
    },
  ];
  

const statusColor = {
  Paid: 'success',
  Canceled: 'error',
  Refunded: 'info',
};

const OrderListPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
<Sidebar/>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#f6f6fb' }}>
        {/* Topbar */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: 'white',
            boxShadow: 'none',
            mb: 4,
            px: 2,
          }}
        >
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ color: '#6366f1' }}>
              Order List
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <TextField
              placeholder="Search anything here..."
              size="small"
              sx={{
                backgroundColor: '#f0f0f0',
                borderRadius: 1,
                width: 250,
              }}
            />
          </Toolbar>
        </AppBar>

        {/* Table */}
        <Paper elevation={1} sx={{ borderRadius: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Revenue</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: order.color,
                            fontSize: 14,
                            mr: 1,
                          }}
                        >
                          {order.avatar}
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 500 }}>
                            {order.customer}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'gray', fontSize: 12 }}
                          >
                            {order.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>
                      <Chip
                        label={order.status}
                        color={statusColor[order.status]}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{order.revenue}</TableCell>
                    <TableCell>{order.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderListPage;
