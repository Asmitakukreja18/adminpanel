import React, { useState } from 'react';
import {
  Box, Typography, Avatar, TextField, Grid, Paper, Button,
  Stepper, Step, StepLabel, IconButton, Card, CardContent, MenuItem
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import GroupsIcon from '@mui/icons-material/Groups';

const activityOptions = ['Design', 'Develop', 'Code', 'Design', 'Develop', 'Code'];

const WizardForm = () => {
  const [step, setStep] = useState(0);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [formData, setFormData] = useState({
    streetName: 'Soft',
    streetNo: '197',
    city: 'Berlin',
    country: 'Germany',
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleCardToggle = (value) => {
    setSelectedActivities((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box p={4}>
      {/* Stepper */}
      <Stepper activeStep={step} alternativeLabel>
        {['About', 'Account', 'Address'].map((label, index) => (
          <Step key={label}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  color: step === index ? 'purple' : 'gray',
                  fontWeight: step === index ? 600 : 400,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step 1 */}
      {step === 0 && (
        <Paper elevation={2} sx={{ p: 4, mt: 4, borderRadius: 2, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h6" textAlign="center">
            Let’s start with the basic information
          </Typography>
          <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
            Let us know your name and email address. Use an address you don’t mind other users contact you at
          </Typography>

          <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
            <Box position="relative">
              <Avatar
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                sx={{ width: 72, height: 72 }}
              />
              <IconButton size="small" sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: 'white',
                boxShadow: 1,
              }}>
                <EditIcon fontSize="small" sx={{ color: 'purple' }} />
              </IconButton>
            </Box>
            <Box ml={2}>
              <Typography variant="body1">Profile photo</Typography>
              <Typography variant="caption" color="text.secondary">
                This will be displayed on your profile.
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}><TextField fullWidth label="First name" defaultValue="Kane" /></Grid>
            <Grid item xs={12} md={6}><TextField fullWidth label="Last name" defaultValue="Williamson" /></Grid>
            <Grid item xs={12} md={6}><TextField fullWidth label="Email Address" defaultValue="kanewilliamson@gmail.com" /></Grid>
            <Grid item xs={12} md={6}><TextField fullWidth label="Date of Birth" defaultValue="25/01/2001" /></Grid>
            <Grid item xs={12} md={6}><TextField fullWidth label="City" defaultValue="Berlin, Germany" /></Grid>
            <Grid item xs={12} md={6}><TextField fullWidth label="Postal code" defaultValue="87532" /></Grid>
          </Grid>

          <Box textAlign="right" mt={4}>
            <Button variant="contained" sx={{ backgroundColor: 'purple' }} onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Paper>
      )}

      {/* Step 2 */}
      {step === 1 && (
        <Paper elevation={2} sx={{ p: 4, mt: 4, borderRadius: 2, maxWidth: 800, mx: 'auto' }}>
          <Typography variant="h6" textAlign="center">
            What are you doing? (checkboxes)
          </Typography>
          <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
            Give us more detail about you. What do you enjoy doing in your spare time?
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {activityOptions.map((item, idx) => {
              const uniqueKey = item + idx;
              const selected = selectedActivities.includes(uniqueKey);
              return (
                <Grid item xs={4} key={uniqueKey}>
                  <Card
                    onClick={() => handleCardToggle(uniqueKey)}
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      border: selected ? '2px solid #9155FD' : '1px solid #ddd',
                      boxShadow: selected ? '0 0 0 2px rgba(145,85,253,0.1)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent>
                      <GroupsIcon sx={{ fontSize: 30, color: '#9155FD', mb: 1 }} />
                      <Typography fontWeight={600}>{item}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button variant="outlined" onClick={handleBack}>Back</Button>
            <Button variant="contained" sx={{ backgroundColor: '#9155FD' }} onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Paper>
      )}

      {/* Step 3 */}
      {step === 2 && (
        <Paper elevation={2} sx={{ p: 4, mt: 4, borderRadius: 2, maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h6" textAlign="center">Are you living in nice area?</Typography>
          <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
            One thing I love about the later sunsets is the chance to go for a walk<br />
            through the neighborhood woods before dinner
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Street name"
                name="streetName"
                value={formData.streetName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Street no"
                name="streetNo"
                value={formData.streetNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                {['Germany', 'India', 'USA', 'Canada'].map((c) => (
                  <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Box textAlign="right" mt={4}>
            <Button variant="contained" sx={{ backgroundColor: 'purple' }}>
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default WizardForm;
