import { Box, Grid, Typography, Paper } from '@mui/material';
import TaskCard from './Taskcard';

const columns = [
  { title: 'To Do task', tasks: ['Webdev', 'Create a new theme', 'Improve social banners'] },
  { title: 'In Progress', tasks: ['Cloud computing', 'Update subscription', 'Poster design'] },
  { title: 'In Progress', tasks: ['Landing page', 'Food app design', 'Web design'] },
];

const KanbanBoard = () => (
  <Box p={3}>
    <Grid container spacing={2}>
      {columns.map((column, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>{column.title}</Typography>
            {column.tasks.map((task, index) => (
              <TaskCard key={index} title={task} />
            ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default KanbanBoard;
