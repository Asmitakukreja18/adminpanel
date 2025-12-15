import { AppBar, Box, Toolbar, Typography, TextField, Avatar, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => (
  <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h6">Overview</Typography>
      <TextField
        size="small"
        placeholder="Search anything here..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ background: '#f5f5f5', borderRadius: 2 }}
      />
    </Toolbar>
  </AppBar>
);

export default Topbar;
