import React from 'react';
import { Box, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['User Info', 'Address', 'Socials', 'Profile'];

const UserStepper = () => (
  <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2, mb: 3 }}>
    <Stepper activeStep={0} alternativeLabel>
      {steps.map((label, idx) => (
        <Step key={idx}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  </Box>
);

export default UserStepper;
