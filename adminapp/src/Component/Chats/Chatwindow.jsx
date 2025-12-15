// ChatWindow.jsx
import React from 'react';
import { Box, Typography, Paper, Avatar, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatWindow = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Messages area */}
      <Box>
        <Typography variant="caption" sx={{ textAlign: 'center', display: 'block', my: 2 }}>August 21</Typography>

        {/* Example left-aligned message */}
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Avatar sx={{ mr: 1 }} />
          <Paper sx={{ p: 2, bgcolor: '#f0ebff', maxWidth: '60%' }}>
            <Typography fontSize={14}>Lorem ipsum dolor sit amet...</Typography>
            <Typography variant="caption" display="block" align="right">10:15 pm</Typography>
          </Paper>
        </Box>

        {/* Example right-aligned message */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Paper sx={{ p: 2, bgcolor: '#fff', maxWidth: '60%' }}>
            <Typography fontSize={14}>Lorem ipsum right...</Typography>
            <Typography variant="caption" display="block" align="right">10:15 pm</Typography>
          </Paper>
          <Avatar sx={{ ml: 1 }} />
        </Box>

        {/* Audio bubble (simplified) */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ mr: 1 }} />
          <Paper sx={{ p: 2, bgcolor: '#f0ebff', maxWidth: '60%' }}>
            <Typography fontSize={14}>🎵 00:25 [Audio Waveform Placeholder]</Typography>
            <Typography variant="caption" display="block" align="right">06:00 pm</Typography>
          </Paper>
        </Box>
      </Box>

      {/* Input field */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
        <TextField
          fullWidth
          placeholder="Write a message..."
          variant="outlined"
          size="small"
          sx={{ bgcolor: '#fff', borderRadius: 2 }}
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatWindow;
