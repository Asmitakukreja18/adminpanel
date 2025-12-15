// WizardStepTwo.js
import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Icon } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

const options = [
  'Design', 'Develop', 'Code',
  'Design', 'Develop', 'Code',
  'Design', 'Develop', 'Code',
];

const WizardStepTwo = ({ onNext }) => {
  const [selected, setSelected] = useState([]);

  const handleToggle = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((val) => val !== item)
        : [...prev, item]
    );
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h6" fontWeight="600">What are you doing? (checkboxes)</Typography>
        <Typography variant="body2" color="textSecondary" mt={1}>
          Give us more detail about you. What do you enjoy doing in your spare time?
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {options.map((option, index) => (
          <Grid item xs={4} key={index}>
            <Card
              onClick={() => handleToggle(option + index)}
              sx={{
                cursor: 'pointer',
                border: selected.includes(option + index)
                  ? '2px solid #9155FD'
                  : '1px solid #e0e0e0',
                boxShadow: selected.includes(option + index)
                  ? '0 0 0 2px rgba(145,85,253,0.2)'
                  : 'none',
                textAlign: 'center',
                p: 2,
                borderRadius: 2,
                transition: 'all 0.3s ease',
              }}
            >
              <CardContent>
                <GroupsIcon sx={{ color: '#9155FD', fontSize: 30, mb: 1 }} />
                <Typography variant="subtitle1" fontWeight="600">
                  {option}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={4} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{ backgroundColor: '#9155FD', textTransform: 'none' }}
          onClick={onNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default WizardStepTwo;
