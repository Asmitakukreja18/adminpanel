import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const NewProjectForm = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f5f6fa', minHeight: '100vh' }}>
      <Typography variant="subtitle2" color="primary" mb={2}>
        Project / New project
      </Typography>

      <Paper elevation={0} sx={{ p: 4, borderRadius: 3, bgcolor: '#fff' }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          New project
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Create new project
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField label="Project Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Project Title" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Project Tags</InputLabel>
              <Select defaultValue="choice1" label="Project Tags">
                <MenuItem value="choice1">Choice 1</MenuItem>
                <MenuItem value="choice2">Choice 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} />

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="Start Date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="date"
              label="End Date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Upload File Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                border: '2px dashed #9c27b0',
                p: 4,
                textAlign: 'center',
                borderRadius: 2,
                color: '#9c27b0',
                backgroundColor: '#fef9ff',
              }}
            >
              <CloudUploadIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography>
                <span style={{ color: '#673ab7', fontWeight: 500 }}>
                  Click to upload
                </span>{' '}
                or drag and drop
              </Typography>
              <Typography variant="body2" color="text.secondary">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Typography>
            </Box>
          </Grid>

          {/* Buttons */}
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="outlined" color="secondary">
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Create project
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default NewProjectForm;
