// components/Steps/ProductInfoForm.js
import React from 'react';
import {
  Paper, Typography, Grid, TextField, MenuItem, Button, Box
} from '@mui/material';

const ProductInfoForm = ({ onNext }) => {
  return (
    <Paper elevation={1} sx={{ maxWidth: 800, mx: 'auto', p: 4, borderRadius: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Product Information
      </Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Name" defaultValue="Off-White" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Weight" defaultValue="42" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth select label="Sizes" defaultValue="Large">
            <MenuItem value="Small">Small</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Large">Large</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth select label="Category" defaultValue="Clothing">
            <MenuItem value="Clothing">Clothing</MenuItem>
            <MenuItem value="Accessories">Accessories</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Description" defaultValue="Some initial bold text" />
        </Grid>
      </Grid>

      <Box textAlign="right" mt={4}>
        <Button variant="contained" onClick={onNext} sx={{ backgroundColor: '#6366f1' }}>
          Next
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductInfoForm;
