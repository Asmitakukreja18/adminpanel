import React from 'react';
import {
  Paper, Typography, Grid, TextField, MenuItem, Box
} from '@mui/material';

const EditProductForm = () => {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', my: 4 }}>
      {/* Product Info */}
      <Paper elevation={1} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          Product Information
        </Typography>
        <Grid container spacing={2}>
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
      </Paper>

      {/* Social */}
      <Paper elevation={1} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>
          Social
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Facebook Account" defaultValue="@warner" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Instagram Account" defaultValue="@warner" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="LinkedIn Account" defaultValue="@warner" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Dribble Account" defaultValue="@warner" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Behance Account" defaultValue="@warner" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="UI8 Account" defaultValue="@warner" />
          </Grid>
        </Grid>
      </Paper>

      {/* Pricing */}
      <Paper elevation={1} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Price" defaultValue="$100" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth select label="Currency" defaultValue="USD">
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="SKU" defaultValue="829676239" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Tags" defaultValue="In stock" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default EditProductForm;
