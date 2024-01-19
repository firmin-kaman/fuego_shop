import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Paper,
  Rating
} from '@mui/material';
import { Favorite, FavoriteBorder, FilterList } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import productImage1 from '../../Images/smartphone.png';
import productImage2 from '../../Images/laptop.png';
import productImage3 from '../../Images/headphones.png';
import productImage4 from '../../Images/smartwatch.png';
import productImage5 from '../../Images/veloelectrique.png';
import productImage6 from '../../Images/shirts-2-1920.png';


const products = [
  {
    id: 1,
    name: 'Smartphone XYZ',
    description: 'Un smartphone dernier cri avec des fonctionnalités avancées.',
    imageUrl: productImage1,
    price: 899.99.toFixed(2),
  },
  {
    id: 2,
    name: 'Ordinateur Portable ABC',
    description: 'Un ordinateur portable puissant pour toutes vos tâches informatiques.',
    imageUrl: productImage2,
    price: 1299.99,
  },
  {
    id: 3,
    name: 'Casque Audio Bluetooth',
    description: 'Un casque audio sans fil avec une qualité audio exceptionnelle.',
    imageUrl: productImage3,
    price: 99.99,
  },
  {
    id: 4,
    name: 'Montre Connectée',
    description: 'Une montre connectée élégante avec suivi d`activité et notifications.',
    imageUrl: productImage4,
    price: 199.99,
  },
  {
    id: 5,
    name: 'Vélo electroque',
    description: 'Un vélo élégant avec une autonomie de 4h. parfais pour les petites balades.',
    imageUrl: productImage5,
    price: 368.99,
  },
  {
    id: 6,
    name: 'T-shirt',
    description: 'Un T-shirt soyeux pour homme, femme et enfants.',
    imageUrl: productImage6,
    price: 45.99,
  },
  // ... Ajoutez d'autres produits selon vos besoins
];

const ProductList: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
   const navigate = useNavigate();

  const toggleFavorite = (productId: number, event: React.MouseEvent<HTMLButtonElement>) => {
    if (favorites.includes(productId)) {
      event.stopPropagation();
      setFavorites(favorites.filter((id) => id !== productId));
      navigate(`/favorites`);
    } else {
      event.stopPropagation();
      setFavorites([...favorites, productId]);
      navigate(`/favorites`);
    }
  };

  // Navigation
  const handleProductClick = (productId: number) => {
    // Redirect to the "/productDetails" page with the product ID
    // navigate(`/productDetails/${productId}`);
    navigate(`/productDetails`);
  };
  const gridStyle = {
    cursor: 'pointer',
  };

  const handleAddToCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Stop the propagation of the click event to the parent Card
    event.stopPropagation();

    navigate('/cart');
  };


  // Rates Stars
  const [value] = React.useState<number | null>(2);

  return (
    // Filter
    <Paper style={{ padding: 16, margin: '0px auto', maxWidth: 1280, backgroundColor: "#D3D3D3" }}>
      <div style={{ marginBottom: 16 }}>
        <Tooltip title="Filtrer les produits">
          <IconButton>
            <FilterList />
          </IconButton>
        </Tooltip>
      </div>

    {/* Products */}
      <Grid container spacing={2 }>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} style={gridStyle}>
            <Card onClick={() => handleProductClick(product.id)}>
              {/* Images */}
              <CardMedia
                component="img"
                style={{  objectFit: 'cover' }}
                image={product.imageUrl}
                alt={product.name}
              />
              {/* Text */}
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              {/* Stars notation */}
              <CardContent sx={{ marginTop: "-25px", marginBottom: "-20px", display: "flex"  }}> 
                {/* <Typography component="legend">Rates</Typography> */}
                <Rating name="read-only" value={value} readOnly /> 
                <p style={{ margin: "7px" }}>250</p>
              </CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: 16 }}>
                <Typography variant="body1">€ {product.price}</Typography>
                <Button variant="outlined" color="primary" onClick={ handleAddToCartClick }>
                  Ajouter au panier
                </Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 8 }}>
                <Tooltip title={favorites.includes(product.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}>
                  <IconButton
                    onClick= {(event) => toggleFavorite(product.id, event)}
                    color= {favorites.includes(product.id) ? 'error' : 'default'}
                    style= {{ color: favorites.includes(product.id) ? '#ff9800' : ''}}
                  >
                    {favorites.includes(product.id) ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                </Tooltip>
                
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ProductList;

