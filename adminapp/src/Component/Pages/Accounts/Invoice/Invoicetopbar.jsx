import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

export default function Topbar({ title }) {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>{title}</Typography>
        <Box>
          <Button color="primary">App</Button>
          <Button>Messages</Button>
          <Button>Settings</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
