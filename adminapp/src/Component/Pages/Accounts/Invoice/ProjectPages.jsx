import { Box, Grid, Typography } from '@mui/material';
import Sidebar from '../../../Home/Dashboard/Sidebar';
import Topbar from './Invoicetopbar';
import ProjectCard from './ProjectCard';

export default function ProjectsPage() {
  const projectData = [
    { title: 'Design Tools', desc: 'We’re constantly making mistakes from which we learn.', date: '02.08.22', participants: 10 },
    { title: 'Premium Support', desc: 'Pink is obviously a better color.', date: '07.08.22', participants: 23 },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar title="Profile/All projects" />
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" mb={2}>Some of Our Awesome Projects</Typography>
          <Grid container spacing={3}>
            {projectData.map((proj, i) => (
              <Grid item key={i}>
                <ProjectCard {...proj} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
