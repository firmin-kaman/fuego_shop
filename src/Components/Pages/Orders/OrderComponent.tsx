import React, { useState } from 'react';
import { Paper, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { products } from '../Products/ProductList'; // Importez la liste de produits depuis ProductList.tsx

interface Order {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  totalPrice: string;
  date: Date;
}

const OrdersComponent: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | ''>('');

  // Generate sample orders (for demonstration purposes)
  const generateSampleOrders = () => {
    const sampleOrders: Order[] = [];
    // Generating orders for demonstration
    for (let i = 0; i < 10; i++) {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const totalPrice = (Math.random() * 200 + 50).toFixed(2); // Convertir en chaîne de caractères
      const order: Order = {
        id: i + 1,
        productId: randomProduct.id,
        productName: randomProduct.name,
        quantity: Math.floor(Math.random() * 5) + 1, // Random quantity between 1 and 5
        totalPrice: totalPrice, // Assign totalPrice
        date: new Date(`20${Math.floor(Math.random() * 2) + 20}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`), // Random date in the last 2 years
      };
      sampleOrders.push(order);
    }
    setOrders(sampleOrders);
  };

  // Handle year selection change
  const handleYearChange = (event: SelectChangeEvent<number>) => { // Utilisez le type SelectChangeEvent<number>
    setSelectedYear(event.target.value as number);
  };

  return (
    <Paper style={{ padding: 16, margin: '0px auto', maxWidth: 600, backgroundColor: "#e3e3e3" }}>
      <Typography variant="h5" style={{ marginBottom: 16 }}>Filter By</Typography>
      
      {/* Year filter */}
      <FormControl variant="outlined" style={{ marginBottom: 16 }}>
        <InputLabel>Année</InputLabel>
        <Select
          value={selectedYear}
          onChange={handleYearChange}
          label="Année"
          style={{ width: 120 }}
        >
          <MenuItem value={''}>Toutes les années</MenuItem>
          {/* You can dynamically generate years based on available orders */}
          {/* For simplicity, let's assume orders are from 2020 to 2023 */}
          {[2020, 2021, 2022, 2023].map(year => (
            <MenuItem key={year} value={year}>{year}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
      {/* Orders list */}
      {orders.length === 0 ? (
        <Typography>Aucune commande disponible. <button onClick={generateSampleOrders}>Générer des commandes fictives</button></Typography>
      ) : (
        <div>
          {orders
            .filter(order => selectedYear === '' || new Date(order.date).getFullYear() === selectedYear)
            .map(order => (
              <div key={order.id} style={{ marginBottom: 16 }}>
                <Typography variant="subtitle1">{order.productName}</Typography>
                <Typography variant="body2">Quantité: {order.quantity}</Typography>
                <Typography variant="body2">Prix total: {typeof order.totalPrice === 'string' ? order.totalPrice : parseFloat(order.totalPrice).toFixed(2)} €</Typography>
                <Typography variant="body2">Date: {order.date.toLocaleDateString()}</Typography>
              </div>
            ))}
        </div>
      )}
    </Paper>
  );
};

export default OrdersComponent;
