// EventSidebar.js
import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import EventCard from './EventCard';

const EventSidebar = ({ events }) => {
  return (
    <Paper elevation={2} sx={{ width: 270, p: 2, borderRadius: 2 }}>
      <Typography variant="subtitle1" fontWeight="600">Details Day</Typography>
      <Typography variant="caption" color="textSecondary" mb={2}>
        Don’t miss scheduled events
      </Typography>
      <Stack spacing={1.5} mt={2}>
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Stack>
    </Paper>
  );
};

export default EventSidebar;
