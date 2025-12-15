import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Avatar,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Sidebar from '../../../Home/Dashboard/Sidebar';

const Settings = () => {
  return (
    <Box sx={{ display: 'flex', bgcolor: '#f4f5fa', minHeight: '100vh' }}>
      <Sidebar />

      <Box sx={{ flex: 1, px: 4, py: 4 }}>
        {/* Title Section */}
        <Typography variant="h6" fontWeight="bold" mb={0.5}>
          Setting Details
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Update your photo and personal details here.
        </Typography>

        {/* Action Buttons Top Right */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 2 }}>
          <Button variant="outlined" sx={{ borderRadius: 2 }}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ borderRadius: 2, bgcolor: '#6b3eff' }}>
            Save
          </Button>
        </Box>

        <Grid container spacing={3} alignItems="flex-start">
          {/* Left Form Section */}
          <Grid item xs={12} md={8}>
            <Card variant="outlined" sx={{ borderRadius: 2, width:600 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                  Personal information
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { label: 'Full Name', placeholder: 'Enter first name' },
                    { label: 'Last Name', placeholder: 'Enter last name' },
                    { label: 'Email Address', placeholder: 'Enter email address' },
                    { label: 'Username', placeholder: 'Enter user name' },
                    { label: 'Phone No', placeholder: 'Enter phone no' },
                    { label: 'City', placeholder: 'Enter your city' },
                    { label: 'Country Name', placeholder: 'Enter country name' },
                    { label: 'Zip code', placeholder: 'Enter zip code' },
                  ].map((field, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <TextField
                        fullWidth
                        size="small"
                        label={field.label}
                        placeholder={field.placeholder}
                        variant="outlined"
                      />
                    </Grid>
                  ))}

                  {/* Bio */}
                  <Grid item xs={12}>
                    <Typography variant="body2" gutterBottom>
                      Bio <small style={{ fontSize: '10px', color: '#888' }}>(Write a short introduction)</small>
                    </Typography>
                    <FormControl fullWidth size="small">
                      <Select defaultValue="">
                        <MenuItem value="">Normal text</MenuItem>
                        <MenuItem value="1">Quote</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      variant="outlined"
                      defaultValue="Lorem ipsum, in graphical and textual context, refers to filler text..."
                    />
                  </Grid>

                  {/* Timezone */}
                  <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                      <InputLabel>Timezone</InputLabel>
                      <Select defaultValue="PST" label="Timezone">
                        <MenuItem value="PST">Pacific Standard Time</MenuItem>
                        <MenuItem value="EST">Eastern Standard Time</MenuItem>
                        <MenuItem value="IST">Indian Standard Time</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" gap={2} position="sticky" top={20}>
              {/* Avatar Upload Card */}
              <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                    Your Photo
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar src="/avatar.png" />
                    <Box>
                      <Typography variant="body2">Edit your photo</Typography>
                      <Typography variant="caption" color="primary" sx={{ cursor: 'pointer' }}>
                        Delete / Update
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    mt={2}
                    p={3}
                    border="2px dashed #ccc"
                    textAlign="center"
                    borderRadius="8px"
                    color="#888"
                  >
                    <CloudUploadIcon fontSize="large" sx={{ color: '#aaa' }} />
                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                      Click to upload or drag and drop<br />
                      SVG, PNG, JPG or GIF <br />(max. 800x400px)
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Google Connect */}
              <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" width={24} />
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      sx={{ textTransform: 'none' }}
                      disabled
                    >
                      Connected
                    </Button>
                  </Box>
                  <Typography variant="body2">
                    Use Google to sign in to your account.{' '}
                    <a  style={{ color: '#6b3eff' }}>Click here to learn more.</a>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Settings;
