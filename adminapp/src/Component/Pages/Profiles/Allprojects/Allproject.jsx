import React from 'react';
import { Box, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import Topbar from './NewProjectstopbar';
import ProjectCard from './ProjectCard.jsx'
const drawerWidth = 240;

const projects = [
  {
    icon: 'D',
    color: '#FECACA',
    title: 'Design tools',
    desc: 'We’re constantly making mistakes from which we learn and improve.',
    participants: 10,
    date: '02.08.22',
  },
  {
    icon: 'P',
    color: '#BAE6FD',
    title: 'Premium Support',
    desc: 'Pink is obviously a better color. Everyone born confident.',
    participants: 23,
    date: '07.08.22',
  },
  {
    icon: 'S',
    color: '#FDE68A',
    title: 'Slack Bot',
    desc: 'If everything I did failed which it doesn’t—it actually succeeds.',
    participants: 11,
    date: '10.08.22',
  },
  {
    icon: 'D',
    color: '#FECACA',
    title: 'Developer First',
    desc: 'But the time is now to be okay to be the greatest you.',
    participants: 30,
    date: '20.08.22',
  },
  {
    icon: 'L',
    color: '#FEF9C3',
    title: 'Looking great',
    desc: 'You have the opportunity to play this game of life...',
    participants: 30,
    date: '20.08.22',
  },
  {
    icon: 'P',
    color: '#BAE6FD',
    title: 'Premium Support',
    desc: 'Everyone born confident and everything taken away.',
    participants: 23,
    date: '07.08.22',
  },
];

export default function AllProjects() {
  const [openPages, setOpenPages] = React.useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Topbar />
      <Sidebar openPages={openPages} setOpenPages={setOpenPages} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#F9FAFB',
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        <Typography variant="h6" fontWeight="bold">Sayo Kravits</Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>Public Relations</Typography>
        <Typography variant="subtitle1" fontWeight="bold" mb={2}>
          Some of Our Awesome projects
        </Typography>
        <Grid container spacing={2}>
          {projects.map((proj, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <ProjectCard {...proj} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
