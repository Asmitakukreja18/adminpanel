
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const EventCard = ({ event }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderLeft: `4px solid ${event.color}`,
        p: 1.5,
        borderRadius: 2,
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="subtitle2" fontWeight={600}>
        {event.title}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {event.location}
      </Typography>
      <Box display="flex" alignItems="center" mt={0.5}>
        <CalendarMonthIcon fontSize="small" sx={{ mr: 0.5, color: 'gray' }} />
        <Typography variant="caption">{new Date(event.date).toDateString()}</Typography>
      </Box>
      <Box
        mt={0.5}
        sx={{
          fontSize: '10px',
          backgroundColor: event.color,
          borderRadius: '4px',
          width: 'fit-content',
          px: 1,
          py: 0.25,
          color: '#fff',
        }}
      >
        12pm to 2pm
      </Box>
    </Paper>
  );
};

export default EventCard;
