import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ComputerIcon from '@mui/icons-material/Computer';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import TvIcon from '@mui/icons-material/Tv';

const categories = [
  { icon: <SmartphoneIcon color="primary" />, label: 'Mobile', percent: '96.42%' },
  { icon: <ComputerIcon color="action" />, label: 'Desktop', percent: '2.76%' },
  { icon: <TabletMacIcon color="disabled" />, label: 'Tablet', percent: '0.82%' },
  { icon: <TvIcon sx={{ color: '#8e44ad' }} />, label: 'TV', percent: '12.3%' },
];

export default function DeviceCategory() {
  return (
    <Paper elevation={1} sx={{ p: 2, mt: 3 ,width: '60%',
    minWidth: 200, }}>
      <Typography variant="subtitle1" mb={1}>Device Category</Typography>
      <List>
        {categories.map((item, i) => (
          <ListItem key={i} disableGutters>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
            <Typography>{item.percent}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
