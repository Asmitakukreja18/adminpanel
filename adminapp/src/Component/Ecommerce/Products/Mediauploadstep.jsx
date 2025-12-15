// components/Steps/MediaUploadStep.js
import React from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Container
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const UploadBox = styled(Box)(({ theme }) => ({
  border: '2px dashed #ccc',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(6),
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  cursor: 'pointer',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

export default function MediaUploadStep({ onNext }) {
  return (
    <Container maxWidth="md">
      <Paper elevation={1} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Media
        </Typography>

        <UploadBox>
          <CloudUploadIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
          <Typography variant="body1">
            Drop your image here or{' '}
            <Typography
              component="span"
              color="primary"
              sx={{ fontWeight: 500, cursor: 'pointer' }}
            >
              Browse
            </Typography>
          </Typography>
          <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
            Support: JPG, JPEG, PNG
          </Typography>
        </UploadBox>

        <Box textAlign="right" mt={4}>
          <Button variant="contained" onClick={onNext} sx={{ backgroundColor: '#6366f1' }}>
            Next
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
