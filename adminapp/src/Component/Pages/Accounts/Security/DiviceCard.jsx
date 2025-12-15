import { Card, Typography, Button, Divider, Box, Stack, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const devices = [
  { name: 'iPhone 11', location: 'London, UK', time: 'Oct 21 21 at 2:30 AM' },
  { name: 'Galaxy 18', location: 'Berlin', time: 'Nov 22 at 2:32 AM' },
  { name: 'Vivo v21', location: 'London, UK', time: 'Oct 21 at 2:50 AM' },
  { name: 'iPhone 12', location: 'London, UK', time: 'Oct 21 at 2:30 AM' },
  { name: 'Samsung', location: 'Karachi, PAK', time: 'Oct 21 at 2:30 AM' },
];

export default function DeviceCard() {
  return (
    <Card sx={{ p: 3, minWidth: 300 }}>
      <Typography variant="h6">Devices</Typography>
      <Typography variant="body2" mb={2}>
        The Last Pass password generator creates random passwords based on parameters set by you.
      </Typography>
      <Button variant="contained" sx={{ mb: 2 }} color="primary">
        Sign out from all devices
      </Button>
      {devices.map((d, idx) => (
        <Box key={idx}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" py={1}>
            <Box>
              <Typography>{d.name}</Typography>
              <Typography variant="caption">{`${d.location} • ${d.time}`}</Typography>
            </Box>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Stack>
          {idx < devices.length - 1 && <Divider />}
        </Box>
      ))}
      <Button fullWidth variant="outlined" sx={{ mt: 3 }}>
        Need help?
      </Button>
    </Card>
  );
}
