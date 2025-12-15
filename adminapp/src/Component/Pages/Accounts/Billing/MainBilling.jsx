import React from 'react';
import { Box, Typography } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import Topbar from './BillingTopbar';
import PlanCard from './PlanCard';
import PaymentMethodCard from './PaymentMethodCard';
import BillingTable from './BillingTable';

const MainBilling = () => (
  <Box sx={{ display: 'flex' }}>
    <Sidebar />
    <Box sx={{ flexGrow: 1, bgcolor: '#f6f6fc', minHeight: '100vh' }}>
      <Topbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="subtitle2" color="primary" mb={2}>Account / Billing</Typography>
        <Typography variant="h6" fontWeight={600} mb={1}>Plans and billing</Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>Manage your plan and billing details</Typography>

        <Box display="flex" mb={3}>
          <PlanCard />
          <PaymentMethodCard />
        </Box>
        <BillingTable />
      </Box>
    </Box>
  </Box>
);

export default MainBilling;
