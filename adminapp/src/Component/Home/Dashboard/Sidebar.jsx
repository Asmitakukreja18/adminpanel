import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import PagesIcon from '@mui/icons-material/InsertDriveFile';
import AppsIcon from '@mui/icons-material/Apps';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockIcon from '@mui/icons-material/Lock';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import FolderIcon from '@mui/icons-material/Folder';

export default function Sidebar() {
  const location = useLocation();

  const [openSubmenu, setOpenSubmenu] = useState('');

  const toggleSubmenu = (menu) => {
    setOpenSubmenu((prev) => (prev === menu ? '' : menu));
  };

  const isActive = (path) => location.pathname === path;

  const navItem = (to, text, icon, nested = false) => (
    <ListItem disablePadding>
      <ListItemButton
        component={Link}
        to={to}
        selected={isActive(to)}
        sx={{ pl: nested ? 4 : 2 }}
      >
        <ListItemIcon sx={{ color: '#6C63FF' }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          bgcolor: '#fff',
          borderRight: '1px solid #eee',
          overflowY: 'auto',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ color: '#6C63FF', fontWeight: 'bold' }}>
          Dashboard
        </Typography>
      </Box>
      <List>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleSubmenu('home')}>
            <ListItemIcon sx={{ color: '#6C63FF' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
            {openSubmenu === 'home' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openSubmenu === 'home'} timeout="auto" unmountOnExit>
          {navItem('/dashboard', 'Dashboard', <DashboardIcon />, true)}
          {navItem('/analytics', 'Analytics', <BarChartIcon />, true)}
        </Collapse>

        <ListItem disablePadding>
          <ListItemButton onClick={() => toggleSubmenu('pages')}>
            <ListItemIcon sx={{ color: '#6C63FF' }}>
              <PagesIcon />
            </ListItemIcon>
            <ListItemText primary="Pages" />
            {openSubmenu === 'pages' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={openSubmenu === 'pages'} timeout="auto" unmountOnExit>
          <ListItemButton sx={{ pl: 4 }} onClick={() => toggleSubmenu('profile')}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
            {openSubmenu === 'profile' ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSubmenu === 'profile'} timeout="auto" unmountOnExit>
            {navItem('/profile', 'Overview', <DashboardIcon />, true)}
            {navItem('/teams', 'Teams', <GroupIcon />, true)}
            {navItem('/projects', 'All Projects', <FolderIcon />, true)}
          </Collapse>

          {navItem('/user', 'User', <AppsIcon />, true)}
          {navItem('/accounts', 'Accounts', <AppsIcon />, true)}
          {navItem('/projects', 'Projects', <AppsIcon />, true)}
          {navItem('/pricing', 'Pricing Page', <ShoppingCartIcon />, true)}
          {navItem('/charts', 'Charts', <BarChartIcon />, true)}
          {navItem('/notifications', 'Notification', <NotificationsIcon />, true)}
          {navItem('/chat', 'Chat', <ChatIcon />, true)}
        </Collapse>

        {navItem('/applications', 'Applications', <AppsIcon />)}

        {navItem('/ecommerce', 'E-commerce', <ShoppingCartIcon />)}

        {navItem('/auth', 'Authentication', <LockIcon />)}

      </List>
    </Drawer>
  );
}
