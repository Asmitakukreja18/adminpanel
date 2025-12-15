import React from 'react';
import {
  Box, Table, TableBody, TableCell, TableHead, TableRow, Typography,
  Button, IconButton, Checkbox
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const rows = [
  { id: "#780-Dec-2022", date: "Dec 23, 2022", amount: "$12.00", users: "15 Users" },
  { id: "#345-Nov-2022", date: "Nov 12, 2022", amount: "$22.00", users: "56 Users" },
  { id: "#213-Oct-2022", date: "Oct 09, 2022", amount: "$80.00", users: "90 Users" },
  { id: "#324-Agu-2022", date: "Agu 03, 2022", amount: "$12.00", users: "22 Users" }
];

const BillingTable = () => (
  <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2, mt: 3 }}>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Box>
        <Typography fontWeight={600}>Billing history</Typography>
        <Typography variant="body2" color="text.secondary">Download your previous plan receipts and usage details.</Typography>
      </Box>
      <Button variant="contained" color="primary">Download all</Button>
    </Box>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Billing</TableCell>
          <TableCell>Billing Date</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Plan</TableCell>
          <TableCell>Users</TableCell>
          <TableCell align="right">Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, idx) => (
          <TableRow key={idx}>
            <TableCell>
              <Checkbox />
              🧾 Billing {row.id}
            </TableCell>
            <TableCell>{row.date}</TableCell>
            <TableCell>USD {row.amount}</TableCell>
            <TableCell>Basic plan</TableCell>
            <TableCell>{row.users}</TableCell>
            <TableCell align="right">
              <Button variant="outlined" size="small" sx={{ mr: 1 }}>Download all</Button>
              <IconButton><MoreVertIcon /></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Box>
);

export default BillingTable;
