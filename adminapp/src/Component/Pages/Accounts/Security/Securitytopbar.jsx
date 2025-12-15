import { AppBar, Toolbar, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', background: '#f3f4f6', px: 2, py: 0.5, borderRadius: 2 }}>
          <SearchIcon sx={{ mr: 1 }} />
          <InputBase placeholder="Search anything here..." fullWidth />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
