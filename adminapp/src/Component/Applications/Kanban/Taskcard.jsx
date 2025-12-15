import { Paper, Typography, Box, Avatar, Stack } from '@mui/material';

const TaskCard = ({ title }) => (
  <Paper variant="outlined" sx={{ p: 2, mb: 2, borderRadius: 2 }}>
    <Typography variant="subtitle2">{title}</Typography>
    <Typography variant="caption" color="text.secondary">Cisco Team</Typography>
    <Box mt={1}>
      <Stack direction="row" spacing={-1}>
        <Avatar sx={{ width: 24, height: 24 }} src="/avatar1.png" />
        <Avatar sx={{ width: 24, height: 24 }} src="/avatar2.png" />
        <Avatar sx={{ width: 24, height: 24 }} src="/avatar3.png" />
      </Stack>
    </Box>
  </Paper>
);

export default TaskCard;
