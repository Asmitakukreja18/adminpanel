// pages/NewProduct.js
import React, { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import Sidebar from '../../Home/Dashboard/Sidebar';
import TopBar from './Newproducttopbar';

import ProductInfoForm from './ProductInfoForm';
import MediaUploadStep from './Mediauploadstep';
import SocialForm from './SocialForm';
 import PricingForm from './PricingForm';

const steps = ['Product Info', 'Media', 'Social', 'Pricing'];

const NewProduct = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prev => prev + 1);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <ProductInfoForm onNext={handleNext} />;
      case 1:
        return <MediaUploadStep onNext={handleNext} />;
       case 2:
      return <SocialForm onNext={handleNext} />;
       case 3:
        return <PricingForm />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#f6f6fb', minHeight: '100vh', p: 3 }}
      >
        <TopBar />

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  '& .MuiStepLabel-label': {
                    fontWeight: index === activeStep ? 600 : 400,
                    color: index === activeStep ? '#6366f1' : 'rgba(0,0,0,0.3)',
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {renderStepContent()}
      </Box>
    </Box>
  );
};

export default NewProduct;
