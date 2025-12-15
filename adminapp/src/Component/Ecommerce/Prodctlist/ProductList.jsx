import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
} from '@mui/material';

const products = [
    {
      name: 'BKLOG Hoodie',
      category: 'Clothing',
      quantity: 12,
      sku: '243598234',
      salary: '$170,750',
      status: 'In Stock',
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    {
      name: 'MacBook Pro',
      category: 'Electronics',
      quantity: 63,
      sku: '877712',
      salary: '$433,060',
      status: 'Out of Stock',
      avatar: 'https://i.pravatar.cc/40?img=2',
    },
    {
      name: 'Metro Bar Stool',
      category: 'Furniture',
      quantity: 86,
      sku: '0134729',
      salary: '$320,800',
      status: 'Out of Stock',
      avatar: 'https://i.pravatar.cc/40?img=3',
    },
    {
      name: 'Alchimia Chair',
      category: 'Furniture',
      quantity: 22,
      sku: '113213',
      salary: '$170,750',
      status: 'In Stock',
      avatar: 'https://i.pravatar.cc/40?img=4',
    },
    {
      name: 'Fendi Gradient Coat',
      category: 'Clothing',
      quantity: 31,
      sku: '634729',
      salary: '$86,000',
      status: 'Out of Stock',
      avatar: 'https://i.pravatar.cc/40?img=5',
    },
    {
      name: 'Off White Cotton',
      category: 'Clothing',
      quantity: 23,
      sku: '634729',
      salary: '$433,060',
      status: 'In Stock',
      avatar: 'https://i.pravatar.cc/40?img=6',
    },
    {
      name: 'Y-3 Yohji Yamamoto',
      category: 'Shoes',
      quantity: 31,
      sku: '634729',
      salary: '$162,700',
      status: 'In Stock',
      avatar: 'https://i.pravatar.cc/40?img=7',
    },
    {
      name: 'Fendi Gradient Coat',
      category: 'Clothing',
      quantity: 34,
      sku: '113213',
      salary: '$372,000',
      status: 'Out of Stock',
      avatar: 'https://i.pravatar.cc/40?img=8',
    },
    {
      name: 'Metro Bar Stool',
      category: 'Furniture',
      quantity: 59,
      sku: '877712',
      salary: '$137,500',
      status: 'In Stock',
      avatar: 'https://i.pravatar.cc/40?img=9',
    },
    {
      name: 'MacBook Pro',
      category: 'Electronics',
      quantity: 34,
      sku: '0134729',
      salary: '$327,900',
      status: 'Out of Stock',
      avatar: 'https://i.pravatar.cc/40?img=10',
    },
    {
      name: 'BKLOG Hoodie',
      category: 'Clothing',
      quantity: 41,
      sku: '877712',
      salary: '$205,500',
      status: 'Out of Stock',
      avatar: 'https://i.pravatar.cc/40?img=11',
    },
    {
      name: 'Alchimia Chair',
      category: 'Furniture',
      quantity: 21,
      sku: '634729',
      salary: '$103,600',
      status: 'In Stock',
      avatar: 'https://i.pravatar.cc/40?img=12',
    },
  ];

const getStatusChip = (status) => {
  return (
    <Chip
      label={status}
      size="small"
      sx={{
        backgroundColor: status === 'In Stock' ? '#E8F5E9' : '#FFEBEE',
        color: status === 'In Stock' ? '#2E7D32' : '#C62828',
        fontWeight: 500,
      }}
    />
  );
};

const ProductList = () => {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Product List
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Product</strong></TableCell>
              <TableCell><strong>Category</strong></TableCell>
              <TableCell><strong>Quantity</strong></TableCell>
              <TableCell><strong>Sku</strong></TableCell>
              <TableCell><strong>Salary</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((prod, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar src={prod.avatar} sx={{ width: 28, height: 28, mr: 1 }} />
                    {prod.name}
                  </Box>
                </TableCell>
                <TableCell>{prod.category}</TableCell>
                <TableCell>{prod.quantity}</TableCell>
                <TableCell>{prod.sku}</TableCell>
                <TableCell>{prod.salary}</TableCell>
                <TableCell>{getStatusChip(prod.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductList;
