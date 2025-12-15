import { Paper, Typography, List, ListItem, ListItemText, Avatar } from '@mui/material';

const countries = [
  { label: 'Pakistan', percent: '54%', flag: '🇵🇰' },
  { label: 'Germany', percent: '32%', flag: '🇩🇪' },
  { label: 'United States', percent: '27%', flag: '🇺🇸' },
  { label: 'Spain', percent: '25%', flag: '🇪🇸' },
];

export default function TopCountries() {
  return (
    <Paper elevation={1} sx={{ p: 2, mt: 3 }}>
      <Typography variant="subtitle1" mb={1}>Top Countries</Typography>
      <List>
        {countries.map((item, i) => (
          <ListItem key={i} disableGutters>
            <Avatar sx={{ mr: 2 }}>{item.flag}</Avatar>
            <ListItemText primary={item.label} />
            <Typography>{item.percent}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
