import React from 'react';
import { Paper, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import CubeIcon from '@mui/icons-material/Category'; // Or any suitable icon

const items = [
  { title: "Bento 3D Kit", type: "Illustration", color: "#a083ff" },
  { title: "Bento 3D Kit", type: "Coded Template", color: "#8df89d" },
  { title: "Bento 3D Kit", type: "Illustration", color: "#ff7373" },
];

export default function EarningsByItem() {
  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>Earnings by item</Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: item.color }}>
                <CubeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.title} secondary={item.type} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
