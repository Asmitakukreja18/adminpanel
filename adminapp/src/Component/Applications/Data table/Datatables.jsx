import React from 'react';
import {
  Box, Typography, Paper, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Avatar
} from '@mui/material';

const rows = [
  {
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170,750',
    startDate: '22/5/2009',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'San Francisco',
    salary: '$433,060',
    startDate: '22/5/2011',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Ashton Cox',
    position: 'Technical Author',
    age: 66,
    office: 'Edinburgh',
    salary: '$320,800',
    startDate: '25/5/2011',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    name: 'Tiger Nixon',
    position: 'Javascript Developer',
    age: 22,
    office: 'Tokyo',
    salary: '$170,750',
    startDate: '22/5/2012',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Cedric Kelly',
    position: 'Integration Specialist',
    age: 31,
    office: 'New York',
    salary: '$86,000',
    startDate: '22/5/2012',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    name: 'Airi Satou',
    position: 'Sales Assistant',
    age: 45,
    office: 'Edinburgh',
    salary: '$433,060',
    startDate: '30/5/2009',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Brielle Williamson',
    position: 'Integration Specialist',
    age: 19,
    office: 'Berlin',
    salary: '$162,700',
    startDate: '22/5/2015',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Herrod Chandler',
    position: 'Javascript Developer',
    age: 61,
    office: 'Islamabad',
    salary: '$372,000',
    startDate: '28/5/2016',
    avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    name: 'Rhona Davidson',
    position: 'Software Engineer',
    age: 59,
    office: 'Delhi',
    salary: '$137,500',
    startDate: '22/5/2006',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Colleen Hurst',
    position: 'Accountant',
    age: 55,
    office: 'London',
    salary: '$327,900',
    startDate: '21/5/2008',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    name: 'Sonya Frost',
    position: 'Sales Assistant',
    age: 41,
    office: 'Karachi',
    salary: '$205,500',
    startDate: '22/5/2010',
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

const DataTables = () => {
  return (
    <Box p={4}>
      <Typography variant="h6" fontWeight={600} color="purple" mb={3}>
        Data tables
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 2, p: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              {['Name', 'Position', 'Age', 'Office', 'Salary', 'Start date'].map((header) => (
                <TableCell key={header} sx={{ fontWeight: 600, color: '#444' }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i} hover>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src={row.avatar} sx={{ width: 32, height: 32, mr: 1 }} />
                    {row.name}
                  </Box>
                </TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.office}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.startDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTables;
