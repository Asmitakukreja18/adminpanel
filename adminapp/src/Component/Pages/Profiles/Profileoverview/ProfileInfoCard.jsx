import { Paper, Typography, Avatar, LinearProgress, Stack, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export default function ProfileInfoCard() {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Stack alignItems="center" spacing={1}>
        <Avatar src="https://i.pravatar.cc/150?img=12" sx={{ width: 64, height: 64 }} />
        <Typography variant="h6">Alice_turner</Typography>
        <Typography variant="body2" color="text.secondary">VIP Training Course</Typography>
        <LinearProgress variant="determinate" value={10} sx={{ width: '100%', mb: 2 }} />

        <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
          <Typography fontWeight="bold">Hashtag sets</Typography>
          <IconButton size="small"><SettingsIcon fontSize="small" /></IconButton>
        </Stack>

        {['Sport & Health', 'Animals', 'Beauty', 'Art'].map(category => (
          <Paper key={category} variant="outlined" sx={{ p: 1, width: '100%' }}>
            <Typography variant="body2" fontWeight="bold">{category}</Typography>
            <Typography variant="caption" color="text.secondary">
              #tags #for #that
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Paper>
  );
}
