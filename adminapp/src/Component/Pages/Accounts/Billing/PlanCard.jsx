import React from 'react';
import { Box, Typography, AvatarGroup, Avatar, Button } from '@mui/material';

const PlanCard = () => (
  <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2, flex: 1, mr: 2 }}>
    <Typography fontWeight={600}>Basic plan</Typography>
    <Typography variant="body2" color="text.secondary" mb={2}>
      Our most popular plan for small teams.
    </Typography>
    <Typography fontWeight={600} fontSize={24}>$20 <Typography component="span" fontSize={14}>per month</Typography></Typography>

    <AvatarGroup max={5} sx={{ mt: 2, mb: 2 }}>
      {['A', 'B', 'C', 'D', 'E'].map((n, i) => (
        <Avatar key={i}>{n}</Avatar>
      ))}
    </AvatarGroup>

    <Button variant="text" endIcon={<span>&#9660;</span>}>Upgrade plan</Button>
  </Box>
);

export default PlanCard;
