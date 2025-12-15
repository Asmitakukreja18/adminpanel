import React from 'react';
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Button
} from '@mui/material';

const SocialForm = ({ onNext }) => {
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
        Social
      </Typography>

      <Grid container spacing={2} mt={2}>
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

      <Box textAlign="right" mt={4}>
        <Button variant="contained" sx={{ backgroundColor: '#6366f1' }} onClick={onNext}>
          Next
        </Button>
      </Box>
    </Paper>
  );
};

export default SocialForm;
