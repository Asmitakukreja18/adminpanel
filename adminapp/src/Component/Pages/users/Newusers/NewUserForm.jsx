import React from 'react';
import {
  Box, Typography, Grid, TextField, Button
} from '@mui/material';

const NewUserForm = () => (
  <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 2 }}>
    <Typography variant="h6" fontWeight={600} mb={1}>About me</Typography>
    <Typography variant="body2" mb={3}>Mandatory information</Typography>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="First name" placeholder="eg. Malik" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Last Name" placeholder="eg. Ali" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Company" placeholder="eg. TeamUXD" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Email Address" placeholder="eg. Team@gmail.com" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Password" type="password" defaultValue="ma564k90" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth label="Repeat password" type="password" defaultValue="ma564k90" variant="outlined" />
      </Grid>
    </Grid>

    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
      <Button variant="contained" color="primary">Next</Button>
    </Box>
  </Box>
);

export default NewUserForm;
