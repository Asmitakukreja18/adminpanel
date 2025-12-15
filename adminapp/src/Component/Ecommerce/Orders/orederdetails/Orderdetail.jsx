import React from 'react';
import { Box, Typography, Grid, Paper, Button, Avatar, Divider, Chip, Rating } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import Topbar from '../../../Pages/Profiles/Allprojects/NewProjectstopbar';

const OrderDetailPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />

        {/* Stepper */}
        <Box sx={{ mt: 4, ml: 4 }}>
          <Typography variant="h5" gutterBottom>Order List</Typography>
          <Box sx={{ display: 'flex', gap: 4, mb: 3 }}>
            {['Order received', 'Order generate', 'Order transmited', 'Order delivered'].map((label, i) => (
              <Box key={i} sx={{ textAlign: 'center' }}>
                <Chip label={`${i + 1}`} color="primary" />
                <Typography variant="body2" mt={1}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Main Card */}
        <Paper sx={{ mx: 4, p: 3, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Box>
              <Typography variant="subtitle2">Order no:</Typography>
              <Typography variant="body1">EL-5414587</Typography>
              <Typography variant="subtitle2" sx={{ mt: 1 }}>From:</Typography>
              <Typography variant="body1">25 Dec, 2022</Typography>
              <Typography variant="subtitle2" sx={{ mt: 1 }}>Code:</Typography>
              <Typography variant="body1">EL005</Typography>
            </Box>
            <Button variant="contained" sx={{ backgroundColor: '#7A49FF' }}>
              Invoice
            </Button>
          </Box>

          {/* Grid Boxes */}
          <Grid container spacing={2}>
            {/* Product Detail */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>Product detail</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src="https://via.placeholder.com/64" sx={{ width: 56, height: 56 }} />
                  <Box>
                    <Typography>Camera</Typography>
                    <Typography color="text.secondary">$200</Typography>
                    <Typography variant="caption" color="text.secondary">Order was delivered 2 days ago</Typography>
                    <Typography variant="body2" color="green">Delivered</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Billing Information */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>Billing Information</Typography>
                <Typography>Oliver Liam</Typography>
                <Typography variant="body2" color="text.secondary">Company Name: Viking Burrito</Typography>
                <Typography variant="body2" color="text.secondary">Email Address: Oliver-viking@burrito.com</Typography>
                <Typography variant="body2" color="text.secondary">VAT Number: FRB1235476</Typography>
              </Paper>
            </Grid>

            {/* Payment Detail */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>Payment detail</Typography>
                <Typography>Master Card</Typography>
                <Typography variant="body2" color="text.secondary">Master 1234 **** 58745</Typography>
                <Typography variant="body2" color="text.secondary">Expire 12/23</Typography>
                <Typography variant="body2">Alden Max</Typography>
                <Box sx={{ mt: 1 }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MC" width={40} />
                </Box>
              </Paper>
            </Grid>

            {/* Order Summary */}
            <Grid item xs={12} md={6} lg={4}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>Order Summary</Typography>
                <Typography>Product Price: $200</Typography>
                <Typography>Delivery: $10</Typography>
                <Typography>Taxes: $20</Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="h6">Total: $230</Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" gutterBottom>Do you like the product? Leave us a review here:</Typography>
                <Rating defaultValue={4} />
                <Button size="small" sx={{ textTransform: 'none', mt: 1 }}>Submit</Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default OrderDetailPage;
