import React from 'react';
import {
  Box, Paper, Typography, Avatar, IconButton
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

export default function ProjectCard({ icon, color, title, desc, participants, date }) {
  return (
    <Paper elevation={1} sx={{ p: 2, borderRadius: 3 }}>
      <Box display="flex" justifyContent="space-between" mb={1}>
        <Avatar sx={{ bgcolor: color }}>{icon}</Avatar>
        <IconButton size="small"><MoreVert /></IconButton>
      </Box>
      <Typography fontWeight={600}>{title}</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        {desc}
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="caption">{participants} Participants</Typography>
        <Typography variant="caption">Due: {date}</Typography>
      </Box>
    </Paper>
  );
}
