import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Box
} from '@mui/material';

const PricingForm = ({ onNext }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        maxWidth: 800,
        mx: 'auto',
        p: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Pricing
      </Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Price" defaultValue="$100" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            select
            label="Currency"
            defaultValue="USD"
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="SKU" defaultValue="829676239" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Tags" defaultValue="In stock" />
        </Grid>
      </Grid>

      <Box textAlign="right" mt={4}>
        <Button variant="contained" sx={{ backgroundColor: '#6366f1' }} onClick={onNext}>
          Next
        </Button>
      </Box>
    </Paper>
  );
};

export default PricingForm;
