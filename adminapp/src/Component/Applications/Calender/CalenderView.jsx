// CalendarView.js
import React from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventSidebar from './EventSidebar';

const events = [
  { title: 'Festival', date: '2022-01-04', location: 'Berlin', color: '#00bcd4' },
  { title: 'Exam', date: '2022-01-04', location: 'France', color: '#4caf50' },
  { title: 'Eid festival', date: '2022-01-05', location: 'Germany', color: '#f44336' },
  { title: 'Conference', date: '2022-01-08', location: 'UK', color: '#00bcd4' },
  { title: 'Design Review', date: '2022-01-09', location: 'Berlin', color: '#ff9800' },
  { title: 'Glastobury', date: '2022-01-21', location: 'Sweden', color: '#ff9800' },
  { title: 'Sport', date: '2022-01-22', location: 'Switzerland', color: '#f44336' },
  { title: 'Weekend festival', date: '2022-01-06', color: '#e0f7fa' },
  { title: 'Design conference', date: '2022-01-20', color: '#ce93d8' },
];

const CalendarView = () => {
  return (
    <Box sx={{ display: 'flex', p: 2 }}>
      <EventSidebar events={events} />

      <Paper elevation={2} sx={{ flexGrow: 1, ml: 2, borderRadius: 2, p: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" fontWeight="600" color="purple">January 2022</Typography>
          <Typography variant="body2" color="textSecondary">Sort By: Month</Typography>
        </Box>
        <Divider sx={{ mb: 2 }} />

        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate="2022-01-01"
          headerToolbar={false}
          events={events}
          height="auto"
        />
      </Paper>
    </Box>
  );
};

export default CalendarView;
