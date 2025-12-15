import { Box, Grid, Card, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import Topbar from './Securitytopbar';
import DeviceCard from './DiviceCard';

export default function SecuritySettings() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Box sx={{ p: 4 }}>
          <Typography variant="h6" color="primary">Account/Security</Typography>
          <Typography variant="h5" sx={{ mt: 1, mb: 3 }}>Security Setting</Typography>

          <Grid container spacing={3}>
            {/* Password Section */}
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6">Password</Typography>
                <Typography variant="body2" mb={2}>
                  The Last Pass password generator creates random passwords based on parameters set by you.
                </Typography>
                <TextField fullWidth label="Current password" margin="normal" />
                <TextField fullWidth label="New password" margin="normal" />
                <TextField fullWidth label="Confirm password" margin="normal" />

                <Card sx={{ p: 2, mt: 2, backgroundColor: '#f9fafb' }}>
                  <Typography variant="subtitle2" gutterBottom>Rules for password</Typography>
                  <List dense>
                    <ListItem><ListItemText primary="Minimum 8 characters" /></ListItem>
                    <ListItem><ListItemText primary="At least one special character" /></ListItem>
                    <ListItem><ListItemText primary="At least one number" /></ListItem>
                    <ListItem><ListItemText primary="Can't be the same as previous" /></ListItem>
                  </List>
                </Card>
              </Card>
            </Grid>

            {/* Devices Section */}
            <Grid item xs={12} md={5}>
              <DeviceCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
