import { Grid, Box } from '@mui/material';
import RevenueCards from './RevenueCards';
import SalesFunnelChart from './SalesFunnelChart';
import WatchlistChart from './WatchlistChart';
import DeviceCategory from './DeviceCategory';
import TopCountries from './TopCountries';
import Navbar from '../Dashboard/Navbar';
import Sidebar from '../Dashboard/Sidebar';

export default function AnalyticsPage() {
  return (
    <Box p={3}ml={30}>
      <Sidebar />
            <Box component="main" sx={{  p: 3 }} mr={50}>
              <Navbar /> 
              </Box>
      <RevenueCards />
     
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <SalesFunnelChart />
          <WatchlistChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <DeviceCategory />
          <TopCountries />
        </Grid>
      </Grid>
    </Box>
  );
}
