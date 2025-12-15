import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const actions = [
  { label: 'Profile visits', value: 250 },
  { label: 'Website clicks', value: 115 },
  { label: 'Calls', value: 67 },
  { label: 'Get direction', value: 164 },
  { label: 'Emails', value: 170 },
];

export default function ActionsCard() {
  return (
    <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>Actions</Typography>
      <List dense>
        {actions.map((action, i) => (
          <ListItem key={i} disableGutters>
            <ListItemText primary={action.label} />
            <Typography>{action.value}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
