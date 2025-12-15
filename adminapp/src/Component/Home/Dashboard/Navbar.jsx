import { AppBar, Toolbar, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <InputBase
          placeholder="Search anything here..."
          sx={{ backgroundColor: "#f0f0f0", px: 2, py: 0.5, borderRadius: 2, width: 400 }}
          startAdornment={<SearchIcon sx={{ mr: 1 }} />}
        />
      </Toolbar>
    </AppBar>
  );
}
