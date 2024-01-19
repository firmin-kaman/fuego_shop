import React, { useState } from 'react';
import Header from '../../Components/Pages/Navigation/Header';
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([
    { id: 1, name: 'Product 1', price: 10, image: 'product1.jpg', quantity: 1 },
    { id: 2, name: 'Product 2', price: 15, image: 'product2.jpg', quantity: 2 },
    // Add more products as needed
  ]);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };
  const addToFavorite = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="container">
      <Header/>
      <Paper elevation={3} style={{ padding: '2px', marginTop: '2px', textAlign: "center" }}>
        <h1 className="title">Shopping Cart</h1>
      </Paper>
      <TableContainer component={Paper} style={{ marginTop: '16px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map(product => (
              <TableRow key={product.id}>
                <TableCell>
                  <Card style={{ display: 'flex', alignItems: 'center' }}>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="64"
                      image={product.image}
                      title={product.name}
                    />
                    <Box sx={{ flexGrow: 1, marginLeft: 1 }}>
                      <Typography variant="subtitle1">{product.name}</Typography>
                    </Box>
                  </Card>
                </TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>
                  <Button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</Button>
                  {product.quantity}
                  <Button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</Button>
                </TableCell>
                <TableCell>${product.price * product.quantity}</TableCell>
                <TableCell>
                  <IconButton onClick={() => removeFromCart(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => addToFavorite(product.id)}>
                    <FavoriteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="h5">Total: ${calculateTotal()}</Typography>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </Paper>
    </div>
  );
};

export default CartPage;
