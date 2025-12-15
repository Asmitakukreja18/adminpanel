import React from 'react';
import {
  Box, Typography, TextField, Button, MenuItem, Avatar, IconButton, Divider
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const roles = ['Read-only', 'Editor', 'Admin'];
const defaultMembers = [
  { name: 'Oliva Rhye', email: 'Oliva@gmail.com' },
  { name: 'Phoenix Baker', email: 'Phoenix@gmail.com' },
  { name: 'Lana Steiner', email: 'Lana@gmail.com' },
  { name: 'Demi Wilkson', email: 'Demi@gmail.com' },
];

const TeamManagement = () => {
  const [invites, setInvites] = React.useState([
    { email: 'team@team.com', role: 'Read-only' },
    { email: 'team@team.com', role: 'Read-only' },
    { email: 'team@team.com', role: 'Read-only' },
  ]);

  const handleAdd = () => {
    setInvites([...invites, { email: '', role: 'Read-only' }]);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight={600} mb={2}>Team management</Typography>
      <Typography variant="body2" mb={3}>Manage your team members and their account permissions here.</Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1" fontWeight={500}>Invite team members</Typography>
        <Typography variant="body2" mb={2}>
          Get your projects up and running faster by inviting your team to collaborate.
        </Typography>

        {invites.map((invite, idx) => (
          <Box key={idx} sx={{ display: 'flex', gap: 2, mb: 1 }}>
            <TextField
              fullWidth
              value={invite.email}
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1, color: 'gray' }} />,
              }}
            />
            <TextField select value={invite.role} sx={{ minWidth: 150 }}>
              {roles.map(role => <MenuItem key={role} value={role}>{role}</MenuItem>)}
            </TextField>
          </Box>
        ))}

        <Box sx={{ my: 2, display: 'flex', gap: 2 }}>
          <Button onClick={handleAdd}>+ Add another</Button>
          <Button variant="text" startIcon={<EmailIcon color="primary" />}>Send invites</Button>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="subtitle1" fontWeight={500}>Team members</Typography>
        <Typography variant="body2" mb={2}>
          Get your projects up and running faster by inviting your team to collaborate.
        </Typography>

        {defaultMembers.map((member, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              py: 1,
              justifyContent: 'space-between',
              '&:hover': { bgcolor: '#f9f9fb' }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar />
              <Box>
                <Typography>{member.name}</Typography>
                <Typography variant="caption">{member.email}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Typography variant="body2">Admin</Typography>
              <Button variant="text" color="error">Delete</Button>
              <Button variant="text">Edit</Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TeamManagement;
